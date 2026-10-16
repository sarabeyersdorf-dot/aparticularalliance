// The pages read the words from here, not straight from site.ts, so that
// straight quotes typed in site.ts come out as proper curly ones (won't →
// won’t). Edit site.ts; you never need to touch this file.
import * as raw from './site';

function curl(s: string): string {
  return s
    .replace(/(^|[\s(—])'/g, '$1‘')
    .replace(/'/g, '’')
    .replace(/(^|[\s(—])"/g, '$1“')
    .replace(/"/g, '”');
}

function typeset<T>(v: T): T {
  if (typeof v === 'string') return curl(v) as T;
  if (Array.isArray(v)) return v.map(typeset) as T;
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, typeset(x)])) as T;
  }
  return v;
}

export const site = typeset(raw.site);
export const nav = typeset(raw.nav);
export const navCta = typeset(raw.navCta);
export const joinButton = typeset(raw.joinButton);
export const photos = typeset(raw.photos);
export const collections = typeset(raw.collections);
export const home = typeset(raw.home);
export const alliancePage = typeset(raw.alliancePage);
export const collectionsPage = typeset(raw.collectionsPage);
export const howPage = typeset(raw.howPage);
export const makersPage = typeset(raw.makersPage);
export const waitlistPage = typeset(raw.waitlistPage);
export const errors = typeset(raw.errors);
export const notFound = typeset(raw.notFound);
export const formText = typeset(raw.formText);
export const surfacesPage = typeset(raw.surfacesPage);
export const mischiefPage = typeset(raw.mischiefPage);
export const outdoorsPage = typeset(raw.outdoorsPage);
export const conceptCaption = typeset(raw.conceptCaption);
// Not typeset: these must match the database's allowed values exactly.
export const choices = raw.choices;
