import { makersPage as c, photos } from '@/content';
import PageIntro from '@/components/PageIntro';
import Photo from '@/components/Photo';
import MakerForm from '@/components/MakerForm';

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: '/makers' },
  openGraph: { title: `${c.heading}`, description: c.description, url: '/makers' },
};

export default function MakersPage() {
  return (
    <>
      <PageIntro heading={c.heading} lede={c.lede} />

      <section aria-labelledby="offer" className="wrap mt-20 grid gap-14 sm:mt-28 lg:grid-cols-2 lg:gap-24">
        <Photo photo={photos.makers} ratio="aspect-[4/5]" tone="olive" />
        <div className="self-center">
          <h2 id="offer" className="display text-[2.2rem] sm:text-5xl">
            {c.offer.heading}
          </h2>
          <ul className="mt-10 space-y-6">
            {c.offer.items.map((item) => (
              <li key={item} className="flex gap-4 border-t border-line pt-6 text-muted">
                <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-brass-soft" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="apply" className="mt-28 bg-plaster/60 py-24 sm:mt-36 sm:py-28">
        <div className="narrow">
          <h2 id="apply" className="display text-[2.4rem] sm:text-5xl">
            {c.form.heading}
          </h2>
          <p className="mt-5 text-muted">{c.form.intro}</p>
          <MakerForm />
        </div>
      </section>
    </>
  );
}
