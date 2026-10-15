// Small line drawings for "Where it goes" on /surfaces.
const PATHS: Record<string, string> = {
  // looking up into a room: ceiling plane with a pendant
  ceiling: 'M3 5h18M3 5l4 5h10l4-5M12 10v3M10 13h4l-1 2h-2z',
  // mirror over a basin
  powder: 'M12 3a4 5 0 1 1 0 10a4 5 0 1 1 0-10M5 17h14M7 17v1a5 3 0 0 0 10 0v-1',
  // arched doorway
  entry: 'M6 21V10a6 6 0 0 1 12 0v11M4 21h16M15 15h.01',
  // stair risers
  stairs: 'M3 20h4v-4h4v-4h4V8h4V4',
  // two closet doors
  closet: 'M5 3h14v18H5zM12 3v18M10 11v2M14 11v2',
  // bookshelf
  shelves: 'M5 3h14v18H5zM5 9h14M5 15h14M8 5v4M10 5v4M15 11v4M9 17v4',
  // washing machine
  laundry: 'M5 3h14v18H5zM5 7h14M8 5h.01M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0',
  // paneled door
  door: 'M6 3h12v18H6zM8.5 5.5h7v5h-7zM8.5 12.5h7v6h-7zM16 12h.01',
  // fireplace with arched opening
  fireplace: 'M3 6h18M4 6v15M20 6v15M8 21v-6a4 4 0 0 1 8 0v6M3 21h18',
};

export default function PlaceIcon({ name }: { name: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-7 w-7 shrink-0 text-brass"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[name] ?? PATHS.ceiling} />
    </svg>
  );
}
