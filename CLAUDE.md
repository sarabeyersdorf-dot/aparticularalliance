# A Particular Alliance: notes for Claude Code

Website for aparticularalliance.com: Sara Cooper's home-detail curation
business (separate from her real estate brokerage, Legacy Properties, which
lives in the `legacycalifornia` repo). Sara is not a programmer: explain in
plain language, recommend the simpler path when there is one, and let her choose.

## Stack
Next.js 16 (App Router) + Tailwind CSS 4, deployed on Vercel from `main`.

## Where things are
- **All wording:** `content/site.ts`. Pages import from `@/content`
  (`content/index.ts`), which turns straight quotes into curly ones. Keep
  every new word in `site.ts`, never hard-coded in a page.
- **Answer choices** (`choices` in `site.ts`) must match the database CHECK
  constraints exactly. Changing one needs a migration too.
- **Photos:** `public/photos/`, named in `site.ts`. Empty `file` shows a
  labeled placeholder (`components/Photo.tsx`). Shot list in `PHOTOS.md`.
- **Wordmark:** `components/Wordmark.tsx` (type until a logo exists).

## Forms, database, email
- `/api/waitlist` and `/api/makers` validate (`lib/forms.ts`), insert via
  Supabase REST with the publishable key (`lib/supabase.ts`), then email
  Sara through Resend (`lib/notify.ts`).
- Supabase project **"A Particular Alliance"**, id `loiqsitfunvnjgaqyxnm`
  (Sara's free org; her Legacy CRM is a different project, never touch it from here).
  Tables `waitlist_signups`, `maker_applications`: RLS on, `anon` INSERT only.
  Keep it that way: the public site must never be able to read the list.
- **Spam is flagged, never discarded** (`suspected_spam`). A hidden trap field
  once silently threw away a real lead on Sara's other site because a
  phone's autofill filled it. The trap is named `ap_hp`; never rename it to
  anything autofill recognizes (company, address, website…).
- The email alert is best-effort: it must never turn a saved signup into an
  error. Settings: `RESEND_API_KEY`, `NOTIFY_EMAIL_TO`, `NOTIFY_EMAIL_FROM`.

## Voice (all copy)
First person ("I"), American spelling, warm and plain. Never criticize the
client's taste; the builder chose the details. Never use: bespoke, curated,
vendor, supplier, product, deal, discount, affordable luxury, generic, boring.

## Design
The Claude Design pass (2026-10-15) is built in: arched photos
(`<Photo arch>`), before/after switch plates, swipeable collections, the
"25" closing, step details and the story card, per-field form errors, and
Sara's signature on the confirmations. Claude Design exports are a blueprint:
rebuild them INTO this app (keep the forms, database, email and the one-file
copy). Never drop an export in as-is: its forms would not save.

- `*stars*` in `site.ts` set words in italics (`components/Emph.tsx`), which
  also keeps hyphenated words like "walk-through" on one line.
- Cormorant's default numerals are old-style (a "1" reads as a Roman "I").
  Any number set in the serif needs the `nums` class.
- Motion (2026-10-15): add `{...reveal(n)}` (`lib/reveal.ts`) to make an
  element drift in on scroll, `n` staggering siblings; `<Photo reveal={n}>`
  for photos. A sideways-scrolling row takes `data-reveal-row` so its
  off-screen cards arrive with it. Photos zoom slightly on hover
  (`group/photo`). The header wordmark rises in word by word and draws a
  brass line under the italic word (`<Wordmark animate>`). Never put a
  reveal on a form: the signup must be visible at once.
- All motion is off under `prefers-reduced-motion`, and nothing is hidden
  unless the script that reveals it is running (`MOTION_BOOT` in
  `app/layout.tsx`, with a 3.5s fall-back that shows everything).

## Sandbox note
Cloud sessions may be unable to reach `*.supabase.co`. Test forms against a
local stand-in that records requests, and have Sara send one real signup
after deploying.
