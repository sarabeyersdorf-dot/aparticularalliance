import Link from 'next/link';
import { joinButton, outdoorsPage as c } from '@/content';
import Photo from '@/components/Photo';
import Emph from '@/components/Emph';
import { PeekingFox } from '@/components/Doodles';
import { reveal } from '@/lib/reveal';

export const metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: '/outdoors' },
  openGraph: { title: c.title, description: c.description, url: '/outdoors' },
  twitter: { title: c.title, description: c.description },
};

// The closing button opens the list with outdoor spaces ticked.
const JOIN_HREF = '/founding-client-list?interest=outdoors';

const TONES = ['olive', 'stone', 'olive', 'linen', 'stone'] as const;

export default function OutdoorsPage() {
  return (
    // `calm` slows this page's fade-ins. Italic words in headings take moss.
    <div className="calm [&_h1_em]:text-moss [&_h2_em]:text-moss">
      {/* Hero: words first, then one full-bleed garden photograph. */}
      <section className="wrap pt-12 sm:pt-20">
        <p {...reveal(0)} className="eyebrow !text-moss">{c.eyebrow}</p>
        <h1 {...reveal(1)} className="display mt-5 text-[3rem] sm:text-7xl lg:text-[5.6rem]">
          <Emph text={c.heading} />
        </h1>
        <p {...reveal(2)} className="mt-8 max-w-[52ch] text-lg text-muted sm:text-xl">{c.lede}</p>
      </section>
      <div className="mt-14 sm:mt-20">
        <Photo
          photo={c.heroPhoto}
          reveal={3}
          ratio="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
          tone="olive"
          sizes="100vw"
          priority
        />
      </div>

      {/* Intro */}
      <section aria-label="About Moss & Murmur" className="narrow mt-24 sm:mt-40">
        <span {...reveal(0)} className="block h-px w-12 bg-lantern" />
        <p {...reveal(1)} className="mt-8 font-serif text-[1.6rem] leading-snug sm:text-[2rem]">
          {c.intro}
        </p>
      </section>

      {/* The five senses: a full-bleed photograph, then the words beneath. */}
      <section aria-labelledby="senses" className="mt-24 sm:mt-40">
        <h2 {...reveal(0)} id="senses" className="wrap eyebrow !text-moss">
          {c.senses.eyebrow}
        </h2>
        <div className="mt-10 space-y-24 sm:space-y-36">
          {c.senses.items.map((s, i) => (
            <article key={s.title} aria-labelledby={`sense-${i}`}>
              <Photo
                photo={s.photo}
                reveal={0}
                ratio="aspect-[4/3] sm:aspect-[2/1] lg:aspect-[5/2]"
                tone={TONES[i]}
                sizes="100vw"
              />
              <div className="wrap mt-10 grid gap-8 sm:mt-14 sm:grid-cols-[1fr_1.4fr] lg:grid-cols-[1fr_1.4fr_minmax(0,15rem)] lg:gap-14">
                <div {...reveal(0)}>
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-stone">
                    <span className="nums">{String(i + 1).padStart(2, '0')}</span> · {s.sense}
                  </p>
                  <h3 id={`sense-${i}`} className="display mt-3 text-[2.6rem] text-moss sm:text-6xl">
                    {s.title}
                  </h3>
                </div>
                <div {...reveal(1)}>
                  <p className="max-w-[46ch] text-lg text-muted">{s.body}</p>
                  <p className="mt-7 text-[0.72rem] uppercase tracking-[0.18em] text-stone">{c.senses.examplesLabel}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.examples.map((e) => (
                      <li key={e} className="border border-line px-3 py-1.5 text-sm text-ink">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* A closer look, beside the words. */}
                <Photo
                  photo={s.detail}
                  reveal={2}
                  ratio="aspect-[4/5]"
                  tone="linen"
                  sizes="(min-width: 1024px) 15rem, 60vw"
                  className="w-2/3 max-w-xs sm:col-span-2 sm:w-1/3 lg:col-span-1 lg:w-full"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* A little mischief outside */}
      <section aria-labelledby="outdoor-mischief" className="wrap mt-28 sm:mt-40">
        <Link
          href="/mischief"
          className="group relative mx-auto block max-w-3xl border border-line px-7 pb-9 pt-10 text-center no-underline transition-colors hover:border-moss sm:px-12"
        >
          <PeekingFox className="absolute -top-[2.65rem] left-1/2 h-12 w-[5.5rem] -translate-x-1/2 text-moss" />
          <h2 id="outdoor-mischief" className="eyebrow !text-moss">
            {c.mischief.eyebrow}
          </h2>
          <p className="mt-5 font-serif text-[1.5rem] leading-snug text-ink sm:text-[1.9rem]">{c.mischief.line}</p>
          <div className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-4">
            {c.mischief.photos.map((ph) => (
              <Photo key={ph.file} photo={ph} ratio="aspect-square" tone="olive" sizes="12rem" />
            ))}
          </div>
          <span className="mt-6 inline-block text-sm text-moss underline decoration-lantern underline-offset-[6px] transition-colors group-hover:text-ink">
            {c.mischief.link} →
          </span>
        </Link>
      </section>

      {/* Three ways to begin */}
      <section aria-labelledby="begin" className="wrap mt-28 sm:mt-40">
        <h2 {...reveal(0)} id="begin" className="display text-[2.4rem] sm:text-5xl">
          <Emph text={c.begin.heading} />
        </h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {c.begin.items.map((b, i) => (
            <li key={b.name} {...reveal(i)} className="border-t border-moss/40 pt-7">
              <span aria-hidden className="nums font-serif text-5xl leading-none text-moss">
                {i + 1}
              </span>
              <h3 className="display mt-4 text-[1.9rem]">{b.name}</h3>
              <p className="mt-3 text-muted">{b.line}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Fire-wise and water-wise: the trust band, in moss. */}
      <section aria-labelledby="wise" className="mt-28 bg-moss py-24 text-paper sm:mt-40 sm:py-32">
        <div className="narrow">
          <span {...reveal(0)} className="block h-px w-12 bg-lantern" />
          <h2 {...reveal(1)} id="wise" className="display mt-8 text-[2.4rem] !text-paper sm:text-5xl [&_em]:!text-lantern">
            <Emph text={c.wise.heading} />
          </h2>
          <p {...reveal(2)} className="mt-8 text-lg text-paper/90">{c.wise.body}</p>
          <p {...reveal(3)} className="mt-10 border-t border-paper/20 pt-8 font-serif text-xl italic leading-snug text-paper/90">
            {c.who}
          </p>
        </div>
      </section>

      {/* Closing */}
      <section aria-labelledby="outdoors-cta" className="narrow mt-28 text-center sm:mt-40">
        <span {...reveal(0)} className="mx-auto block h-px w-12 bg-lantern" />
        <h2 {...reveal(1)} id="outdoors-cta" className="display mt-8 text-[2.6rem] sm:text-6xl">
          <Emph text={c.closing.heading} />
        </h2>
        <div {...reveal(2)}>
          <Link href={JOIN_HREF} className="btn mt-10">
            {joinButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
