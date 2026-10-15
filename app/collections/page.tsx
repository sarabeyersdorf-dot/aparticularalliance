import { collections, collectionsPage as c } from '@/content';
import PageIntro from '@/components/PageIntro';
import Photo from '@/components/Photo';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: '/collections' },
  openGraph: { title: c.title, description: c.description, url: '/collections' },
};

const TONES = ['linen', 'stone', 'plaster', 'olive', 'stone'] as const;
const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

export default function CollectionsPage() {
  return (
    <>
      <PageIntro eyebrow={c.eyebrow} heading={c.heading} lede={c.lede} />

      <nav aria-label="Collections" className="wrap mt-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {collections.map((col) => (
            <li key={col.slug}>
              <a href={`#${col.slug}`} className="link">
                {col.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-36">
        {collections.map((col, i) => (
          <section
            key={col.slug}
            id={col.slug}
            aria-labelledby={`${col.slug}-name`}
            className="wrap grid scroll-mt-8 items-center gap-10 lg:grid-cols-2 lg:gap-24"
          >
            <Photo
              photo={col.photo}
              arch
              ratio="aspect-[4/5]"
              tone={TONES[i]}
              className={`mx-auto w-full max-w-md lg:max-w-none ${i % 2 ? 'lg:order-last' : ''}`}
            />
            <div>
              <p className="eyebrow">
                {c.numberLabel} {ROMAN[i]}
              </p>
              <h2 id={`${col.slug}-name`} className="display mt-5 text-[2.8rem] sm:text-6xl">
                {col.name}
              </h2>
              <p className="mt-3 font-serif text-2xl italic text-muted">{col.mood}</p>
              <p className="mt-8 max-w-[40ch] text-lg text-muted">{col.description}</p>
            </div>
          </section>
        ))}
      </div>

      <ClosingCta heading={c.closing.heading} body={c.closing.body} />
    </>
  );
}
