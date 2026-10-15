// Emails you when someone joins the Founding Client List or applies as a
// maker. Sent through Resend (the same email service the Legacy CRM uses).
//
// It runs only AFTER the signup is safely saved, and it can never cause a
// signup to fail: if email isn't set up yet, or Resend is down, the person
// still sees their confirmation and the row is still in Supabase.
//
// Settings (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY     a key from resend.com → API Keys
//   NOTIFY_EMAIL_TO    where the alerts go (comma-separate for more than one)
//   NOTIFY_EMAIL_FROM  a sender on a domain verified in Resend,
//                      e.g.  A Particular Alliance <hello@aparticularalliance.com>

const SUPABASE_TABLES = 'https://supabase.com/dashboard/project/loiqsitfunvnjgaqyxnm/editor';

type Row = Record<string, unknown>;

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function show(v: unknown): string {
  if (Array.isArray(v)) return v.length ? v.join(', ') : '—';
  if (v === null || v === undefined || v === '') return '—';
  return String(v);
}

function build(kind: 'waitlist' | 'maker', row: Row) {
  const name = show(row.full_name);
  const flag = row.suspected_spam ? '[Possible spam] ' : '';
  const subject =
    kind === 'waitlist'
      ? `${flag}New founding client: ${name} · ${show(row.city)}`
      : `${flag}New maker application: ${name} · ${show(row.craft)}`;
  const intro =
    kind === 'waitlist'
      ? row.interest === 'surfaces'
        ? `Someone just joined the Founding Client List from the Surfaces page.`
        : `Someone just joined the Founding Client List.`
      : `A maker just applied to join the Alliance.`;
  const fields: [string, unknown][] =
    kind === 'waitlist'
      ? [
          ['Name', row.full_name],
          ['Email', row.email],
          ['Phone', row.phone],
          ['City or area', row.city],
          ['Type of home', row.home_type],
          ['What bothers them most', row.bothers],
          ['Surfaces they’re curious about', row.surfaces],
          ['Timing', row.timing],
          ['Heard about us', row.heard_from],
        ]
      : [
          ['Name', row.full_name],
          ['Email', row.email],
          ['Craft', row.craft],
          ['Where they work', row.location],
          ['Website or Instagram', row.website],
          ['Their note', row.note],
        ];
  const spamNote = row.suspected_spam
    ? `This one tripped the spam check (a hidden field was filled in, or it was sent faster than a person types). It's saved anyway in case it's a real person whose browser autofilled the form.`
    : '';
  const footer = `Reply to this email to write back to ${name} directly. Every signup is also saved in Supabase.`;

  const text = [
    intro,
    '',
    ...fields.map(([k, v]) => `${k}: ${show(v)}`),
    '',
    spamNote,
    footer,
    `All signups: ${SUPABASE_TABLES}`,
  ]
    .filter((l, i, a) => !(l === '' && a[i - 1] === ''))
    .join('\n');

  const rows = fields
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 20px 8px 0;color:#5c544b;vertical-align:top;white-space:nowrap;width:1%">${esc(k)}</td>` +
        `<td style="padding:8px 0;color:#2b2520;white-space:pre-wrap">${esc(show(v))}</td></tr>`,
    )
    .join('');
  const html = `<div style="background:#f6f1e9;padding:32px 20px;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5">
<div style="max-width:560px;margin:0 auto">
<p style="margin:0 0 4px;font-family:Georgia,serif;letter-spacing:.18em;text-transform:uppercase;font-size:13px;color:#2b2520">A Particular Alliance</p>
<div style="width:40px;height:1px;background:#a98a52;margin:16px 0 24px"></div>
<p style="margin:0 0 20px;font-family:Georgia,serif;font-size:22px;color:#2b2520">${esc(intro)}</p>
<table style="border-collapse:collapse;border-top:1px solid #d3c6b2;width:100%">${rows}</table>
${spamNote ? `<p style="margin:20px 0 0;padding:12px 14px;background:#ece4d8;color:#5c544b">${esc(spamNote)}</p>` : ''}
<p style="margin:24px 0 0;color:#5c544b">${esc(footer)}</p>
<p style="margin:8px 0 0"><a href="${SUPABASE_TABLES}" style="color:#7a5c2b">See all signups in Supabase</a></p>
</div></div>`;

  return { subject, text, html };
}

export async function notifyNewEntry(kind: 'waitlist' | 'maker', row: Row): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL_TO;
  const from = process.env.NOTIFY_EMAIL_FROM;
  if (!key || !to || !from) {
    console.warn('Signup alert not sent: RESEND_API_KEY / NOTIFY_EMAIL_TO / NOTIFY_EMAIL_FROM not set');
    return;
  }
  const base = (process.env.RESEND_API_BASE || 'https://api.resend.com').replace(/\/$/, '');
  const { subject, text, html } = build(kind, row);
  try {
    const res = await fetch(`${base}/emails`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: typeof row.email === 'string' ? row.email : undefined,
        subject,
        text,
        html,
      }),
      signal: AbortSignal.timeout(5000),
      cache: 'no-store',
    });
    if (!res.ok) console.error(`Signup alert failed: ${res.status} ${await res.text()}`);
  } catch (err) {
    console.error('Signup alert failed:', err);
  }
}
