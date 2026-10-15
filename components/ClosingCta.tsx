import JoinButton from './JoinButton';

export default function ClosingCta({ heading, body }: { heading: string; body: string }) {
  return (
    <section aria-labelledby="closing-cta" className="narrow mt-28 text-center sm:mt-36">
      <span className="rule mx-auto" />
      <h2 id="closing-cta" className="display mt-8 text-[2.6rem] sm:text-6xl">
        {heading}
      </h2>
      <p className="mx-auto mt-6 max-w-[40ch] text-muted">{body}</p>
      <JoinButton className="mt-10" />
    </section>
  );
}
