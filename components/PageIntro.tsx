import Emph from './Emph';
import { reveal } from '@/lib/reveal';

export default function PageIntro({ eyebrow, heading, lede }: { eyebrow?: string; heading: string; lede: string }) {
  return (
    <div className="wrap pt-16 sm:pt-24">
      {eyebrow && <p {...reveal(0)} className="eyebrow">{eyebrow}</p>}
      <h1 {...reveal(1)} className="display mt-5 max-w-4xl text-[2.9rem] sm:text-7xl">
        <Emph text={heading} />
      </h1>
      <p {...reveal(2)} className="mt-7 max-w-[46ch] text-lg text-muted sm:text-xl">{lede}</p>
    </div>
  );
}
