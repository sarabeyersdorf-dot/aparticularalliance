import type { MetadataRoute } from 'next';
import { site } from '@/content';

const PAGES = ['', '/the-alliance', '/collections', '/surfaces', '/mischief', '/outdoors', '/how-it-works', '/makers', '/founding-client-list'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `${site.url}${p}`, changeFrequency: 'monthly', priority: p === '' || p === '/founding-client-list' ? 1 : 0.7 }));
}
