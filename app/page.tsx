import Image from 'next/image';
import Link from 'next/link';
import { reveal } from '@/lib/reveal';
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

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
const TONES = ['linen', 'stone', 'plaster', 'olive', 'stone', 'linen'] as const;

export default function Home() {
  return (
    <>
      {/* Hero: one wide photo; the headline sits on its empty plaster wall.
          On a phone the headline comes first and the photo follows. */}
      <section aria-labelledby="hero" className="relative lg:flex lg:min-h-[min(86vh,820px)] lg:items-center">
        <div className="wrap relative z-10 pt-12 pb-10 sm:pt-20 lg:py-24">
          <div className="max-w-xl lg:max-w-[29rem] xl:max-w-[31rem]">
            <p {...reveal(0)} className="eyebrow">{home.hero.eyebrow}</p>
            <h1 {...reveal(1)} id="hero" className="display mt-6 text-[3rem] sm:text-7xl lg:text-[4.4rem] xl:text-[4.8rem]">
              <Emph text={home.hero.heading} />
            </h1>
            <p {...reveal(2)} className="mt-8 max-w-[40ch] text-lg text-muted">{home.hero.body}</p>
            <div {...reveal(3)} className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <JoinButton className="w-full sm:w-auto" />
              <Link href="/collections" className="link text-sm">
                {home.hero.secondaryLink}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
          {photos.hero.file ? (
            <Image
              src={`/photos/${photos.hero.file}`}
              alt={photos.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[78%_center] lg:object-[100%_30%]"
            />
          ) : (
            <Photo photo={photos.hero} ratio="h-full" tone="plaster" />
          )}
          {/* A soft wash of the page color over the wall, so the headline
              always reads, whatever the photo. Wide screens only. */}
          <div aria-hidden className="absolute inset-0 hidden bg-gradient-to-r from-paper/85 via-paper/40 via-45% to-transparent to-65% lg:block" />
        </div>
      </section>

      {/* The problem: before and after */}
      <section aria-labelledby="problem" className="mt-28 bg-plaster/60 py-24 sm:mt-40 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div {...reveal(0)} className="self-center">
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
              <figure key={i} {...reveal(i + 1)} className={i ? 'mt-12 sm:mt-16' : ''}>
                <Photo photo={x.photo} ratio="aspect-[3/4]" tone={x.tone} sizes="(min-width: 1024px) 25vw, 50vw" />
                <figcaption className={`mt-4 font-serif text-xl italic ${i ? 'text-ink' : 'text-muted'}`}>{x.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* The alliance of three */}
      <section aria-labelledby="alliance" className="wrap mt-28 sm:mt-40">
        <div {...reveal(0)} className="max-w-2xl">
          <h2 id="alliance" className="display text-[2.4rem] sm:text-5xl">
            <Emph text={home.alliance.heading} />
          </h2>
          <p className="mt-6 text-lg text-muted">{home.alliance.intro}</p>
        </div>
        <ol className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
          {home.alliance.parties.map((p, i) => (
            <li key={p.name} {...reveal(i)} className="border-t border-line pt-8">
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

      {/* Collections: swipe on a phone, a row of six on a laptop */}
      <section aria-labelledby="collections" className="mt-28 sm:mt-40">
        <div {...reveal(0)} className="wrap">
          <p className="eyebrow">{home.collections.eyebrow}</p>
          <h2 id="collections" className="display mt-5 max-w-2xl text-[2.4rem] sm:text-5xl">
            <Emph text={home.collections.heading} />
          </h2>
        </div>
        <ul
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-4 sm:scroll-px-10 sm:px-10 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-6 lg:gap-5 lg:overflow-visible lg:px-10"
          aria-label={home.collections.eyebrow}
          data-reveal-row
        >
          {collections.map((c, i) => (
            <li key={c.slug} {...reveal(i)} className="w-[68%] shrink-0 snap-start sm:w-[40%] lg:w-auto">
              <Link href={c.href ?? `/collections#${c.slug}`} className="group group/photo block no-underline">
                <Photo
                  photo={c.cardPhoto.file ? c.cardPhoto : c.photo}
                  arch
                  ratio="aspect-[3/4]"
                  tone={TONES[i]}
                  sizes="(min-width: 1024px) 17vw, 70vw"
                />
                <h3 className="display mt-5 text-2xl transition-colors group-hover:text-brass lg:text-[1.35rem] xl:text-2xl">{c.name}</h3>
                <p className="mt-1 font-serif text-lg italic leading-snug text-muted">{c.mood}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="wrap mt-4 text-sm text-muted lg:hidden" aria-hidden>
          {home.collections.swipeHint} →
        </p>
      </section>

      {/* The fifth wall: one full-width ceiling image, a line and a link. */}
      <section aria-labelledby="fifth-wall" className="mt-28 sm:mt-40">
        <Link href="/surfaces" className="group/photo relative block no-underline">
          <Photo
            photo={home.fifthWall.photo}
            ratio="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
            tone="olive"
            sizes="100vw"
            labelTop
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center px-6 pb-10 sm:pb-14">
            <div {...reveal(0)} className="bg-paper/92 px-7 py-6 text-center sm:px-10 sm:py-8">
              <h2 id="fifth-wall" className="display text-[2rem] sm:text-5xl">
                <Emph text={home.fifthWall.line} />
              </h2>
              <span className="link mt-4 inline-block text-sm">{home.fifthWall.link} →</span>
            </div>
          </div>
        </Link>
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
