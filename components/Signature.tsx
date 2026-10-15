import { site } from '@/content';

export default function Signature() {
  return (
    <p className="mt-8 font-serif text-2xl italic text-ink">
      <span aria-hidden className="mr-3 inline-block h-px w-8 bg-brass-soft align-middle" />
      {site.founder}
    </p>
  );
}
