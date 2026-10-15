// The name, set in type until there is a logo. To swap in a logo later,
// replace what this returns with an <img> and every page updates.
import { site } from '@/content';

export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-serif text-[1.02rem] uppercase leading-none tracking-[0.14em] whitespace-nowrap text-ink sm:text-[1.3rem] sm:tracking-[0.2em] ${className}`}>
      {site.name}
    </span>
  );
}
