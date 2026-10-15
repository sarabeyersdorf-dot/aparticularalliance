# A Particular Alliance: website

The launch website for aparticularalliance.com. It has six pages, a Founding
Client List signup, and a maker application form. Signups are stored in your
Supabase project **"A Particular Alliance"**.

---

## 1. Changing the words

Every word on the site lives in one file: **`content/site.ts`**.

1. On GitHub, open `content/site.ts` and click the pencil icon.
2. Change only the words **between the backticks**, `like this`. Apostrophes
   are fine (`I'm`); the site turns them into proper curly ones by itself.
3. Click **Commit changes**. Vercel rebuilds the site in about a minute.

If an edit breaks something, Vercel refuses to publish it and the live site
stays as it was. Undo the change and try again.

## 2. Adding your photos

Each photo slot shows a labeled "Photo to come" placeholder until you add the real one.

1. Upload the photo to the folder `public/photos/`
   (on GitHub: open the folder → **Add file → Upload files**).
2. In `content/site.ts`, find that photo under `photos` (or under its
   collection) and type the file name into `file`, for example ``file: `hero.jpg` ``.
3. Update its `alt` line to describe what is actually in the photo.

The shot list is in **PHOTOS.md**.

## 3. Seeing and exporting signups

1. Go to **supabase.com** → sign in → open the project **A Particular Alliance**.
2. Click **Table Editor** in the left sidebar.
3. Choose **waitlist_signups** (clients) or **maker_applications** (makers).
   Newest are easiest to see by clicking the `created_at` column → sort descending.
4. To download: click **Export** (top right of the table) → **Export to CSV**.
   The file opens in Excel, Numbers or Google Sheets.

**The `suspected_spam` column.** If it says `true`, the entry tripped the spam
check: a hidden field a person never sees was filled in, or the form was sent
faster than a human can type. These are kept rather than thrown away, in case
a real person's browser autofill caused it. Glance at them; delete the junk.

**Deleting a row:** tick the box at the left of the row → **Delete**. The three
rows named "TEST … (delete me)" are from the launch check and can go.

**Who can see the list:** only you, signed in to Supabase. The website itself
can add entries but can never read them back, so nobody can pull your list
through the site.

### Commission requests and their photos (Mischief & Mortar)

- **The requests:** Table Editor → **commission_requests**. One row per
  request: what they'd like, their story, gift or not, timing. The
  `photo_folder` column names the folder their photos are in.
- **The photos:** left sidebar → **Storage** → bucket **commission-photos** →
  open the folder with that name. Click a photo to preview it, or **Download**.
  The bucket is private: the website can put photos in but can never list or
  open them, and there is no public link to any of them. Only you, signed in,
  can see them.
- Each request also emails you (once the email alerts in step 6 are set up),
  with a link straight to the photos.

## 4. Previewing and deploying (one-time setup on Vercel)

1. Go to **vercel.com** → **Add New… → Project**.
2. Import the GitHub repository **aparticularalliance**. Leave every build
   setting as Vercel suggests; it recognizes the site on its own.
3. Open **Environment Variables** and add these two (they are also in `.env.example`):
   - `SUPABASE_URL` = `https://loiqsitfunvnjgaqyxnm.supabase.co`
   - `SUPABASE_PUBLISHABLE_KEY` = `sb_publishable_2hXqctXsLSwm7X53F_f0aw_nHGWibaO`
4. Click **Deploy**. In about two minutes you get a link ending in `.vercel.app`.
   That is your preview. Send yourself a test signup and check it appears in
   Supabase (step 3).

After that, every change saved on GitHub's production branch publishes
automatically. Changes on other branches get their own preview link.

## 5. Pointing aparticularalliance.com at the site

1. In Vercel: your project → **Settings → Domains** → add `aparticularalliance.com`,
   then add `www.aparticularalliance.com`.
