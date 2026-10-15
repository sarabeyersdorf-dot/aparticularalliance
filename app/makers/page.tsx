import { makersPage as c, photos } from '@/content';
import Photo from '@/components/Photo';
import MakerForm from '@/components/MakerForm';
import Emph from '@/components/Emph';

export const metadata = {
  title: c.title,
  description: c.description,
  alternates: { canonical: '/makers' },
  openGraph: { title: 'Members of the Alliance', description: c.description, url: '/makers' },
};

export default function MakersPage() {
  return (
    <>
      <section className="wrap grid items-center gap-12 pt-12 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="display mt-5 text-[2.9rem] sm:text-7xl">
            <Emph text={c.heading} />
          </h1>
          <p className="mt-7 max-w-[46ch] text-lg text-muted">{c.lede}</p>
          <a href="#apply" className="btn mt-10 w-full sm:w-auto">
            {c.applyLink}
          </a>
        </div>
        <Photo photo={photos.makers} arch ratio="aspect-[4/5]" tone="olive" className="mx-auto w-full max-w-md lg:max-w-none" />
      </section>

      <section aria-labelledby="offer" className="wrap mt-24 sm:mt-36">
        <h2 id="offer" className="display text-[2.2rem] sm:text-5xl">
          <Emph text={c.offer.heading} />
        </h2>
        <ul className="mt-12 grid gap-x-16 sm:grid-cols-2">
          {c.offer.items.map((item) => (
            <li key={item} className="flex gap-4 border-t border-line py-6 text-lg">
              <span aria-hidden className="mt-4 h-px w-5 shrink-0 bg-brass-soft" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="apply" aria-labelledby="apply-heading" className="mt-24 scroll-mt-8 bg-plaster/60 py-24 sm:mt-36 sm:py-28">
        <div className="narrow">
          <h2 id="apply-heading" className="display text-[2.4rem] sm:text-5xl">
            <Emph text={c.form.heading} />
          </h2>
          <p className="mt-5 text-muted">{c.form.intro}</p>
          <MakerForm />
        </div>
      </section>
    </>
  );
}
