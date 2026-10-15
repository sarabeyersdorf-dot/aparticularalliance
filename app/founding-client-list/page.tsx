import { photos, waitlistPage as c } from '@/content';
import Photo from '@/components/Photo';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: '/founding-client-list' },
  openGraph: { title: c.title, description: c.description, url: '/founding-client-list' },
};

export default function WaitlistPage() {
  return (
    <div className="wrap grid gap-16 pt-16 sm:pt-24 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
      <div>
        <h1 className="display text-[2.9rem] sm:text-7xl">{c.heading}</h1>
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

        <Photo photo={photos.waitlist} ratio="aspect-[4/3]" tone="plaster" className="mt-14 hidden lg:flex" />
      </div>

      <div className="lg:pt-4">
        <WaitlistForm />
      </div>
    </div>
  );
}
