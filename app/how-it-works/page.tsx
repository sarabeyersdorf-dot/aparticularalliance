import { howPage as c, photos } from '@/content';
import PageIntro from '@/components/PageIntro';
import Photo from '@/components/Photo';
import ClosingCta from '@/components/ClosingCta';

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: '/how-it-works' },
  openGraph: { title: c.title, description: c.description, url: '/how-it-works' },
};

export default function HowPage() {
  return (
    <>
      <PageIntro heading={c.heading} lede={c.lede} />

      <div className="wrap mt-20 grid gap-16 sm:mt-28 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <div className="space-y-6 lg:sticky lg:top-10 lg:self-start">
          <Photo photo={photos.walkthrough} ratio="aspect-[4/5]" tone="plaster" />
          <Photo photo={photos.storyCard} ratio="aspect-[3/2]" tone="linen" className="hidden lg:flex" />
        </div>
        <ol className="space-y-14">
          {c.steps.map((s, i) => (
            <li key={s.name} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line pt-8 sm:grid-cols-[4.5rem_1fr]">
              <span aria-hidden className="font-serif text-4xl leading-none text-brass sm:text-5xl">
                {i + 1}
              </span>
              <div>
                <h2 className="display text-[2rem] sm:text-4xl">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.name}
                </h2>
                <p className="mt-4 max-w-[48ch] text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <ClosingCta heading={c.closing.heading} body={c.closing.body} />
    </>
  );
}
