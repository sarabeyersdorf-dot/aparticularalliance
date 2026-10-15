import Link from 'next/link';
import { alliancePage as c, photos } from '@/content';
import PageIntro from '@/components/PageIntro';
import Photo from '@/components/Photo';
import Paragraphs from '@/components/Paragraphs';
import ClosingCta from '@/components/ClosingCta';
import { home } from '@/content';

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: '/the-alliance' },
  openGraph: { title: c.title, description: c.description, url: '/the-alliance' },
};

export default function AlliancePage() {
  return (
    <>
      <PageIntro heading={c.heading} lede={c.lede} />

      <section aria-labelledby="began" className="wrap mt-20 grid gap-14 sm:mt-28 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <Photo photo={photos.story} ratio="aspect-[4/5]" tone="plaster" />
        <div className="self-center">
          <h2 id="began" className="display text-[2.2rem] sm:text-5xl">
            {c.began.heading}
          </h2>
          <Paragraphs text={c.began.body} className="mt-8 max-w-[50ch] text-muted" />
        </div>
      </section>

      <section aria-labelledby="beliefs" className="mt-28 bg-plaster/60 py-24 sm:mt-36 sm:py-32">
        <div className="wrap">
          <h2 id="beliefs" className="display text-[2.2rem] sm:text-5xl">
            {c.beliefs.heading}
          </h2>
          <ul className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-x-16">
            {c.beliefs.items.map((b) => (
              <li key={b.title} className="border-t border-line pt-7">
                <h3 className="display text-[1.75rem]">{b.title}</h3>
                <p className="mt-3 text-muted">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how" className="wrap mt-28 grid gap-14 sm:mt-36 lg:grid-cols-2 lg:gap-24">
        <div className="self-center">
          <h2 id="how" className="display text-[2.2rem] sm:text-5xl">
            {c.how.heading}
          </h2>
          <p className="mt-8 max-w-[46ch] text-muted">{c.how.body}</p>
          <p className="mt-8">
            <Link href="/how-it-works" className="link">
              {c.how.link}
            </Link>
          </p>
        </div>
        <Photo photo={photos.alliance} ratio="aspect-square" tone="linen" />
      </section>

      <ClosingCta heading={c.tagline} body={home.closing.body} />
    </>
  );
}
