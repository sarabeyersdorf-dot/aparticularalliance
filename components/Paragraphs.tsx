// Turns a passage from content/site.ts into paragraphs: a blank line in the
// passage starts a new one.
export default function Paragraphs({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`copy ${className}`}>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i}>{p}</p>
        ))}
    </div>
  );
}
