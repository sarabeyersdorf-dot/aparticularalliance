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
          {site.contactEmail && (
            <p className="mt-6 text-sm">
              <a className="link" href={`mailto:${site.contactEmail}`}>
                {site.contactEmail}
              </a>
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
            {site.instagram && (
              <li>
                <a href={site.instagram} rel="noopener" className="text-muted no-underline hover:text-ink">
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="wrap pb-10 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. {site.footerCredit}
      </div>
    </footer>
  );
}
