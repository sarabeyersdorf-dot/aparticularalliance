import Link from 'next/link';
import { surfacesPage as c } from '@/content';
import Photo from '@/components/Photo';
import Emph from '@/components/Emph';
import PlaceIcon from '@/components/PlaceIcon';
import { reveal } from '@/lib/reveal';
import { getPatterns } from '@/lib/patterns';

export const metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: '/surfaces' },
  openGraph: { title: c.title, description: c.description, url: '/surfaces' },
  twitter: { title: c.title, description: c.description },
};

// The Library is read from the database; new or hidden patterns show up
// within a minute without redeploying.
export const revalidate = 60;

// "Ask about Surfaces" opens the list with wallpaper and ceilings ticked.
const ASK_HREF = '/founding-client-list?interest=surfaces';

const TONES = ['linen', 'stone', 'plaster', 'olive', 'stone', 'linen'] as const;

// Soft stand-in colors for swatches without an image yet, by type.
const SWATCH_TONES: Record<string, string> = {
  wallpaper: 'bg-[#d8d6c3]',
  tile: 'bg-[#c9cfc0]',
  mural: 'bg-[#d6cfc4]',
  plaster: 'bg-[#e4d6bf]',
};

export default async function SurfacesPage() {
  const patterns = await getPatterns();

  return (
    <>
      {/* Hero */}
      <section className="wrap grid items-center gap-12 pt-12 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p {...reveal(0)} className="eyebrow">{c.eyebrow}</p>
          <h1 {...reveal(1)} className="display mt-5 text-[3rem] sm:text-7xl lg:text-[5.4rem]">
            <Emph text={c.heading} />
          </h1>
          <p {...reveal(2)} className="mt-7 max-w-[44ch] text-lg text-muted sm:text-xl">{c.lede}</p>
          <div {...reveal(3)} className="mt-10">
            <Link href={ASK_HREF} className="btn w-full sm:w-auto">
              {c.closing.button}
            </Link>
          </div>
        </div>
        <Photo photo={c.heroPhoto} reveal={2} arch ratio="aspect-[4/5]" tone="olive" priority className="mx-auto w-full max-w-md lg:max-w-none" />
      </section>

      {/* Intro */}
      <section aria-label="About Surfaces" className="narrow mt-24 sm:mt-36">
        <span {...reveal(0)} className="rule" />
        <p {...reveal(1)} className="mt-8 font-serif text-[1.65rem] leading-snug sm:text-[2.1rem]">
          {c.intro}
        </p>
      </section>

      {/* What we do */}
      <section aria-labelledby="offer" className="wrap mt-24 sm:mt-36">
        <h2 {...reveal(0)} id="offer" className="display text-[2.4rem] sm:text-5xl">
          <Emph text={c.offer.heading} />
        </h2>
        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {c.offer.cards.map((card, i) => (
            <li key={card.title} {...reveal(i % 3)}>
              <Photo
                photo={card.photo}
                ratio="aspect-[4/5]"
                tone={TONES[i]}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <h3 className="display mt-6 text-3xl">{card.title}</h3>
              <p className="mt-3 max-w-[38ch] text-muted">{card.line}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Where it goes */}
      <section aria-labelledby="where" className="mt-24 bg-plaster/60 py-24 sm:mt-36 sm:py-28">
        <div className="wrap">
          <h2 {...reveal(0)} id="where" className="display text-[2.4rem] sm:text-5xl">
            <Emph text={c.where.heading} />
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {c.where.places.map((p, i) => (
              <li key={p.label} {...reveal(i % 5)} className="flex items-start gap-3 border-t border-line pt-5">
                <PlaceIcon name={p.icon} />
                <span className="pt-0.5 leading-snug">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Library */}
      <section id="library" aria-labelledby="library-heading" className="wrap mt-24 scroll-mt-8 sm:mt-36">
        <div {...reveal(0)} className="max-w-2xl">
          <p className="eyebrow">{c.library.eyebrow}</p>
          <h2 id="library-heading" className="display mt-5 text-[2.4rem] sm:text-5xl">
            <Emph text={c.library.heading} />
          </h2>
          <p className="mt-6 text-lg text-muted">{c.library.intro}</p>
        </div>
        {patterns.length === 0 ? (
          <p className="mt-12 font-serif text-xl italic text-muted">{c.library.empty}</p>
        ) : (
          <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-3">
            {patterns.map((p, i) => (
              <li key={p.id} {...reveal(i % 3)}>
                <div className={`relative aspect-square overflow-hidden ${SWATCH_TONES[p.type] ?? 'bg-linen'}`}>
                  {p.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image_url}
                      alt={`${p.name}${p.colorway ? `, ${p.colorway.toLowerCase()}` : ''}: ${c.library.types[p.type] ?? p.type} pattern swatch`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span
                      role="img"
                      aria-label={`${p.name} swatch coming soon`}
                      className="absolute inset-0 flex items-end p-3 text-[0.68rem] uppercase tracking-[0.16em] text-muted"
                    >
                      {c.library.swatchPlaceholder}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.18em] text-brass">
                  {c.library.types[p.type] ?? p.type}
                </p>
                <h3 className="display mt-1 text-2xl">{p.name}</h3>
                {p.colorway && <p className="font-serif text-lg italic text-muted">{p.colorway}</p>}
                {p.maker_name && <p className="mt-1 text-sm text-muted">{p.maker_name}</p>}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* How it works */}
      <section aria-labelledby="surfaces-how" className="wrap mt-24 sm:mt-36">
        <h2 {...reveal(0)} id="surfaces-how" className="display text-[2.4rem] sm:text-5xl">
          <Emph text={c.how.heading} />
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {c.how.steps.map((s, i) => (
            <li key={s.name} {...reveal(i)} className="border-t border-line pt-7">
              <span aria-hidden className="nums font-serif text-5xl leading-none text-brass">
                {i + 1}
              </span>
              <h3 className="display mt-4 text-2xl">
                <span className="sr-only">Step {i + 1}: </span>
                {s.name}
              </h3>
              <p className="mt-3 text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Ask about Surfaces */}
      <section aria-labelledby="surfaces-cta" className="narrow mt-28 text-center sm:mt-36">
        <span {...reveal(0)} className="rule mx-auto" />
        <h2 {...reveal(1)} id="surfaces-cta" className="display mt-8 text-[2.6rem] sm:text-6xl">
          <Emph text={c.closing.heading} />
        </h2>
        <p {...reveal(2)} className="mx-auto mt-6 max-w-[40ch] text-muted">{c.closing.body}</p>
        <div {...reveal(3)}>
          <Link href={ASK_HREF} className="btn mt-10">
            {c.closing.button}
          </Link>
        </div>
        <p {...reveal(4)} className="mt-14 font-serif text-xl">
          <Link href="/mischief" className="text-ink no-underline transition-colors hover:text-cherry [&_em]:text-cherry">
            <Emph text={c.mischiefLink} /> →
          </Link>
        </p>
      </section>
    </>
  );
}
