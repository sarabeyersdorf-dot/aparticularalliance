import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Figtree } from 'next/font/google';
import './globals.css';
import { site } from '@/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Never settle for builder grade`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: '/',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.promise }],
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description, images: ['/og.png'] },
};

export const viewport: Viewport = {
  themeColor: '#f6f1e9',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={`${cormorant.variable} ${figtree.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
