'use client';

import { useEffect, useRef, useState } from 'react';
import { choices, errors as messages, formText, mischiefPage, waitlistPage } from '@/content';
import Confirmation from './Confirmation';
import { ChoiceGroup, ErrorSummary, Errors, TextField, checkRequired, focusFirst } from './FormBits';
import { TrapField, useFormSubmit } from './useFormSubmit';

const f = mischiefPage.form;
const F = f.fields;

const MAX_PHOTOS = 5;
const MAX_BYTES = 10 * 1024 * 1024;
const BUCKET = 'commission-photos';

// The photo types the private bucket accepts, and the file ending each gets.
const TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/heic': 'heic',
  'image/heif': 'heif',
  'image/gif': 'gif',
};
const BY_ENDING: Record<string, string> = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', heic: 'image/heic', heif: 'image/heif', gif: 'image/gif' };

// Some phones hand over a photo with no type; fall back to its file ending.
function photoType(file: File): { type: string; ending: string } | null {
  if (TYPES[file.type]) return { type: file.type, ending: TYPES[file.type] };
  const end = file.name.split('.').pop()?.toLowerCase() ?? '';
  const type = BY_ENDING[end];
  return type ? { type, ending: TYPES[type] } : null;
}

type Picked = { id: string; file: File; preview: string };

