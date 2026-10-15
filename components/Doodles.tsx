// Small hand-drawn touches for the Mischief & Mortar page only. Each is a
// line drawing in the current text color, hidden from screen readers.

// A loose, hand-drawn arrow curling down and to the right.
export function DoodleArrow({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12c18-8 40-9 58 2 14 9 22 24 28 41" />
      <path d="M78 46c4 4 8 8 12 12 3-6 6-11 10-16" />
    </svg>
  );
}

// A wobbly underline to sit beneath a word.
export function DoodleSquiggle({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" preserveAspectRatio="none" className={className}>
      <path d="M3 10c14-6 26 4 40-1s24-6 38 0 26 5 40-1 26-5 38 1 18 3 38-2" />
    </svg>
  );
}

// A small fox peeking over an edge: ears, eyes and a nose, nothing more.
export function PeekingFox({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 90 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* ears */}
      <path d="M22 30 26 6l14 14" />
      <path d="M68 30 64 6 50 20" />
      <path d="M28 14l4 7M62 14l-4 7" strokeWidth="1.4" />
      {/* head, cut off by the edge it peeks over */}
      <path d="M14 46c2-12 10-22 22-26 6-2 12-2 18 0 12 4 20 14 22 26" />
      {/* the white cheeks of a fox's mask, tapering to the nose */}
      <path d="M24 30c7 7 14 11 21 13 7-2 14-6 21-13" strokeWidth="1.4" />
      {/* eyes */}
      <path d="M34 36c2-2 4-2 6 0M50 36c2-2 4-2 6 0" />
      {/* nose */}
      <circle cx="45" cy="44" r="1.6" fill="currentColor" stroke="none" />
      {/* the edge */}
      <path d="M2 46.5h86" strokeWidth="1.2" />
    </svg>
  );
}
