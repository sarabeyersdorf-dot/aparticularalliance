import Link from 'next/link';
import { joinButton, mischiefPage as c } from '@/content';
import Photo from '@/components/Photo';
import Emph from '@/components/Emph';
import CommissionForm from '@/components/CommissionForm';
import { DoodleArrow, DoodleSquiggle, PeekingFox } from '@/components/Doodles';
import { reveal } from '@/lib/reveal';

export const metadata = {
  title: { absolute: c.title },
  description: c.description,
  alternates: { canonical: '/mischief' },
  openGraph: { title: c.title, description: c.description, url: '/mischief' },
  twitter: { title: c.title, description: c.description },
};

// "Tell me more" and the closing button open the list with Mischief & Mortar
// ticked; the Mischief Box button records that it was the box they asked about.
const MISCHIEF_HREF = '/founding-client-list?interest=mischief';
const BOX_HREF = '/founding-client-list?interest=mischief-box';

const TONES = ['linen', 'stone', 'plaster', 'olive'] as const;

export default function MischiefPage() {
  // The commission form sends photos straight to the private bucket, so it
  // needs the project address and the public (insert-only) key.
  const supabaseUrl = process.env.SUPABASE_URL ?? '';
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? '';

  return (
    // On this page only, italic words in headings take the cherry accent.
    <div className="[&_h1_em]:text-cherry [&_h2_em]:text-cherry">
      {/* Hero */}
      <section className="wrap grid items-center gap-12 pt-12 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p {...reveal(0)} className="eyebrow !text-cherry">{c.eyebrow}</p>
          <h1 {...reveal(1)} className="display mt-5 text-[3rem] sm:text-7xl lg:text-[5.4rem]">
            <span className="relative inline-block">
              <Emph text={c.heading} />
              <DoodleSquiggle className="absolute -bottom-3 left-0 h-3 w-full text-cherry-soft sm:-bottom-4 sm:h-4" />
            </span>
          </h1>
          <p {...reveal(2)} className="mt-10 max-w-[44ch] text-lg text-muted sm:text-xl">{c.lede}</p>
          <div {...reveal(3)} className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <a href="#commission" className="btn w-full sm:w-auto">
              {c.heroButton}
            </a>
            <Link href={MISCHIEF_HREF} className="link text-sm">
              {joinButton}
            </Link>
          </div>
        </div>
        <Photo photo={c.heroPhoto} reveal={2} arch ratio="aspect-[4/5]" tone="plaster" priority className="mx-auto w-full max-w-md lg:max-w-none" />
      </section>

      {/* Intro */}
      <section aria-label="About Mischief & Mortar" className="narrow mt-24 sm:mt-36">
        <span {...reveal(0)} className="block h-px w-12 bg-cherry-soft" />
        <p {...reveal(1)} className="mt-8 font-serif text-[1.65rem] leading-snug sm:text-[2.1rem] [&_em]:text-cherry">
          <Emph text={c.intro} />
        </p>
      </section>

      {/* The four signatures */}
      <section aria-labelledby="signatures" className="wrap mt-24 sm:mt-36">
        <div {...reveal(0)}>
          <p className="eyebrow !text-cherry">{c.signature.eyebrow}</p>
          <h2 id="signatures" className="display mt-5 text-[2.4rem] sm:text-5xl">
            <Emph text={c.signature.heading} />
          </h2>
        </div>
        <div className="mt-16 space-y-20 sm:space-y-28">
          {c.signature.items.map((item, i) => (
            <article key={item.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
              <Photo
                photo={item.photo}
                reveal={0}
                ratio="aspect-[4/5]"
                tone={TONES[i]}
                className={`mx-auto w-full max-w-md lg:max-w-none ${i % 2 ? 'lg:order-last' : ''}`}
              />
              <div {...reveal(1)}>
                <span aria-hidden className="nums font-serif text-5xl leading-none text-cherry">
                  {i + 1}
                </span>
                <h3 className="display mt-4 text-[2.4rem] sm:text-5xl">{item.title}</h3>
                <p className="mt-6 max-w-[42ch] text-lg text-muted">{item.body}</p>
                <p className="mt-8">
                  <Link href={MISCHIEF_HREF} className="text-cherry underline decoration-cherry-soft decoration-1 underline-offset-[6px] transition-colors hover:text-ink">
                    {c.signature.more}
                    <span className="sr-only"> about {item.title}</span> →
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* More mischief */}
      <section aria-labelledby="more" className="mt-24 bg-plaster/60 py-24 sm:mt-36 sm:py-28">
        <div className="wrap">
          <h2 {...reveal(0)} id="more" className="display text-[2.4rem] sm:text-5xl">
            <Emph text={c.more.heading} />
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-5">
            {c.more.items.map((item, i) => (
              <li key={item.title} {...reveal(i % 5)}>
                <Photo photo={item.photo} ratio="aspect-square" tone={TONES[i % 4]} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw" />
                <h3 className="display mt-4 text-[1.4rem] leading-tight">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-snug text-muted">{item.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The Mischief Box */}
      <section aria-labelledby="box" className="wrap mt-24 grid items-center gap-12 sm:mt-36 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Photo photo={c.box.photo} reveal={0} ratio="aspect-[3/2]" tone="linen" sizes="(min-width: 1024px) 55vw, 100vw" />
        <div {...reveal(1)} className="relative border border-line px-7 pb-9 pt-10 sm:px-10">
          <PeekingFox className="absolute -top-[2.65rem] right-8 h-12 w-[5.5rem] text-cherry" />
          <h2 id="box" className="display text-[2.4rem] sm:text-5xl">
            <Emph text={c.box.heading} />
          </h2>
          <p className="mt-6 text-lg text-muted">{c.box.body}</p>
          <Link href={BOX_HREF} className="btn mt-9 w-full sm:w-auto">
            {c.box.button}
          </Link>
        </div>
      </section>

      {/* Commission request */}
      <section id="commission" aria-labelledby="commission-heading" className="wrap mt-24 grid scroll-mt-8 gap-12 sm:mt-36 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="eyebrow !text-cherry">{c.form.eyebrow}</p>
          <h2 id="commission-heading" className="display mt-5 text-[2.4rem] sm:text-5xl">
            <Emph text={c.form.heading} />
          </h2>
          <p className="mt-6 max-w-[38ch] text-lg text-muted">{c.form.intro}</p>
          <DoodleArrow className="mt-8 hidden h-16 w-28 text-cherry-soft lg:block" />
        </div>
        {/* No reveal on the form: it must be visible at once. */}
        <div>
          <CommissionForm supabaseUrl={supabaseUrl} publishableKey={publishableKey} />
        </div>
      </section>

      {/* Closing */}
      <section aria-labelledby="mischief-cta" className="narrow mt-28 text-center sm:mt-36">
        <span {...reveal(0)} className="mx-auto block h-px w-12 bg-cherry-soft" />
        <h2 {...reveal(1)} id="mischief-cta" className="display mt-8 text-[2.6rem] sm:text-6xl">
          <Emph text={c.closing.heading} />
        </h2>
        <div {...reveal(2)}>
          <Link href={MISCHIEF_HREF} className="btn mt-10">
            {joinButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
