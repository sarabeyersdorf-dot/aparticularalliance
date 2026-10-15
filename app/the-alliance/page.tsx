import Link from 'next/link';
import { alliancePage as c, photos } from '@/content';
import Photo from '@/components/Photo';
import Paragraphs from '@/components/Paragraphs';
import Emph, { plain } from '@/components/Emph';
import JoinButton from '@/components/JoinButton';

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: '/the-alliance' },
  openGraph: { title: c.title, description: c.description, url: '/the-alliance' },
};

export default function AlliancePage() {
  return (
    <>
      <section className="wrap grid items-center gap-12 pt-12 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="display mt-5 text-[2.9rem] sm:text-7xl">
            <Emph text={c.heading} />
          </h1>
          <p className="mt-7 max-w-[44ch] text-lg text-muted sm:text-xl">{c.lede}</p>
        </div>
        <Photo photo={photos.alliance} arch ratio="aspect-[4/5]" tone="linen" className="mx-auto w-full max-w-md lg:max-w-none" />
      </section>

      <section aria-labelledby="began" className="narrow mt-24 sm:mt-36">
        <h2 id="began" className="display text-[2.2rem] sm:text-5xl">
          <Emph text={c.began.heading} />
        </h2>
        <Paragraphs text={c.began.body} className="mt-8 text-lg text-muted" />
      </section>

      <section aria-labelledby="beliefs" className="mt-24 bg-plaster/60 py-24 sm:mt-36 sm:py-32">
        <div className="wrap">
          <h2 id="beliefs" className="display text-[2.2rem] sm:text-5xl">
            <Emph text={c.beliefs.heading} />
          </h2>
          <ul className="mt-12 grid gap-x-16 sm:grid-cols-2">
            {c.beliefs.items.map((b) => (
              <li key={b} className="border-t border-line py-7 font-serif text-[1.65rem] leading-snug sm:text-3xl">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label={plain(c.tagline)} className="narrow mt-28 text-center sm:mt-36">
        <span className="rule mx-auto" />
        <p className="display mt-8 text-[2.8rem] sm:text-6xl">
          <Emph text={c.tagline} />
        </p>
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
          <JoinButton />
          <Link href="/makers" className="link text-sm">
            {c.makersLink}
          </Link>
        </div>
      </section>
    </>
  );
}
