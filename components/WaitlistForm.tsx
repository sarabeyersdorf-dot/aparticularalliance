'use client';

import { choices, waitlistPage } from '@/content';
import Confirmation from './Confirmation';
import { TrapField, useFormSubmit } from './useFormSubmit';

const f = waitlistPage.form;

function Optional() {
  return <span className="font-normal text-muted"> ({f.optional})</span>;
}

function RadioGroup({ name, legend, options }: { name: string; legend: string; options: readonly string[] }) {
  return (
    <fieldset>
      <legend className="field-label">{legend}</legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label key={o} className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-paper px-4 py-2 has-[:checked]:border-brass has-[:checked]:bg-plaster">
            <input type="radio" name={name} value={o} required className="accent-[#7a5c2b]" />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function WaitlistForm() {
  const { status, error, submit } = useFormSubmit('/api/waitlist');

  if (status === 'done') return <Confirmation heading={f.successHeading} body={f.success} />;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
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

  return (
    <form onSubmit={onSubmit} className="relative space-y-8" aria-describedby={error ? 'form-error' : undefined}>
      <TrapField />
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="field-label">{f.fields.name}</span>
          <input name="full_name" required autoComplete="name" className="field" />
        </label>
        <label>
          <span className="field-label">{f.fields.email}</span>
          <input name="email" type="email" required autoComplete="email" inputMode="email" className="field" />
        </label>
        <label>
          <span className="field-label">
            {f.fields.phone}
            <Optional />
          </span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" className="field" />
        </label>
        <label className="sm:col-span-2">
          <span className="field-label">{f.fields.city}</span>
          <input name="city" required autoComplete="address-level2" className="field" />
        </label>
      </div>

      <RadioGroup name="home_type" legend={f.fields.homeType} options={choices.homeType} />

      <fieldset>
        <legend className="field-label">
          {f.fields.bothers}
          <Optional />
        </legend>
        <span className="field-hint">{f.fields.bothersHint}</span>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {choices.bothers.map((o) => (
            <label key={o} className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-paper px-4 py-2 has-[:checked]:border-brass has-[:checked]:bg-plaster">
              <input type="checkbox" name="bothers" value={o} className="accent-[#7a5c2b]" />
              <span>{o}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <RadioGroup name="timing" legend={f.fields.timing} options={choices.timing} />

      <label className="block">
        <span className="field-label">
          {f.fields.heardFrom}
          <Optional />
        </span>
        <select name="heard_from" defaultValue="" className="field">
          <option value="">{f.choose}</option>
          {choices.heardFrom.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      {error && (
        <p id="form-error" role="alert" className="border-l-2 border-[#8f3b2a] pl-4 text-[#8f3b2a]">
          {error}
        </p>
      )}

      <div>
        <button type="submit" className="btn w-full sm:w-auto" disabled={status === 'sending'}>
          {status === 'sending' ? f.sending : f.submit}
        </button>
        <p className="mt-5 text-sm text-muted">{waitlistPage.privacy}</p>
      </div>
    </form>
  );
}
