// The name, set in type until there is a logo. To swap in a logo later,
// replace what this returns with an <img> and every page updates.
import { site } from '@/content';
import Emph from './Emph';

export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`whitespace-nowrap font-serif text-[1.35rem] leading-none text-ink sm:text-[1.6rem] ${className}`}>
      <Emph text={site.wordmark} />
    </span>
  );
}
