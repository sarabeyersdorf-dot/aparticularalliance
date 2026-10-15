'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, navCta } from '@/content';
import Wordmark from './Wordmark';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="relative z-40 border-b border-line/70">
      <div className="wrap flex items-center justify-between gap-6 py-6">
        <Link href="/" className="no-underline" aria-label="A Particular Alliance, home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              className="text-[0.82rem] uppercase tracking-[0.16em] text-muted no-underline transition-colors hover:text-ink aria-[current=page]:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href={navCta.href} className="link text-[0.82rem] uppercase tracking-[0.16em]">
            {navCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="min-h-11 px-1 text-[0.8rem] uppercase tracking-[0.18em] text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-paper lg:hidden"
      >
        <ul className="wrap flex flex-col py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className="block py-3 font-serif text-2xl text-ink no-underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <Link href={navCta.href} className="btn w-full">
              {navCta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
