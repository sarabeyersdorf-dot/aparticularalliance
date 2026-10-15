'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Watches every [data-reveal] element and lets it in as it scrolls into view.
// Runs again on each page change, since the header and footer stay mounted.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'));
    if (!root.classList.contains('motion') || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          // In a sideways-scrolling row (data-reveal-row), the whole row
          // arrives together, so cards waiting off-screen aren't blank when
          // someone swipes to them.
          const row = e.target.closest('[data-reveal-row]');
          const group = row ? Array.from(row.querySelectorAll('[data-reveal]')) : [e.target];
          for (const el of group) {
            el.classList.add('is-in');
            io.unobserve(el);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
