import { waitlistPage as c } from '@/content';
import WaitlistForm from '@/components/WaitlistForm';
import Emph, { plain } from '@/components/Emph';

export const metadata = {
  title: plain(c.title),
  description: c.description,
  alternates: { canonical: '/founding-client-list' },
  openGraph: { title: plain(c.title), description: c.description, url: '/founding-client-list' },
};

export default function WaitlistPage() {
  return (
    <div className="wrap grid gap-16 pt-12 sm:pt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
      <div>
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="display mt-5 text-[2.9rem] sm:text-7xl">
          <Emph text={c.heading} />
        </h1>
        <p className="mt-7 max-w-[44ch] text-lg text-muted sm:text-xl">{c.lede}</p>

        <h2 className="eyebrow mt-12">{c.perksHeading}</h2>
        <ul className="mt-6 space-y-4">
          {c.perks.map((p) => (
            <li key={p} className="flex gap-4 border-t border-line pt-4">
              <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-brass-soft" />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:pt-4">
        <WaitlistForm />
      </div>
    </div>
  );
}
