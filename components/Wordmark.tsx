// The name, set in type until there is a logo. In the header it animates:
// each word rises into place and a brass hairline draws in under the italic
// word (*Particular* in content/site.ts). To swap in a real logo later,
// replace what this returns and every page updates.
import { site } from '@/content';
import { plain } from './Emph';

export default function Wordmark({ animate = false, className = '' }: { animate?: boolean; className?: string }) {
  const words = site.wordmark.split(/\s+/);
  return (
    <span
      aria-label={plain(site.wordmark)}
      className={`whitespace-nowrap font-serif text-[1.35rem] leading-none text-ink sm:text-[1.6rem] ${animate ? 'wm-animate' : ''} ${className}`}
    >
      {words.map((w, i) => {
        const italic = /^\*.+\*$/.test(w);
        const text = italic ? w.slice(1, -1) : w;
        return (
          <span key={i} aria-hidden>
            {i > 0 && ' '}
            <span className="wm-word">
              <span className="wm-inner" style={{ ['--i' as string]: i }}>
                {italic ? <em className="italic">{text}</em> : text}
                {italic && <span className="wm-rule" />}
              </span>
            </span>
          </span>
        );
      })}
    </span>
  );
}
