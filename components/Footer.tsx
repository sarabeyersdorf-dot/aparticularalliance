import Link from 'next/link';
import { nav, navCta, site } from '@/content';
import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line/70 bg-plaster/60">
      <div className="wrap grid gap-10 py-16 sm:grid-cols-2">
        <div>
          <Wordmark />
          <p className="mt-4 font-serif text-xl italic text-muted">{site.footerTagline}</p>
          {(site.contactEmail || site.instagram) && (
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {site.contactEmail && (
                <a className="link" href={`mailto:${site.contactEmail}`}>
                  {site.contactEmail}
                </a>
              )}
              {site.instagram && (
                <a className="link" href={site.instagram} rel="noopener">
                  Instagram
                </a>
              )}
            </p>
          )}
        </div>
        <nav aria-label="Footer" className="sm:justify-self-end">
          <ul className="space-y-2 text-sm">
            {[...nav, navCta].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted no-underline hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap pb-10 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
