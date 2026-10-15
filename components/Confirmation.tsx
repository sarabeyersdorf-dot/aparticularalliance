'use client';

import { useEffect, useRef } from 'react';
import Emph from './Emph';
import Paragraphs from './Paragraphs';
import Signature from './Signature';

export default function Confirmation({
  heading,
  body,
  children,
}: {
  heading: string;
  body: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => ref.current?.focus(), []);
  return (
    <div role="status" className="border-t border-brass-soft pt-10">
      <h2 ref={ref} tabIndex={-1} className="display text-[2.6rem] outline-none sm:text-6xl">
        <Emph text={heading} />
      </h2>
      <Paragraphs text={body} className="mt-6 max-w-[46ch] text-lg text-muted" />
      <Signature />
      {children}
    </div>
  );
}
