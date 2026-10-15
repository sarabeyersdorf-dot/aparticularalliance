// A photograph, or a clearly labeled placeholder until the real one exists.
// Add the file to public/photos/ and its name in content/site.ts → photos.
import Image from 'next/image';

export type PhotoSpec = { file: string; shot: string; alt: string };

const TONES = {
  plaster: 'bg-plaster',
  linen: 'bg-linen',
  stone: 'bg-[#d9d3c8]',
  olive: 'bg-[#cfcbb4]',
} as const;

export default function Photo({
  photo,
  ratio = 'aspect-[4/5]',
  tone = 'linen',
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  className = '',
}: {
  photo: PhotoSpec;
  ratio?: string;
  tone?: keyof typeof TONES;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (photo.file) {
    return (
      <div className={`relative overflow-hidden ${ratio} ${className}`}>
        <Image src={`/photos/${photo.file}`} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={`Photo coming soon: ${photo.alt}`}
      className={`relative flex items-end overflow-hidden ${ratio} ${TONES[tone]} ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.012 .03' numOctaves='4' seed='7'/%3E%3CfeColorMatrix values='0 0 0 0 .45 0 0 0 0 .4 0 0 0 0 .32 0 0 0 .22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E\")",
        }}
      />
      <p aria-hidden className="relative m-4 max-w-[30ch] border-l border-brass-soft bg-paper/80 px-3 py-2 text-[0.72rem] leading-snug text-muted">
        <span className="block uppercase tracking-[0.18em] text-brass">Photo to come</span>
        {photo.shot}
      </p>
    </div>
  );
}
