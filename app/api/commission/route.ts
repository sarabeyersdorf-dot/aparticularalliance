import { parseCommission } from '@/lib/forms';
import { insertRow } from '@/lib/supabase';
import { notifyNewEntry } from '@/lib/notify';

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'required' }, { status: 400 });
  }
  const parsed = parseCommission(body);
  if (!parsed.ok) return Response.json(parsed, { status: 400 });
  try {
    await insertRow('commission_requests', parsed.row);
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: 'network' }, { status: 502 });
  }
  // Saved. Now tell Sara; this never turns a saved request into an error.
  await notifyNewEntry('commission', parsed.row);
  return Response.json({ ok: true });
}