export default function CommissionForm({ supabaseUrl, publishableKey }: { supabaseUrl: string; publishableKey: string }) {
  const { status, error, submit } = useFormSubmit('/api/commission');
  const [errs, setErrs] = useState<Errors>({});
  const [photos, setPhotos] = useState<Picked[]>([]);
  const [photoNote, setPhotoNote] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const previews = useRef<string[]>([]);

  useEffect(() => () => previews.current.forEach((u) => URL.revokeObjectURL(u)), []);

  if (status === 'done') {
    return <Confirmation heading={f.successHeading} body={f.success} />;
  }

  const clear = (name: string) => setErrs((e) => (e[name] ? { ...e, [name]: '' } : e));

  function addPhotos(list: FileList | null) {
    if (!list) return;
    const notes: string[] = [];
    const next = [...photos];
    for (const file of Array.from(list)) {
      if (!photoType(file)) {
        notes.push(`${F.photos.notImage} ${file.name}`);
        continue;
      }
      if (file.size > MAX_BYTES) {
        notes.push(`${F.photos.tooBig} ${file.name}`);
        continue;
      }
      if (next.length >= MAX_PHOTOS) {
        notes.push(F.photos.tooMany);
        break;
      }
      const preview = URL.createObjectURL(file);
      previews.current.push(preview);
      next.push({ id: `${file.name}-${file.size}-${file.lastModified}-${Math.random()}`, file, preview });
    }
    setPhotos(next);
    setPhotoNote(notes.length ? notes.join(' ') : null);
    setUploadError(null);
    if (input.current) input.current.value = '';
  }

  // Sends each photo straight from the browser into the private bucket. The
  // public key may add a photo there and can never read one back.
  async function uploadAll(): Promise<{ folder: string; paths: string[] } | null> {
    if (!photos.length) return { folder: '', paths: [] };
    // A fresh folder every attempt, so a retry never collides with a photo
    // that went through on an earlier try.
    const folder = crypto.randomUUID();
    const base = supabaseUrl.replace(/\/$/, '');
    const paths: string[] = [];
    for (let i = 0; i < photos.length; i++) {
      setUploading(`${F.photos.uploading} ${i + 1} of ${photos.length}…`);
      const t = photoType(photos[i].file)!;
      const path = `${folder}/${i + 1}.${t.ending}`;
      try {
        const res = await fetch(`${base}/storage/v1/object/${BUCKET}/${path}`, {
          method: 'POST',
          headers: {
            apikey: publishableKey,
            Authorization: `Bearer ${publishableKey}`,
            'Content-Type': t.type,
            'x-upsert': 'false',
            'cache-control': '3600',
          },
          body: photos[i].file,
        });
        if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
      } catch (err) {
        console.error('Photo upload failed', err);
        setUploading(null);
        setUploadError(F.photos.failed);
        return null;
      }
      paths.push(path);
    }
    setUploading(null);
    return { folder, paths };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (uploading || status === 'sending') return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = checkRequired(data, [
      { name: 'full_name', message: F.name.error },
      { name: 'email', message: F.email.error, email: true, emailMessage: messages.email },
      { name: 'wants', message: F.wants.error },
      { name: 'timing', message: F.timing.error },
    ]);
    setErrs(found);
    if (Object.keys(found).length) {
      focusFirst(form, found);
      return;
    }
    setUploadError(null);
    const sent = await uploadAll();
    if (!sent) return;
    await submit({
      full_name: data.get('full_name'),
      email: data.get('email'),
      phone: data.get('phone'),
      wants: data.getAll('wants'),
      story: data.get('story'),
      is_gift: data.get('is_gift'),
      timing: data.get('timing'),
      photo_folder: sent.folder || null,
      photo_paths: sent.paths,
      ap_hp: data.get('ap_hp'),
      source_page: window.location.href,
    });
  }

  const hasErrs = Object.values(errs).some(Boolean);
  const busy = !!uploading || status === 'sending';

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-8">
      <TrapField />
      <p className="text-sm text-muted">{formText.requiredNote}</p>
      <ErrorSummary show={hasErrs} text={formText.errorSummary} />

      <div className="grid gap-8 sm:grid-cols-2">
        <TextField name="full_name" label={F.name.label} required autoComplete="name" error={errs.full_name} onEdit={clear} className="sm:col-span-2" />
        <TextField name="email" label={F.email.label} required type="email" inputMode="email" autoComplete="email" error={errs.email} onEdit={clear} />
        <TextField name="phone" label={F.phone.label} type="tel" inputMode="tel" autoComplete="tel" />
      </div>

      <ChoiceGroup name="wants" legend={F.wants.label} note={F.wants.note} options={choices.wants} multiple required error={errs.wants} onEdit={clear} />

      <div>
        <label htmlFor="story" className="field-label">
          {F.story.label}
          <span className="font-normal text-muted"> ({formText.optional})</span>
        </label>
        <textarea id="story" name="story" rows={5} maxLength={4000} placeholder={F.story.placeholder} className="field resize-y" />
      </div>

      {/* Inspiration photos */}
      <div>
        <p id="photos-label" className="field-label">
          {F.photos.label}
          <span className="font-normal text-muted"> ({formText.optional})</span>
        </p>
        <span id="photos-hint" className="field-hint">
          {F.photos.hint}
        </span>
        {photos.length > 0 && (
          <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5" aria-label={F.photos.label}>
            {photos.map((p) => (
              <li key={p.id} className="relative">
                <div className="relative aspect-square overflow-hidden bg-linen">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.preview}
                    alt={p.file.name}
                    className="h-full w-full object-cover"
                    onError={(e) => ((e.currentTarget as HTMLImageElement).style.visibility = 'hidden')}
                  />
                  <span className="pointer-events-none absolute inset-x-1 bottom-1 truncate text-[0.65rem] text-muted">{p.file.name}</span>
                </div>
                <button
                  type="button"
                  disabled={busy}
                  className="mt-1 min-h-9 text-sm text-cherry underline decoration-cherry-soft underline-offset-4"
                  onClick={() => {
                    setPhotos((list) => list.filter((x) => x.id !== p.id));
                    setPhotoNote(null);
                    setUploadError(null);
                  }}
                >
                  {F.photos.remove}
                  <span className="sr-only"> {p.file.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {photos.length < MAX_PHOTOS && (
          <label className="mt-4 inline-flex min-h-12 cursor-pointer items-center border border-line bg-paper px-5 py-2 text-sm text-ink transition-colors hover:border-brass focus-within:border-brass">
            <span aria-hidden className="mr-2 text-cherry">+</span>
            {F.photos.button}
            <input
              ref={input}
              type="file"
              name="photo_picker"
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif,image/gif"
              multiple
              aria-describedby="photos-hint"
              className="sr-only"
              disabled={busy}
              onChange={(e) => addPhotos(e.currentTarget.files)}
            />
          </label>
        )}
        {photoNote && (
          <p role="status" className="mt-3 text-sm text-muted">
            {photoNote}
          </p>
        )}
      </div>

      <ChoiceGroup name="is_gift" legend={F.gift.label} note={formText.optional} options={choices.gift} />
      <ChoiceGroup name="timing" legend={F.timing.label} note={F.timing.note} options={choices.commissionTiming} required error={errs.timing} onEdit={clear} />

      <ErrorSummary show={!!(uploadError || error)} text={uploadError || error} />

      <div>
        <button type="submit" className="btn w-full sm:w-auto" disabled={busy}>
          {uploading ?? (status === 'sending' ? f.sending : f.submit)}
        </button>
        <p className="mt-5 text-sm text-muted">{waitlistPage.privacy}</p>
      </div>
    </form>
  );
}
