// The one definition of what a valid signup / application looks like.
// The database enforces the same rules (CHECK constraints), so a bad row is
// refused twice: here with a friendly message, and there as a last line.
import { choices } from '../content/site';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A form posted faster than this was not filled in by a person.
export const MIN_FILL_MS = 2500;

type Body = Record<string, unknown>;

function text(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function optional(v: unknown, max: number): string | null {
  const t = text(v, max);
  return t === '' ? null : t;
}

function oneOf<T extends readonly string[]>(v: unknown, list: T): T[number] | null {
  return typeof v === 'string' && (list as readonly string[]).includes(v) ? (v as T[number]) : null;
}

// Hidden trap field filled, or sent impossibly fast. The row is still kept,
// only flagged: autofill can fill a hidden field for a real person.
export function looksAutomated(body: Body): boolean {
  const trap = text(body.ap_hp, 200);
  const elapsed = Number(body.elapsed_ms);
  return trap !== '' || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS;
}

// Where a waitlist signup arrived from (?interest=… on the button they pressed).
export const INTERESTS = ['surfaces', 'mischief', 'mischief-box', 'outdoors'] as const;

export type Result<T> = { ok: true; row: T } | { ok: false; error: 'required' | 'email' };

export function parseWaitlist(body: Body): Result<Record<string, unknown>> {
  const full_name = text(body.full_name, 200);
  const email = text(body.email, 320).toLowerCase();
  const city = text(body.city, 200);
  const home_type = oneOf(body.home_type, choices.homeType);
  const timing = oneOf(body.timing, choices.timing);
  if (!full_name || !email || !city || !home_type || !timing) return { ok: false, error: 'required' };
  if (!EMAIL.test(email)) return { ok: false, error: 'email' };
  const rawBothers = Array.isArray(body.bothers) ? body.bothers : [];
  const bothers = [...new Set(rawBothers.map((b) => oneOf(b, choices.bothers)).filter((b) => b !== null))];
  const rawSurfaces = Array.isArray(body.surfaces) ? body.surfaces : [];
  const surfaces = [...new Set(rawSurfaces.map((b) => oneOf(b, choices.surfaces)).filter((b) => b !== null))];
  const rawOutdoors = Array.isArray(body.outdoors) ? body.outdoors : [];
  const outdoors = [...new Set(rawOutdoors.map((b) => oneOf(b, choices.outdoors)).filter((b) => b !== null))];
  return {
    ok: true,
    row: {
      full_name,
      email,
      phone: optional(body.phone, 40),
      city,
      home_type,
      bothers,
      surfaces,
      outdoors,
      interest: oneOf(body.interest, INTERESTS),
      timing,
      heard_from: oneOf(body.heard_from, choices.heardFrom),
      source_page: optional(body.source_page, 300),
      suspected_spam: looksAutomated(body),
    },
  };
}

export function parseMaker(body: Body): Result<Record<string, unknown>> {
  const full_name = text(body.full_name, 200);
  const email = text(body.email, 320).toLowerCase();
  const craft = text(body.craft, 300);
  const location = text(body.location, 200);
  if (!full_name || !email || !craft || !location) return { ok: false, error: 'required' };
  if (!EMAIL.test(email)) return { ok: false, error: 'email' };
  return {
    ok: true,
    row: {
      full_name,
      email,
      craft,
      location,
      website: optional(body.website, 300),
      note: optional(body.note, 4000),
      suspected_spam: looksAutomated(body),
    },
  };
}

// A commission request (Mischief & Mortar). Photos were already sent by the
// browser into the private bucket; the row only lists where they are, and
// only paths in that request's own folder are kept.
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export function parseCommission(body: Body): Result<Record<string, unknown>> {
  const full_name = text(body.full_name, 200);
  const email = text(body.email, 320).toLowerCase();
  const rawWants = Array.isArray(body.wants) ? body.wants : [];
  const wants = [...new Set(rawWants.map((w) => oneOf(w, choices.wants)).filter((w) => w !== null))];
  const timing = oneOf(body.timing, choices.commissionTiming);
  if (!full_name || !email || !wants.length || !timing) return { ok: false, error: 'required' };
  if (!EMAIL.test(email)) return { ok: false, error: 'email' };
  const folder = typeof body.photo_folder === 'string' && UUID.test(body.photo_folder) ? body.photo_folder : null;
  const shape = folder ? new RegExp(`^${folder}/[1-5]\\.(jpg|jpeg|png|webp|heic|heif|gif)$`) : null;
  const rawPaths = Array.isArray(body.photo_paths) ? body.photo_paths : [];
  const photo_paths = shape
    ? [...new Set(rawPaths.filter((x): x is string => typeof x === 'string' && shape.test(x)))].slice(0, 5)
    : [];
  const gift = oneOf(body.is_gift, choices.gift);
  return {
    ok: true,
    row: {
      full_name,
      email,
      phone: optional(body.phone, 40),
      wants,
      story: optional(body.story, 4000),
      photo_folder: photo_paths.length ? folder : null,
      photo_paths,
      is_gift: gift === null ? null : gift === 'Yes',
      timing,
      source_page: optional(body.source_page, 300),
      suspected_spam: looksAutomated(body),
    },
  };
}
