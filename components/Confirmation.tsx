'use client';

import { useEffect, useRef } from 'react';

export default function Confirmation({ heading, body }: { heading: string; body: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => ref.current?.focus(), []);
  return (
    <div role="status" className="border-t border-brass-soft pt-10">
      <h2 ref={ref} tabIndex={-1} className="display text-[2.4rem] outline-none sm:text-5xl">
        {heading}
      </h2>
      <p className="mt-6 max-w-[46ch] text-lg text-muted">{body}</p>
    </div>
  );
}
