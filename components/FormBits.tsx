'use client';

// The pieces both forms are built from: a labeled text field and a group of
// choices, each able to show its own "please fill this in" message.
import { formText } from '@/content';

export type Errors = Record<string, string>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Checks the required fields; returns a message per field that needs one.
export function checkRequired(
  data: FormData,
  rules: { name: string; message: string; email?: boolean; emailMessage?: string }[],
): Errors {
  const out: Errors = {};
  for (const r of rules) {
    const v = String(data.get(r.name) ?? '').trim();
    if (!v) out[r.name] = r.message;
    else if (r.email && !EMAIL.test(v)) out[r.name] = r.emailMessage ?? r.message;
  }
  return out;
}

// Move the cursor to the first field that needs attention.
export function focusFirst(form: HTMLFormElement, errs: Errors) {
  const first = Object.keys(errs)[0];
  if (!first) return;
  const el = form.querySelector<HTMLElement>(`[name="${first}"]`);
  el?.focus();
}

function Star() {
  return (
    <span aria-hidden className="text-brass">
      {' '}
      *
    </span>
  );
}

function Note({ text }: { text: string }) {
  return <span className="font-normal text-muted"> ({text})</span>;
}

function ErrorText({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <span id={id} className="mt-2 block text-sm text-[#8f3b2a]">
      {text}
    </span>
  );
}

export function TextField({
  name,
  label,
  required,
  hint,
  error,
  type = 'text',
  autoComplete,
  inputMode,
  placeholder,
  multiline,
  className = '',
  onEdit,
}: {
  name: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  placeholder?: string;
  multiline?: boolean;
  className?: string;
  onEdit?: (name: string) => void;
}) {
  const describedBy = [hint && `${name}-hint`, error && `${name}-error`].filter(Boolean).join(' ') || undefined;
  const common = {
    id: name,
    name,
    'aria-required': required || undefined,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    className: `field ${multiline ? 'resize-y' : ''}`,
    onInput: () => onEdit?.(name),
  };
  return (
    <div className={className}>
      <label htmlFor={name} className="field-label">
        {label}
        {required ? <Star /> : <Note text={formText.optional} />}
      </label>
      {multiline ? (
        <textarea {...common} rows={5} maxLength={4000} />
      ) : (
        <input {...common} type={type} autoComplete={autoComplete} inputMode={inputMode} placeholder={placeholder} />
      )}
      {hint && (
        <span id={`${name}-hint`} className="field-hint">
          {hint}
        </span>
      )}
      <ErrorText id={`${name}-error`} text={error} />
    </div>
  );
}

export function ChoiceGroup({
  name,
  legend,
  note,
  options,
  multiple,
  required,
  error,
  onEdit,
  defaultValues = [],
}: {
  name: string;
  legend: string;
  note?: string;
  options: readonly string[];
  multiple?: boolean;
  required?: boolean;
  error?: string;
  onEdit?: (name: string) => void;
  /** Options ticked when the form opens. */
  defaultValues?: readonly string[];
}) {
  return (
    <fieldset aria-describedby={error ? `${name}-error` : undefined} aria-invalid={error ? true : undefined}>
      <legend className="field-label">
        {legend}
        {required && <Star />}
        {note && <Note text={note} />}
      </legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label
            key={o}
            className={`flex min-h-12 cursor-pointer items-center gap-3 border bg-paper px-4 py-2 has-[:checked]:border-brass has-[:checked]:bg-plaster ${
              error ? 'border-[#8f3b2a]' : 'border-line'
            }`}
          >
            <input
              type={multiple ? 'checkbox' : 'radio'}
              name={name}
              value={o}
              defaultChecked={defaultValues.includes(o)}
              className="accent-[#7a5c2b]"
              onChange={() => onEdit?.(name)}
            />
            <span>{o}</span>
          </label>
        ))}
      </div>
      <ErrorText id={`${name}-error`} text={error} />
    </fieldset>
  );
}

export function ErrorSummary({ show, text }: { show: boolean; text: string | null }) {
  if (!show || !text) return null;
  return (
    <p role="alert" className="border-l-2 border-[#8f3b2a] pl-4 text-[#8f3b2a]">
      {text}
    </p>
  );
}
