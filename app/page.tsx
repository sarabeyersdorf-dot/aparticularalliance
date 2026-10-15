import Link from 'next/link';
import { collections, home, photos, site } from '@/content';
import Photo from '@/components/Photo';
import JoinButton from '@/components/JoinButton';
import Paragraphs from '@/components/Paragraphs';
import ClosingCta from '@/components/ClosingCta';
import Emph from '@/components/Emph';

export const metadata = {
  title: { absolute: `${site.name} · ${home.title}` },
  alternates: { canonical: '/' },
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];
const TONES = ['linen', 'stone', 'plaster', 'olive', 'stone'] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero" className="wrap grid items-center gap-12 pt-12 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 id="hero" className="display mt-6 text-[3rem] sm:text-7xl lg:text-[5.2rem]">
            <Emph text={home.hero.heading} />
          </h1>
          <p className="mt-8 max-w-[42ch] text-lg text-muted">{home.hero.body}</p>
          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <JoinButton className="w-full sm:w-auto" />
            <Link href="/collections" className="link text-sm">
              {home.hero.secondaryLink}
            </Link>
          </div>
        </div>
        <Photo photo={photos.hero} arch ratio="aspect-[4/5]" tone="plaster" priority className="mx-auto w-full max-w-md lg:max-w-none" />
      </section>

      {/* The problem: before and after */}
      <section aria-labelledby="problem" className="mt-28 bg-plaster/60 py-24 sm:mt-40 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="self-center">
            <p className="eyebrow">{home.problem.eyebrow}</p>
            <h2 id="problem" className="display mt-5 text-[2.4rem] sm:text-5xl">
              <Emph text={home.problem.heading} />
            </h2>
            <Paragraphs text={home.problem.body} className="mt-8 max-w-[48ch] text-muted" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { photo: photos.before, label: home.problem.beforeLabel, tone: 'stone' as const },
              { photo: photos.after, label: home.problem.afterLabel, tone: 'linen' as const },
            ].map((x, i) => (
              <figure key={i} className={i ? 'mt-12 sm:mt-16' : ''}>
                <Photo photo={x.photo} ratio="aspect-[3/4]" tone={x.tone} sizes="(min-width: 1024px) 25vw, 50vw" />
                <figcaption className={`mt-4 font-serif text-xl italic ${i ? 'text-ink' : 'text-muted'}`}>{x.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* The alliance of three */}
      <section aria-labelledby="alliance" className="wrap mt-28 sm:mt-40">
        <div className="max-w-2xl">
          <h2 id="alliance" className="display text-[2.4rem] sm:text-5xl">
            <Emph text={home.alliance.heading} />
          </h2>
          <p className="mt-6 text-lg text-muted">{home.alliance.intro}</p>
        </div>
        <ol className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
          {home.alliance.parties.map((p, i) => (
            <li key={p.name} className="border-t border-line pt-8">
              <span className="font-serif text-xl text-brass">{ROMAN[i]}</span>
              <h3 className="display mt-3 text-3xl">{p.name}</h3>
              <p className="mt-4 text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12">
          <Link href="/the-alliance" className="link">
            {home.alliance.link}
          </Link>
        </p>
      </section>

      {/* Collections: swipe on a phone, a row of five on a laptop */}
      <section aria-labelledby="collections" className="mt-28 sm:mt-40">
        <div className="wrap">
          <p className="eyebrow">{home.collections.eyebrow}</p>
          <h2 id="collections" className="display mt-5 max-w-2xl text-[2.4rem] sm:text-5xl">
            <Emph text={home.collections.heading} />
          </h2>
        </div>
        <ul
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-4 sm:scroll-px-10 sm:px-10 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-5 lg:gap-6 lg:overflow-visible lg:px-10"
          aria-label={home.collections.eyebrow}
        >
          {collections.map((c, i) => (
            <li key={c.slug} className="w-[68%] shrink-0 snap-start sm:w-[40%] lg:w-auto">
              <Link href={`/collections#${c.slug}`} className="group block no-underline">
                <Photo
                  photo={c.photo}
                  arch
                  ratio="aspect-[3/4]"
                  tone={TONES[i]}
                  sizes="(min-width: 1024px) 20vw, 70vw"
                />
                <h3 className="display mt-5 text-2xl transition-colors group-hover:text-brass">{c.name}</h3>
                <p className="mt-1 font-serif text-lg italic text-muted">{c.mood}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="wrap mt-4 text-sm text-muted lg:hidden" aria-hidden>
          {home.collections.swipeHint} →
        </p>
      </section>

      <ClosingCta
        stat={home.closing.stat}
        statLabel={home.closing.statLabel}
        heading={home.closing.heading}
        body={home.closing.body}
      />
    </>
  );
}
