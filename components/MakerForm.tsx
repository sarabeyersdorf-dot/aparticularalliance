'use client';

import { makersPage, waitlistPage } from '@/content';
import Confirmation from './Confirmation';
import { TrapField, useFormSubmit } from './useFormSubmit';

const f = makersPage.form;

function Optional() {
  return <span className="font-normal text-muted"> ({waitlistPage.form.optional})</span>;
}

export default function MakerForm() {
  const { status, error, submit } = useFormSubmit('/api/makers');

  if (status === 'done') {
    return (
      <div className="mt-12">
        <Confirmation heading={f.successHeading} body={f.success} />
      </div>
    );
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    submit({
      full_name: data.get('full_name'),
      email: data.get('email'),
      craft: data.get('craft'),
      location: data.get('location'),
      website: data.get('website'),
      note: data.get('note'),
      ap_hp: data.get('ap_hp'),
    });
  }

  return (
    <form onSubmit={onSubmit} className="relative mt-12 grid gap-8 sm:grid-cols-2">
      <TrapField />
      <label>
        <span className="field-label">{f.fields.name}</span>
        <input name="full_name" required autoComplete="name" className="field" />
      </label>
      <label>
        <span className="field-label">{f.fields.email}</span>
        <input name="email" type="email" required autoComplete="email" inputMode="email" className="field" />
      </label>
      <label>
        <span className="field-label">{f.fields.craft}</span>
        <input name="craft" required aria-describedby="craft-hint" className="field" />
        <span id="craft-hint" className="field-hint">
          {f.fields.craftHint}
        </span>
      </label>
      <label>
        <span className="field-label">{f.fields.location}</span>
        <input name="location" required autoComplete="address-level2" className="field" />
      </label>
      <label className="sm:col-span-2">
        <span className="field-label">
          {f.fields.website}
          <Optional />
        </span>
        <input name="website" className="field" placeholder="instagram.com/yourstudio" />
      </label>
      <label className="sm:col-span-2">
        <span className="field-label">
          {f.fields.note}
          <Optional />
        </span>
        <textarea name="note" rows={5} maxLength={4000} aria-describedby="note-hint" className="field resize-y" />
        <span id="note-hint" className="field-hint">
          {f.fields.noteHint}
        </span>
      </label>

      {error && (
        <p role="alert" className="border-l-2 border-[#8f3b2a] pl-4 text-[#8f3b2a] sm:col-span-2">
          {error}
        </p>
      )}

      <div className="sm:col-span-2">
        <button type="submit" className="btn w-full sm:w-auto" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
        </button>
        <p className="mt-5 text-sm text-muted">{waitlistPage.privacy}</p>
      </div>
    </form>
  );
}
