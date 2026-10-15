import type { CSSProperties } from 'react';

// Marks an element to drift up and fade in as it scrolls into view.
// `step` staggers siblings: 0, 1, 2 … each arrives a beat after the last.
// Visitors who ask their device to reduce motion see everything at once.
export function reveal(step = 0) {
  return {
    'data-reveal': '',
    style: { '--d': `${step * 110}ms` } as CSSProperties,
  };
}
