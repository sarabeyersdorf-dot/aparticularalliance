import Link from 'next/link';
import { notFound } from '@/content';
import Emph from '@/components/Emph';

export default function NotFound() {
  return (
    <div className="narrow py-32 text-center">
      <h1 className="display text-5xl sm:text-6xl">
        <Emph text={notFound.heading} />
      </h1>
      <p className="mt-6 text-muted">{notFound.body}</p>
      <p className="mt-10">
        <Link href="/" className="link">
          {notFound.link}
        </Link>
      </p>
    </div>
  );
}
