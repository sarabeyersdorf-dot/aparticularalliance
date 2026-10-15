import Emph from './Emph';
import { reveal } from '@/lib/reveal';
import JoinButton from './JoinButton';

export default function ClosingCta({
  heading,
  body,
  stat,
  statLabel,
}: {
  heading: string;
  body: string;
  stat?: string;
  statLabel?: string;
}) {
  return (
    <section aria-labelledby="closing-cta" className="narrow mt-28 text-center sm:mt-36">
      {stat ? (
        <p {...reveal(0)} className="flex flex-col items-center">
          <span className="nums font-serif text-[5.5rem] leading-none text-brass sm:text-[7.5rem]">{stat}</span>
          <span className="eyebrow mt-3">{statLabel}</span>
        </p>
      ) : (
        <span {...reveal(0)} className="rule mx-auto" />
      )}
      <h2 {...reveal(1)} id="closing-cta" className="display mt-10 text-[2.6rem] sm:text-6xl">
        <Emph text={heading} />
      </h2>
      <p {...reveal(2)} className="mx-auto mt-6 max-w-[40ch] text-muted">{body}</p>
      <div {...reveal(3)}>
        <JoinButton className="mt-10" />
      </div>
    </section>
  );
}
