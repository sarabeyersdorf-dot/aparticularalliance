// Adds one row to a Supabase table using the public (publishable) key.
// That key can INSERT into the two form tables and nothing else: it cannot
// read a single signup back. Uses Supabase's REST API directly, so the site
// needs no Supabase library.
export async function insertRow(table: 'waitlist_signups' | 'maker_applications', row: Record<string, unknown>) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error('SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY are not set');
  const res = await fetch(`${url.replace(/\/$/, '')}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: key,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Supabase insert into ${table} failed: ${res.status} ${await res.text()}`);
  }
}
