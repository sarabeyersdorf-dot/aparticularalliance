# Photo shot list

Fifteen photos, all in place as of 2026-10-15. To swap one, see README step 2. Shoot in soft, natural light, and avoid any visible brand
names or logos.

**Size:** at least 2000 px on the long side; JPG is fine. Shoot portrait
(taller than wide) unless noted.

**The arch:** photos marked *arch* are shown with a rounded top, like a
doorway. Keep the subject in the middle and away from the top corners,
which get cut off.

| # | Name in `content/site.ts` | Where it appears | What to shoot |
|---|---|---|---|
| 1 | `hero` (*arch*) | Home, top | A handmade brass door lever on a plaster wall, soft morning light |
| 2 | `before` | Home, "The problem" | A plastic switch plate, straight on |
| 3 | `after` | Home, "The problem" | A hand-carved walnut switch plate, straight on (frame it the same as #2, so they read as a pair) |
| 4 | `alliance` (*arch*) | The Alliance, top | A maker's hands at a workbench, wood shavings and hand tools, warm side light |
| 5 | `walkthrough` (**landscape**) | How it works, step 1 | You in a client's entry, notebook in hand, looking at a door lever |
| 6 | `makers` (*arch*) | Makers, top | A potter at the wheel in a small foothill studio, clay on the hands, face out of frame |
| 7 | Gilt & Grain `photo` (*arch*) | Home + Collections | Brass cabinet pulls and a door lever on hand-finished oak, close and warm |
| 8 | Ore & Oak `photo` (*arch*) | Home + Collections | A forged iron fireplace set against native foothill stone and reclaimed oak |
| 9 | Brass & Burl `photo` (*arch*) | Home + Collections | A sculptural brass chandelier above a figured burl-wood table, evening light |
| 10 | Gilt & Loam `photo` (*arch*) | Home + Collections | Hand-thrown ceramic vessels and a pottery lamp in front of a textured plaster wall |
| 11 | Marble & Moss `photo` (*arch*) | Home + Collections | A carved stone planter with ferns on a kitchen windowsill, cool morning light |

Photos 7–11 appear on two pages, so they're your most important.

**Link-preview image** (`public/og.png`): the picture that shows when the
site is shared by text, Instagram or Facebook. It's currently the name and
promise set in type. To replace it, make a 1200 × 630 px image and upload it
over `public/og.png`.

**Logo:** the name is set as type in `components/Wordmark.tsx`. When a logo
exists, Claude Code can swap it in everywhere in one change.

## Surfaces (added 2026-10-16)

All Surfaces images are concept renderings and carry the small caption
**"A look we can create"**. When you have a photo of a real, finished
project, swap it in and delete the `concept: true` line next to it in
`content/site.ts` so the caption disappears.

| File in `public/photos/` | Where it appears | Shape and minimum size |
|---|---|---|
| `surfaces-hero.jpg` | Surfaces page, top (arch) | Portrait 4:5, 1600 × 2000 |
| `surfaces-fifth-wall.jpg` | "The Fifth Wall" card | Portrait 4:5, 1200 × 1500 |
| `surfaces-unexpected-places.jpg` | "Unexpected Places" card | Portrait 4:5, 1200 × 1500 |
| `surfaces-handmade-tile.jpg` | "Handmade Tile" card | Portrait 4:5, 1200 × 1500 |
| `surfaces-murals.jpg` | "Murals & Large Prints" card | Portrait 4:5, 1200 × 1500 |
| `surfaces-plaster.jpg` | "Plaster & Limewash" card | Portrait 4:5, 1200 × 1500 |
| `surfaces-relief.jpg` | "Relief & Wall Art" card | Portrait 4:5, 1200 × 1500 |
| `paper-and-plaster.jpg` | Paper & Plaster collection (Home card + Collections page) | Portrait 4:5, 1600 × 2000 |
| `home-fifth-wall.jpg` | Home page, "Look up. The fifth wall is waiting." band | Wide 2:1, 2400 × 1200 (keep the ceiling in the top half) |

The images now in place came from Dropbox → A Particular Alliance → Website
Pics → Surfaces. They were exported at 944 pixels tall, which looks fine on
phones but slightly soft on a large laptop screen. If your image tool can
export larger (2000 pixels on the long side), re-export and send them.

**Pattern swatches** for the Library are square, 1200 × 1200, flat and
straight-on. They are added through Supabase, not here: see README, "Adding a
pattern to the Library".

## Mischief & Mortar (added 2026-10-16)

Every Mischief image is a concept rendering for now, so each carries the
small caption **"A look we can create"**. Put them in Dropbox → A Particular
Alliance → Website Pics → **Mischief** with the names below (or any names;
tell Claude Code which is which), and they'll be placed for you. Each spot
already has its description and alt text in `content/site.ts` under
`mischiefPage`, `home.mischief` and the Mischief & Mortar collection.

| File in `public/photos/` | Where it appears | Shape and minimum size |
|---|---|---|
| `mischief-hero.jpg` | /mischief, top (arch): a powder room papered with the owner's dogs | Portrait 4:5, 1600 × 2000 |
| `mischief-wallpaper.jpg` | Custom Wallpaper | Portrait 4:5, 1600 × 2000 |
| `mischief-drawer.jpg` | Inside-the-Drawer Surprises | Portrait 4:5, 1600 × 2000 |
| `mischief-doorbell.jpg` | Custom Doorbells | Portrait 4:5, 1600 × 2000 |
| `mischief-knocker.jpg` | Custom Door Knockers | Portrait 4:5, 1600 × 2000 |
| `mischief-secret-door.jpg` | More mischief: Secret Doors | Square, 1200 × 1200 |
| `mischief-tile-message.jpg` | More mischief: A Message in the Tile | Square, 1200 × 1200 |
| `mischief-star-ceiling.jpg` | More mischief: Star Map Ceilings | Square, 1200 × 1200 |
| `mischief-disco-powder.jpg` | More mischief: The Disco Powder Room | Square, 1200 × 1200 |
| `mischief-stairs.jpg` | More mischief: Storytelling Stairs | Square, 1200 × 1200 |
| `mischief-neon.jpg` | More mischief: Glass & Neon | Square, 1200 × 1200 |
| `mischief-switch-plates.jpg` | More mischief: Personal Switch Plates | Square, 1200 × 1200 |
| `mischief-house-numbers.jpg` | More mischief: House Numbers | Square, 1200 × 1200 |
| `mischief-living-wall.jpg` | More mischief: Living Walls | Square, 1200 × 1200 |
| `mischief-garage.jpg` | More mischief: The Garage, Reconsidered | Square, 1200 × 1200 |
| `mischief-box.jpg` | The Mischief Box band: an open gift box with a bronze knocker | Landscape 3:2, 2000 × 1333 |
| `mischief-and-mortar.jpg` | Mischief & Mortar collection (Home card + Collections page): a bronze fox knocker on a green door | Portrait 4:5, 1600 × 2000 |
| `home-knocker.jpg` | Home page band, "Every home deserves a secret or two." | Square, 1200 × 1200 |

**Placed 2026-10-16** from Website Pics → Surfaces (the playful-side set):
every row above except these five, which still show "Photo to come":
`mischief-tile-message.jpg`, `mischief-neon.jpg`, `mischief-switch-plates.jpg`,
`mischief-living-wall.jpg`, `mischief-garage.jpg`.
`mischief-house-numbers.jpg` is a crop of the hand-knocker door with its
brass "841"; swap in a dedicated house-number image whenever you have one.
The source images are 944 pixels tall, so the portrait crops are 755 × 944:
fine on phones, slightly soft on a big screen. Larger exports are welcome.
