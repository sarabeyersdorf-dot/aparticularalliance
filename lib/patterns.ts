// The Library on /surfaces: reads published rows from the Supabase table
// surface_patterns. The public key can read published rows only (RLS), and
// cannot add, change or see unpublished ones.
export type Pattern = {
  id: string;
  name: string;
  colorway: string | null;
  type: 'wallpaper' | 'tile' | 'mural' | 'plaster';
  maker_name: string | null;
  image_url: string | null;
};

// How long a visitor may see the previous list after Sara edits the table.
export const LIBRARY_REFRESH_SECONDS = 60;

export async function getPatterns(): Promise<Pattern[]> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return [];
  try {
    const res = await fetch(
      `${url.replace(/\/$/, '')}/rest/v1/surface_patterns?select=id,name,colorway,type,maker_name,image_url&is_published=eq.true&order=sort_order.asc,created_at.asc`,
      {
        headers: { apikey: key },
        next: { revalidate: LIBRARY_REFRESH_SECONDS },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!res.ok) {
      console.error(`Library fetch failed: ${res.status} ${await res.text()}`);
      return [];
    }
    return (await res.json()) as Pattern[];
  } catch (err) {
    // The page still renders; the Library just shows its "on the way" line.
    console.error('Library fetch failed:', err);
    return [];
  }
}
