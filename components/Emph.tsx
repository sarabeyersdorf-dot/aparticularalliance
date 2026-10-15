// Renders words wrapped in *stars* (in content/site.ts) as italics, and keeps
// hyphenated words ("builder-grade", "walk-through") on one line.
import { Fragment } from 'react';

function KeepHyphens({ text }: { text: string }) {
  const parts = text.split(/(\S+-\S+)/);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <span key={i} className="whitespace-nowrap">
            {p}
          </span>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

export default function Emph({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <em key={i} className="italic">
            <KeepHyphens text={p} />
          </em>
        ) : (
          <KeepHyphens key={i} text={p} />
        ),
      )}
    </>
  );
}

// The same text with the stars removed, for places that can't hold italics
// (page titles, alt text).
export function plain(text: string) {
  return text.replace(/\*([^*]+)\*/g, '$1');
}
