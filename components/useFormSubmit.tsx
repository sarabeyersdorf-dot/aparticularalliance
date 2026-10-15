'use client';

import { useEffect, useRef, useState } from 'react';
import { errors } from '@/content';

type Status = 'idle' | 'sending' | 'done';

// Shared by both forms: times how long the form was open (a bot posts
// instantly), sends it, and turns any failure into a sentence a person reads.
export function useFormSubmit(endpoint: string) {
  const openedAt = useRef<number>(0);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  async function submit(payload: Record<string, unknown>) {
    setStatus('sending');
    setError(null);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, elapsed_ms: Date.now() - openedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus('done');
        return;
      }
      setError(json.error === 'email' ? errors.email : json.error === 'required' ? errors.required : errors.network);
    } catch {
      setError(errors.network);
    }
    setStatus('idle');
  }

  return { status, error, submit };
}

// The trap field: hidden from people and screen readers, named after nothing
// a browser's autofill knows, so only a bot fills it.
export function TrapField() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
      <label>
        Leave this field empty
        <input type="text" name="ap_hp" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
