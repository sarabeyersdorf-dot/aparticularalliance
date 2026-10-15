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
  return {
    ok: true,
    row: {
      full_name,
      email,
      phone: optional(body.phone, 40),
      city,
      home_type,
      bothers,
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
