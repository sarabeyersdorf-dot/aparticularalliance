import Link from 'next/link';
import { collections, home, photos, site } from '@/content';
import Photo from '@/components/Photo';
import JoinButton from '@/components/JoinButton';
import Paragraphs from '@/components/Paragraphs';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: { absolute: `${site.name} · ${home.title}` },
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero" className="wrap grid items-end gap-12 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div className="lg:pb-16">
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 id="hero" className="display mt-6 text-[3rem] sm:text-7xl lg:text-[5.4rem]">
            {home.hero.heading}
          </h1>
          <p className="mt-8 max-w-[42ch] text-lg text-muted">{home.hero.body}</p>
          <JoinButton className="mt-10 w-full sm:w-auto" />
        </div>
        <Photo photo={photos.hero} ratio="aspect-[4/5]" tone="plaster" priority />
      </section>

      {/* The problem */}
      <section aria-labelledby="problem" className="mt-28 bg-plaster/60 py-24 sm:mt-40 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Photo photo={photos.problem} ratio="aspect-square" tone="stone" className="order-last lg:order-first" />
          <div className="self-center">
            <p className="eyebrow">{home.problem.eyebrow}</p>
            <h2 id="problem" className="display mt-5 text-[2.4rem] sm:text-5xl">
              {home.problem.heading}
            </h2>
            <Paragraphs text={home.problem.body} className="mt-8 max-w-[48ch] text-muted" />
          </div>
        </div>
      </section>

      {/* The alliance of three */}
      <section aria-labelledby="alliance" className="wrap mt-28 sm:mt-40">
        <div className="max-w-2xl">
          <p className="eyebrow">{home.alliance.eyebrow}</p>
          <h2 id="alliance" className="display mt-5 text-[2.4rem] sm:text-5xl">
            {home.alliance.heading}
          </h2>
          <p className="mt-6 text-lg text-muted">{home.alliance.intro}</p>
        </div>
        <ol className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
          {home.alliance.parties.map((p, i) => (
            <li key={p.name} className="border-t border-line pt-8">
              <span className="font-serif text-lg italic text-brass">{['i', 'ii', 'iii'][i]}.</span>
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

      {/* Collections preview */}
      <section aria-labelledby="collections" className="mt-28 sm:mt-40">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">{home.collections.eyebrow}</p>
            <h2 id="collections" className="display mt-5 text-[2.4rem] sm:text-5xl">
              {home.collections.heading}
            </h2>
            <p className="mt-6 text-lg text-muted">{home.collections.intro}</p>
          </div>
        </div>
        <ul className="wrap mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <li key={c.slug}>
              <Link href={`/collections#${c.slug}`} className="group block no-underline">
                <Photo
                  photo={c.photo}
                  ratio="aspect-[4/5]"
                  tone={(['linen', 'stone', 'plaster', 'olive', 'stone'] as const)[i]}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <h3 className="display mt-6 text-3xl transition-colors group-hover:text-brass">{c.name}</h3>
                <p className="mt-1 font-serif text-lg italic text-muted">{c.mood}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="wrap mt-12">
          <Link href="/collections" className="link">
            {home.collections.link}
          </Link>
        </p>
      </section>

      <ClosingCta heading={home.closing.heading} body={home.closing.body} />
    </>
  );
}