2. Vercel shows the exact records to enter. They are normally:

   | At your registrar, add | Name / Host | Value |
   | --- | --- | --- |
   | **A** record | `@` (the bare domain) | `76.76.21.21` |
   | **CNAME** record | `www` | `cname.vercel-dns.com` |

   If Vercel shows different values, use Vercel's.
3. At your registrar, **delete any existing A record for `@`** (often a "parked"
   page) so it doesn't compete with the new one.
4. Wait. It usually works within an hour, occasionally up to a day. Vercel adds
   the secure padlock (https) on its own.

## 6. Getting an email for every signup

Every new client signup and maker application can send you an email with all
their answers. Hit **Reply** and you're writing straight to them. Entries the
spam check flagged arrive with **[Possible spam]** in the subject.

It uses **Resend**, the same email service the Legacy CRM already uses, so
there's no new account. Until these three settings are added, signups still
save normally; you just don't get the email.

1. Go to **resend.com** → sign in → **API Keys** → **Create API Key**.
   Name it `A Particular Alliance`, permission **Sending access**. Copy the key
   (it starts with `re_`; Resend shows it only once).
2. In Vercel: the A Particular Alliance project → **Settings → Environment
   Variables**, add:
   - `RESEND_API_KEY` = the key you just copied
   - `NOTIFY_EMAIL_TO` = the address the alerts should go to
     (more than one? separate them with commas)
   - `NOTIFY_EMAIL_FROM` = the sender. Use
     `A Particular Alliance <` + the same address the Legacy project uses in
     its `RESEND_FROM_EMAIL` setting + `>`. That address is already approved
     in Resend, so it works today.
3. **Deployments** → the latest one → **⋯ → Redeploy**, so the site picks up
   the new settings. Then send yourself a test signup.

**Later, once aparticularalliance.com is yours:** in Resend → **Domains → Add
Domain**, add `aparticularalliance.com` and copy the records it lists into
your registrar (same place as step 5). When Resend says **Verified**, change
`NOTIFY_EMAIL_FROM` to `A Particular Alliance <hello@aparticularalliance.com>`
and redeploy.

## 7. Adding a pattern to the Library (Surfaces page)

The Library on `/surfaces` reads from a table in Supabase, so you can add,
change or hide patterns without touching code. Changes show on the site
within about a minute.

**Add a pattern**
1. Go to **supabase.com** → open **A Particular Alliance**.
2. **Upload the swatch:** left sidebar → **Storage** → bucket
   **surface-patterns** → **Upload file**. Use a square image, about
   1200 × 1200, JPG or PNG. When it's uploaded, click the file → **Get URL**
   → copy the link.
3. **Add the row:** left sidebar → **Table Editor** → **surface_patterns** →
   **Insert → Insert row**, and fill in:
   - `name`: the pattern name, e.g. Foothill Quail
   - `colorway`: e.g. Sage and cream
   - `type`: exactly one of `wallpaper`, `tile`, `mural`, `plaster`
   - `maker_name`: the maker or artist (leave empty to hide)
   - `image_url`: paste the link from step 2
   - `sort_order`: lower numbers show first (the starting six use 10, 20, 30…)
   - `is_published`: ticked to show it
4. Click **Save**.

**Hide a pattern** without deleting it: open its row and untick
`is_published`. Tick it again to bring it back.

**Change a pattern:** click into any cell, edit, press Enter.

Leave `id` and `created_at` alone; they fill themselves in.

## For developers

Next.js 16 (App Router) + Tailwind CSS 4, deployed on Vercel. Forms post to
`/api/waitlist` and `/api/makers`, which validate (`lib/forms.ts`) and insert
through Supabase's REST API with the publishable key (`lib/supabase.ts`), then
email an alert via Resend (`lib/notify.ts`, best-effort: never fails a saved signup).
Database: `waitlist_signups`, `maker_applications`; RLS on, `anon` has INSERT
only (no SELECT/UPDATE/DELETE); CHECK constraints mirror `choices` in
`content/site.ts`. Changing a choice needs a matching migration.

```
npm install
npm run dev     # http://localhost:3000, needs .env.local with the two variables
npm run build
```
