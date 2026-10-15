import { howPage as c, photos } from '@/content';
import { reveal } from '@/lib/reveal';
import PageIntro from '@/components/PageIntro';
import Photo from '@/components/Photo';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: '/how-it-works' },
  openGraph: { title: c.title, description: c.description, url: '/how-it-works' },
};

function StoryCard() {
  const s = c.storyCard;
  return (
    <figure className="mt-8 max-w-sm">
      <figcaption className="eyebrow mb-3">{s.label}</figcaption>
      <div className="border border-line bg-paper px-7 py-8 shadow-[0_1px_0_var(--color-line)]">
        <p className="font-serif text-3xl leading-tight">{s.piece}</p>
        <p className="mt-2 font-serif text-lg italic text-muted">{s.maker}</p>
        <span aria-hidden className="rule my-5" />
        <p className="text-sm text-muted">{s.method}</p>
        <p className="mt-6 text-[0.7rem] uppercase tracking-[0.2em] text-brass">{s.member}</p>
      </div>
    </figure>
  );
}

export default function HowPage() {
  return (
    <>
      <PageIntro eyebrow={c.eyebrow} heading={c.heading} lede={c.lede} />

      <ol className="wrap mt-20 space-y-16 sm:mt-28">
        {c.steps.map((s, i) => (
          <li key={s.name} {...reveal(0)} className="grid gap-4 border-t border-line pt-10 sm:grid-cols-[6rem_1fr] lg:grid-cols-[8rem_1fr_1fr] lg:gap-12">
            <span aria-hidden className="nums font-serif text-6xl leading-none text-brass sm:text-7xl">
              {i + 1}
            </span>
            <div>
              <h2 className="display text-[2rem] sm:text-4xl">
                <span className="sr-only">Step {i + 1}: </span>
                {s.name}
              </h2>
              <p className="mt-3 text-[0.72rem] uppercase tracking-[0.18em] text-brass">{s.meta}</p>
              <p className="mt-5 max-w-[46ch] text-lg text-muted">{s.body}</p>
            </div>
            <div className="sm:col-start-2 lg:col-start-3">
              {i === 0 && <Photo photo={photos.walkthrough} ratio="aspect-[4/3]" tone="plaster" />}
              {i === c.steps.length - 1 && <StoryCard />}
            </div>
          </li>
        ))}
      </ol>

      <ClosingCta heading={c.closing.heading} body={c.closing.body} />
    </>
  );
}
