'use client';

import { useState } from 'react';
import { errors as messages, formText, makersPage, waitlistPage } from '@/content';
import Confirmation from './Confirmation';
import { ErrorSummary, Errors, TextField, checkRequired, focusFirst } from './FormBits';
import { TrapField, useFormSubmit } from './useFormSubmit';

const f = makersPage.form;
const F = f.fields;

export default function MakerForm() {
  const { status, error, submit } = useFormSubmit('/api/makers');
  const [errs, setErrs] = useState<Errors>({});

  if (status === 'done') {
    return (
      <div className="mt-12">
        <Confirmation heading={f.successHeading} body={f.success} />
      </div>
    );
  }

  const clear = (name: string) => setErrs((e) => (e[name] ? { ...e, [name]: '' } : e));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const found = checkRequired(data, [
      { name: 'full_name', message: F.name.error },
      { name: 'email', message: F.email.error, email: true, emailMessage: messages.email },
      { name: 'craft', message: F.craft.error },
      { name: 'location', message: F.location.error },
    ]);
    setErrs(found);
    if (Object.keys(found).length) {
      focusFirst(form, found);
      return;
    }
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

  const hasErrs = Object.values(errs).some(Boolean);

  return (
    <form onSubmit={onSubmit} noValidate className="relative mt-10 grid gap-8 sm:grid-cols-2">
      <TrapField />
      <p className="text-sm text-muted sm:col-span-2">{formText.requiredNote}</p>
      <div className="sm:col-span-2">
        <ErrorSummary show={hasErrs} text={formText.errorSummary} />
      </div>
      <TextField name="full_name" label={F.name.label} required autoComplete="name" error={errs.full_name} onEdit={clear} />
      <TextField name="email" label={F.email.label} required type="email" inputMode="email" autoComplete="email" error={errs.email} onEdit={clear} />
      <TextField name="craft" label={F.craft.label} required hint={F.craft.hint} error={errs.craft} onEdit={clear} />
      <TextField name="location" label={F.location.label} required hint={F.location.hint} autoComplete="address-level2" error={errs.location} onEdit={clear} />
      <TextField name="website" label={F.website.label} placeholder="instagram.com/yourstudio" className="sm:col-span-2" />
      <TextField name="note" label={F.note.label} hint={F.note.hint} multiline className="sm:col-span-2" />

      <div className="sm:col-span-2">
        <ErrorSummary show={!!error} text={error} />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn w-full sm:w-auto" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
        </button>
        <p className="mt-5 text-sm text-muted">{waitlistPage.privacy}</p>
      </div>
    </form>
  );
}
