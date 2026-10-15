import Link from 'next/link';
import { joinButton, navCta } from '@/content';

export default function JoinButton({ className = '' }: { className?: string }) {
  return (
    <Link href={navCta.href} className={`btn ${className}`}>
      {joinButton}
    </Link>
  );
}
