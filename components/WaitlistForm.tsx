'use client';

import Link from 'next/link';
import { useState } from 'react';
import { choices, errors as messages, formText, waitlistPage } from '@/content';
import Confirmation from './Confirmation';
import { ChoiceGroup, ErrorSummary, Errors, TextField, checkRequired, focusFirst } from './FormBits';
import { TrapField, useFormSubmit } from './useFormSubmit';

const f = waitlistPage.form;
const F = f.fields;

export default function WaitlistForm() {
  const { status, error, submit } = useFormSubmit('/api/waitlist');
  const [errs, setErrs] = useState<Errors>({});

  if (status === 'done') {
    return (
      <Confirmation heading={f.successHeading} body={f.success}>
        <p className="mt-10">
          <Link href="/" className="link">
            {f.backLink}
          </Link>
        </p>
      </Confirmation>
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
      { name: 'city', message: F.city.error },
      { name: 'home_type', message: F.homeType.error },
      { name: 'timing', message: F.timing.error },
    ]);
    setErrs(found);
    if (Object.keys(found).length) {
      focusFirst(form, found);
      return;
    }
    submit({
      full_name: data.get('full_name'),
      email: data.get('email'),
      phone: data.get('phone'),
      city: data.get('city'),
      home_type: data.get('home_type'),
      bothers: data.getAll('bothers'),
      timing: data.get('timing'),
      heard_from: data.get('heard_from'),
      ap_hp: data.get('ap_hp'),
      source_page: window.location.href,
    });
  }

  const hasErrs = Object.values(errs).some(Boolean);

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-8">
      <TrapField />
      <p className="text-sm text-muted">{formText.requiredNote}</p>
      <ErrorSummary show={hasErrs} text={formText.errorSummary} />

      <div className="grid gap-8 sm:grid-cols-2">
        <TextField name="full_name" label={F.name.label} required autoComplete="name" error={errs.full_name} onEdit={clear} className="sm:col-span-2" />
        <TextField name="email" label={F.email.label} required type="email" inputMode="email" autoComplete="email" error={errs.email} onEdit={clear} />
        <TextField name="phone" label={F.phone.label} type="tel" inputMode="tel" autoComplete="tel" />
        <TextField name="city" label={F.city.label} required autoComplete="address-level2" error={errs.city} onEdit={clear} className="sm:col-span-2" />
      </div>

      <ChoiceGroup name="home_type" legend={F.homeType.label} note={F.homeType.note} options={choices.homeType} required error={errs.home_type} onEdit={clear} />
      <ChoiceGroup name="bothers" legend={F.bothers.label} note={F.bothers.note} options={choices.bothers} multiple />
      <ChoiceGroup name="timing" legend={F.timing.label} note={F.timing.note} options={choices.timing} required error={errs.timing} onEdit={clear} />

      <div>
        <label htmlFor="heard_from" className="field-label">
          {F.heardFrom.label}
          <span className="font-normal text-muted"> ({formText.optional})</span>
        </label>
        <select id="heard_from" name="heard_from" defaultValue="" className="field">
          <option value="">{formText.choose}</option>
          {choices.heardFrom.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <ErrorSummary show={!!error} text={error} />

      <div>
        <button type="submit" className="btn w-full sm:w-auto" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
        </button>
        <p className="mt-5 text-sm text-muted">{waitlistPage.privacy}</p>
      </div>
    </form>
  );
}
