/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL THE WORDS ON THE WEBSITE LIVE IN THIS ONE FILE.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  How to edit safely:
 *  • Change only the words BETWEEN the backticks  `like this`.
 *    Apostrophes and quote marks are fine inside them: `I'm taking 25 homes.`
 *  • Put *stars* around words to set them in italics, as in the headings:
 *    `Anything but *beige.*`
 *  • Leave the labels on the left (heading:, body:, etc.) and all the
 *    punctuation outside the backticks exactly as they are.
 *  • A blank line between paragraphs in a long passage starts a new paragraph.
 *  • Lines starting with // are notes to you. The website ignores them.
 *
 *  If something breaks after an edit, the preview on Vercel will fail to build
 *  and the live site stays as it was, so you can't take the site down by
 *  mistake. Undo your last change and try again.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── The business ─────────────────────────────────────────────────────────────
export const site = {
  name: `A Particular Alliance`,
  // How the name is set at the top and bottom of every page.
  wordmark: `A *Particular* Alliance`,
  founder: `Sara Cooper`,
  // Used for Google results and link previews when no page-specific one is set.
  description: `A Particular Alliance creates homes for people who won't settle for builder grade. Handmade, one-of-a-kind pieces from independent makers, sourced, priced, delivered and installed as one premium package.`,
  promise: `A Particular Alliance creates homes for people who won't settle for builder grade.`,
  url: `https://aparticularalliance.com`,
  // Leave empty (``) to hide. Fill in to show them in the footer.
  contactEmail: ``,
  instagram: ``, // e.g. `https://instagram.com/aparticularalliance`
  footerTagline: `Never settle for builder grade.`,
  footerCredit: `Founded by Sara Cooper.`,
};

// ── Navigation ───────────────────────────────────────────────────────────────
export const nav = [
  { label: `The Alliance`, href: `/the-alliance` },
  { label: `Collections`, href: `/collections` },
  { label: `Surfaces`, href: `/surfaces` },
  { label: `Mischief`, href: `/mischief` },
  { label: `Outdoors`, href: `/outdoors` },
  { label: `How it works`, href: `/how-it-works` },
  { label: `Makers`, href: `/makers` },
];
export const navCta = { label: `Join the list`, href: `/founding-client-list` };

// The button that appears all over the site.
export const joinButton = `Join the Founding Client List`;

// ── Photos ───────────────────────────────────────────────────────────────────
// Each photo shows as a labeled placeholder until you add the real one.
// To add a photo: put the file in the folder  public/photos/  and type its file
// name in `file`, e.g.  file: `hero.jpg`.  The `alt` text describes the photo
// for people using screen readers; update it to match your real photo.
// `concept: true` adds the small caption "A look we can create", so a rendering
// is never mistaken for a finished client project. Delete that line once the
// photo is of real, finished work.
export const conceptCaption = `A look we can create`;
export const photos = {
  hero: {
    file: `hero-b.jpg`,
    shot: `A plaster archway opening onto a brass pendant, a pottery lamp on a burl console and oak-covered hills, warm evening light. Wide, with empty wall on the left for the headline`,
    alt: `A plaster archway opening onto a brass pendant and a lamp on a burl wood console, a window beyond onto oak-covered hills at sunset`,
  },
  before: {
    file: `before-plastic-switch-plate.jpg`,
    shot: `A plastic switch plate, straight on`,
    alt: `A plain white plastic light switch plate on a flat white wall`,
  },
  after: {
    file: `after-walnut-switch-plate.jpg`,
    shot: `A hand-carved walnut switch plate, straight on`,
    alt: `A hand-carved walnut switch plate with brass screws on a plaster wall`,
  },
  alliance: {
    file: `alliance-woodworker.jpg`,
    shot: `A maker's hands at a workbench, wood shavings and hand tools, warm side light`,
    alt: `A woodworker's hands pushing a hand plane along a walnut board, shavings curling across the bench`,
  },
  walkthrough: {
    file: `walkthrough.jpg`,
    shot: `Sara in a client's entry, notebook in hand, looking at a door lever`,
    alt: `A woman in a linen jacket, notebook in hand, reaching for a brass door lever in a sunlit entry`,
  },
  makers: {
    file: `makers-potter.jpg`,
    shot: `A potter at the wheel in a small foothill studio, clay on the hands, face out of frame`,
    alt: `A potter's clay-covered hands shaping a tall vessel on the wheel`,
  },
};

// ── The eight collections ──────────────────────────────────────────────────────
export const collections = [
  {
    slug: `gilt-and-grain`,
    name: `Gilt & Grain`,
    mood: `The touchpoints.`,
    description: `Warm brass meets hand-finished wood in the places your hands go every day: cabinet pulls, door levers, switch plates, house numbers. This is where most homes begin with me, because it changes how a house feels within a single afternoon.`,
    // The Home page card ("Choose a feeling").
    cardPhoto: {
      file: `gilt-and-grain-pull.jpg`,
      shot: `A hand-forged brass cabinet pull on a hand-oiled white oak drawer, warm morning light`,
      alt: `A hand-hammered brass pull on a white oak drawer in warm sunlight`,
    },
    // The Collections page.
    photo: {
      file: `gilt-and-grain-kitchen.jpg`,
      shot: `Brass cabinet pulls and a door lever on hand-finished oak, close and warm`,
      alt: `Hand-hammered brass pulls and a brass lever on white oak kitchen cabinetry in warm light`,
    },
  },
  {
    slug: `ore-and-oak`,
    name: `Ore & Oak`,
    mood: `Gold Country, made by hand.`,
    description: `Pieces from makers in the Sierra foothills, where gold once ran through quartz and oak still covers the hills. Forged iron, reclaimed oak, native stone. Rooted, honest and a little rugged.`,
    // The Home page card ("Choose a feeling").
    cardPhoto: {
      file: `ore-and-oak-hook.jpg`,
      shot: `A hand-forged black iron hook on a reclaimed oak beam, fieldstone wall behind`,
      alt: `A hand-forged iron hook on a weathered oak beam beside a fieldstone wall`,
    },
    // The Collections page.
    photo: {
      file: `ore-and-oak-fireplace.jpg`,
      shot: `A forged iron fireplace set against native foothill stone and reclaimed oak`,
      alt: `A hand-forged iron fireplace tool set beside a fieldstone hearth with a reclaimed oak mantel and a fire burning`,
    },
  },
  {
    slug: `brass-and-burl`,
    name: `Brass & Burl`,
    mood: `The statement.`,
    description: `Sculptural lighting, rare figured woods, and the one piece every guest asks about. Often commissioned from scratch.`,
    // The Home page card ("Choose a feeling").
    cardPhoto: {
      file: `brass-and-burl-pendant.jpg`,
      shot: `A sculptural brass pendant glowing above a figured burl dining table, evening`,
      alt: `A hand-hammered brass pendant glowing above a live-edge burl wood table`,
    },
    // The Collections page.
    photo: {
      file: `brass-and-burl-chandelier.jpg`,
      shot: `A sculptural brass chandelier above a figured burl-wood table, evening light`,
      alt: `A sculptural brass ribbon chandelier glowing above a figured burl wood dining table at dusk`,
    },
  },
  {
    slug: `gilt-and-loam`,
    name: `Gilt & Loam`,
    mood: `Earth, refined.`,
    description: `Hand-thrown ceramics, plaster finishes, textured walls and pottery lamps. Soft color and natural texture for homes that have been beige too long.`,
    // The Home page card ("Choose a feeling").
    cardPhoto: {
      file: `gilt-and-loam-lamp.jpg`,
      shot: `A hand-thrown terracotta lamp with a linen shade against blush lime plaster`,
      alt: `A speckled terracotta pottery lamp with a linen shade against a blush plaster wall`,
    },
    // The Collections page.
    photo: {
      file: `gilt-and-loam-vessels.jpg`,
      shot: `Hand-thrown ceramic vessels and a pottery lamp in front of a textured plaster wall`,
      alt: `A pottery lamp and hand-thrown vessels on an oak console against a terracotta plaster wall`,
    },
  },
  {
    slug: `marble-and-moss`,
    name: `Marble & Moss`,
    mood: `Stone and living things.`,
    description: `Carved stone vessels, bath and kitchen accents, planters, and pieces that bring the outdoors in. Cool, calm and quietly luxurious.`,
    // The Home page card ("Choose a feeling").
    cardPhoto: {
      file: `marble-and-moss-fern.jpg`,
      shot: `A carved stone vessel with trailing maidenhair ferns on a honed stone ledge`,
      alt: `Maidenhair ferns spilling from a hand-carved stone vessel on a honed stone ledge`,
    },
    // The Collections page.
    photo: {
      file: `marble-and-moss-windowsill.jpg`,
      shot: `A carved stone planter with ferns on a kitchen windowsill, cool morning light`,
      alt: `A carved stone planter of ferns on a kitchen windowsill beside a carved stone fruit bowl`,
    },
  },
  {
    slug: `paper-and-plaster`,
    name: `Paper & Plaster`,
    mood: `Surfaces, reconsidered.`,
    description: `Wallpapered ceilings, handmade tile, murals and hand-troweled plaster in the places builders leave blank.`,
    // This collection has its own page.
    href: `/surfaces`,
    linkLabel: `See Surfaces`,
    cardPhoto: {
      file: `paper-and-plaster.jpg`,
      shot: `A powder room with a softly patterned wallpapered ceiling and limewashed walls`,
      alt: `A walk-in closet of warm wood shelving beneath a botanical wallpapered ceiling`,
      concept: true,
    },
    photo: {
      file: `paper-and-plaster.jpg`,
      shot: `A powder room with a softly patterned wallpapered ceiling and limewashed walls`,
      alt: `A walk-in closet of warm wood shelving beneath a botanical wallpapered ceiling`,
      concept: true,
    },
  },
  {
    slug: `mischief-and-mortar`,
    name: `Mischief & Mortar`,
    mood: `The playful side.`,
    description: `Hidden surprises, custom doorbells and knockers, and wallpaper starring the people and places you love.`,
    // This collection has its own page.
    href: `/mischief`,
    linkLabel: `See Mischief & Mortar`,
    cardPhoto: {
      file: `mischief-and-mortar.jpg`,
      shot: `A hand-cast bronze fox door knocker on a deep green front door, warm afternoon light. Portrait`,
      alt: `A hand-cast bronze fox door knocker on a deep green front door`,
      concept: true,
    },
    photo: {
      file: `mischief-and-mortar.jpg`,
      shot: `A hand-cast bronze fox door knocker on a deep green front door, warm afternoon light. Portrait`,
      alt: `A hand-cast bronze fox door knocker on a deep green front door`,
      concept: true,
    },
  },
  {
    slug: `moss-and-murmur`,
    name: `Moss & Murmur`,
    mood: `The outdoor side.`,
    description: `Water you can hear, music in the garden, secret spaces and light after dark.`,
    // This collection has its own page.
    href: `/outdoors`,
    linkLabel: `See Moss & Murmur`,
    cardPhoto: {
      file: `moss-and-murmur.jpg`,
      shot: `A round stone moon gate in a hedge at dusk, a lantern glowing on the path beyond. Portrait`,
      alt: `A round fieldstone moon gate framing a valley oak, a gravel path through lavender leading to it`,
      concept: true,
    },
    photo: {
      file: `moss-and-murmur.jpg`,
      shot: `A round stone moon gate in a hedge at dusk, a lantern glowing on the path beyond. Portrait`,
      alt: `A round fieldstone moon gate framing a valley oak, a gravel path through lavender leading to it`,
      concept: true,
    },
  },
];

// ── Home page ────────────────────────────────────────────────────────────────
export const home = {
  title: `Never settle for builder grade`,
  hero: {
    eyebrow: `The eye you've always wanted.`,
    heading: `Homes for people who won't settle for *builder grade.*`,
    body: `I pair homeowners with independent makers, then source, price, deliver and install one-of-a-kind pieces as a single, finished package.`,
    secondaryLink: `Choose a feeling`,
  },
  problem: {
    eyebrow: `The problem`,
    heading: `Beautiful house. *Builder-grade details.*`,
    body: `Walk through almost any new home, even one with a seven-figure price, and you'll find the same things: plastic switch plates, stamped vent covers, a light fixture that came in a box of twelve. Nobody chose them for you. The builder chose them for everyone.

They're also the things you touch every day. The door lever. The cabinet pull. The plate around the light switch.

When they're made by hand, a house starts to feel like it was made for you.`,
    beforeLabel: `Chosen for everyone`,
    afterLabel: `Made for you`,
  },
  alliance: {
    heading: `An alliance *of three.*`,
    intro: `Every piece I place is the work of three people who care about the same thing.`,
    parties: [
      {
        name: `The client`,
        body: `You. You have standards, and a home that deserves more than the builder's catalog.`,
      },
      {
        name: `The maker`,
        body: `An independent artisan with the craft in their hands: a forge, a lathe, a wheel, a chisel.`,
      },
      {
        name: `The curator`,
        body: `Me. I bring the eye, and I handle everything in between: sourcing, pricing, delivery and the install.`,
      },
    ],
    link: `Read about the Alliance`,
  },
  collections: {
    eyebrow: `Eight collections`,
    heading: `Each one a room *of its own.*`,
    swipeHint: `Swipe to see all eight`,
  },
  // The full-width ceiling band, between the collections and the closing.
  fifthWall: {
    line: `Look up. The fifth wall *is waiting.*`,
    link: `Discover Surfaces`,
    photo: {
      file: `home-fifth-wall.jpg`,
      shot: `Looking straight up at a richly wallpapered ceiling above a dining table, a brass pendant hanging from its center. Wide`,
      alt: `A dining room beneath a ceiling painted as a soft sunset sky, a chandelier at its center`,
      concept: true,
    },
  },
  // The small playful band, just before the closing.
  mischief: {
    line: `Every home deserves *a secret or two.*`,
    link: `Meet Mischief & Mortar`,
    photo: {
      file: `home-knocker.jpg`,
      shot: `A hand-cast bronze door knocker shaped like a fox, on a painted front door, close up. Square`,
      alt: `A cast-bronze door knocker shaped like a hand holding a ball, on a dark wood front door`,
      concept: true,
    },
  },
  // The full-width garden band, after the playful one.
  outdoors: {
    line: `Step outside. *Listen.*`,
    link: `Discover Moss & Murmur`,
    photo: {
      file: `home-outdoors.jpg`,
      shot: `A hand-carved stone basin brimming with water in a fern garden at dusk, a lantern glowing nearby. Wide`,
      alt: `A long dinner table set beneath a spreading oak strung with tiny lights, the foothills behind`,
      concept: true,
    },
  },
  closing: {
    stat: `25`,
    statLabel: `Homes · first season`,
    heading: `Anything but *beige.*`,
    body: `I'm taking 25 homes in our first season. Founding clients get a complimentary walk-through and first pick of the founding collection.`,
  },
};

// ── The Alliance page ────────────────────────────────────────────────────────
export const alliancePage = {
  title: `The Alliance`,
  description: `The story behind A Particular Alliance: a client with standards, a maker with craft, and a curator who handles everything in between.`,
  eyebrow: `The Alliance`,
  heading: `Three parties, *one standard.*`,
  lede: `The client brings the standards. The maker brings the craft. I bring the eye, and everything in between.`,
  // "The name", from the Lore.
  name: {
    heading: `The *name*`,
    body: `A particular person notices. They have standards, and they don't settle for whatever came with the house. That is who I work for, and it is how I work.

An alliance is a few parties who are better together than apart. In every home I touch, the alliance is three: the client, the maker, and me, the one who brings them together. The makers bring the craft. I bring the eye. You get a home that finally reflects your own particular taste.`,
    members: `*Members of the Alliance.* My makers are members, chosen for their craft and named on every piece they make.`,
  },
  began: {
    heading: `Where it *began*`,
    body: `I have walked through hundreds of homes as a real estate broker. Some of them sold for well over a million dollars. And again and again, I noticed the same thing.

The square footage was there. The view was there. The price was there. But the details told a different story. The same plastic switch plates. The same stamped vent covers. The same light fixtures you could find in any new subdivision. Beautiful homes, wearing builder-grade clothes.

Nobody did anything wrong. Builders choose what is fast and affordable, and most buyers never get the chance to choose otherwise. They move in, they get busy, and the house never quite becomes theirs.

At the same time, I kept meeting extraordinary makers. Metalworkers, ceramicists, woodworkers, glass artists, people making one-of-a-kind pieces by hand, often just a few miles from the homes that needed them.

Great homes and great makers have always needed each other: homes waiting for character, and makers waiting for the right home for their work. What was missing was someone with the eye to bring them together, on purpose.`,
  },
  beliefs: {
    heading: `What we *believe*`,
    items: [
      { name: `The details are the home.`, body: `People remember the brass pull warm under their hand, the light that glows instead of glares, the switch plate that feels like jewelry. Square footage is forgotten. Details are not.` },
      { name: `Nothing should be repeated.`, body: `If you can find it in a catalog, it does not belong on my list. Every piece I place is handmade, limited, or made for you alone.` },
      { name: `Makers deserve a patron.`, body: `Behind every piece is a person with a name and a craft. I pay them fairly and tell their stories.` },
      { name: `Taste can be borrowed, then owned.`, body: `You do not need to know where to find a hand-forged bronze vent cover. That is my job. Once it is in your home, it is yours.` },
      { name: `The credit belongs to you.`, body: `I work quietly. My name is not on the wall. Yours is.` },
      { name: `Done means done.`, body: `I source, price, deliver and install. You do not chase deliveries or contractors. You walk in, and it is finished.` },
    ],
  },
  // The page's closing line.
  tagline: `That's the *particular* in the Alliance.`,
  makersLink: `Members of the Alliance`,
};

// ── Collections page ─────────────────────────────────────────────────────────
export const collectionsPage = {
  title: `Collections`,
  description: `Eight collections of handmade, one-of-a-kind pieces for the home and garden: Gilt & Grain, Ore & Oak, Brass & Burl, Gilt & Loam, Marble & Moss, Paper & Plaster, Mischief & Mortar and Moss & Murmur.`,
  eyebrow: `Eight collections`,
  heading: `Choose by *feeling.*`,
  lede: `Each collection is a mood, so you can choose by feeling instead of by catalog number.`,
  numberLabel: `Collection`,
  closing: {
    heading: `Anything but *beige.*`,
    body: `Founding clients get first pick of the founding collection.`,
  },
};

// ── Surfaces page (/surfaces) ────────────────────────────────────────────────
export const surfacesPage = {
  // What Google and link previews show.
  title: `Wallpapered Ceilings, Handmade Tile & Plaster | A Particular Alliance`,
  description: `Wallpaper, tile, murals and plaster in unexpected places, starting with the ceiling. Sourced from makers and installed for you in California's Gold Country and Sacramento area.`,
  eyebrow: `Surfaces`,
  heading: `The fifth *wall.*`,
  lede: `Most homes have one ceiling color: white. I think that's a missed opportunity. Surfaces brings pattern, texture and color to the places nobody expects, starting with the one everyone forgets to look up at.`,
  heroPhoto: {
    file: `surfaces-hero.jpg`,
    shot: `Looking up into a room with a wallpapered ceiling in a soft botanical pattern, warm daylight. Portrait`,
    alt: `A paneled sitting room under a black ceiling swirled with cream ribbons, a sculptural white chandelier above a marble fireplace`,
    concept: true,
  },
  intro: `Builder-grade homes are finished in flat paint and good intentions. Surfaces changes that, one wall, ceiling or stair at a time. Every paper, tile and finish comes from a maker or artist I've chosen, and every installation is done by trades I trust.`,
  offer: {
    heading: `What *we do*`,
    cards: [
      {
        title: `The Fifth Wall`,
        line: `Wallpapered and painted ceilings that change how a room feels the moment you walk in.`,
        photo: { file: `surfaces-fifth-wall.jpg`, shot: `A dining room with a patterned wallpapered ceiling`, alt: `A sunlit garden room papered in green botanicals up the walls and across the ceiling, above a black-and-cream checkerboard floor`, concept: true },
      },
      {
        title: `Unexpected Places`,
        line: `Powder rooms, closets, stair risers, the backs of bookshelves, laundry rooms, door panels.`,
        photo: { file: `surfaces-unexpected-places.jpg`, shot: `Built-in bookshelves backed with a bold patterned paper`, alt: `A laundry room papered in a bold dark botanical print above a farmhouse sink`, concept: true },
      },
      {
        title: `Handmade Tile`,
        line: `Hand-glazed and encaustic tile for fireplaces, backsplashes, stairs and feature walls.`,
        photo: { file: `surfaces-handmade-tile.jpg`, shot: `A fireplace surround in hand-glazed tile`, alt: `A staircase with each riser faced in a different patterned terracotta tile`, concept: true },
      },
      {
        title: `Murals & Large Prints`,
        line: `Original, large-scale artwork made for one wall in one home.`,
        photo: { file: `surfaces-murals.jpg`, shot: `A hand-painted landscape mural across one wall of a sitting room`, alt: `A living room wall painted floor to ceiling with a sweeping hand-drawn mural of overlapping arcs in charcoal on cream`, concept: true },
      },
      {
        title: `Plaster & Limewash`,
        line: `Hand-troweled finishes with depth, movement and the marks of the maker.`,
        photo: { file: `surfaces-plaster.jpg`, shot: `A hand-troweled limewash wall in warm clay tones, raking light`, alt: `A hand-troweled limewash archway glowing in warm afternoon light`, concept: true },
      },
      {
        title: `Relief & Wall Art`,
        line: `Sculptural pieces that turn a blank wall into the room's focal point.`,
        photo: { file: `surfaces-relief.jpg`, shot: `A sculptural plaster relief panel on an entry wall`, alt: `A sculptural wall piece of layered wooden waves above a console in an entry`, concept: true },
      },
    ],
  },
  where: {
    heading: `Where *it goes*`,
    // icon: one of ceiling, powder, entry, stairs, closet, shelves, laundry, door, fireplace
    places: [
      { label: `Ceilings`, icon: `ceiling` },
      { label: `Powder rooms`, icon: `powder` },
      { label: `Entries`, icon: `entry` },
      { label: `Stair risers`, icon: `stairs` },
      { label: `Closets`, icon: `closet` },
      { label: `Bookshelf backs`, icon: `shelves` },
      { label: `Laundry rooms`, icon: `laundry` },
      { label: `Door panels`, icon: `door` },
      { label: `Fireplace surrounds`, icon: `fireplace` },
      { label: `Ceilings again (it bears repeating)`, icon: `ceiling` },
    ],
  },
  library: {
    eyebrow: `The Library`,
    heading: `Papers, tiles *and finishes.*`,
    intro: `A few of the patterns I keep coming back to. At your walk-through you'll see and touch the real thing.`,
    empty: `New patterns are on their way.`,
    // How each type reads on the page.
    types: { wallpaper: `Wallpaper`, tile: `Tile`, mural: `Mural`, plaster: `Plaster` },
    swatchPlaceholder: `Swatch to come`,
  },
  how: {
    heading: `How *it works*`,
    steps: [
      { name: `The walk-through.`, body: `I look for the surfaces that are quietly doing nothing.` },
      { name: `The samples.`, body: `You see and touch real paper, tile and plaster samples in your own light, not on a screen.` },
      { name: `One clear price.`, body: `Materials, prep and installation in a single number.` },
      { name: `The install.`, body: `Our trades handle prep, hanging, tiling and finishing. You come home to it done.` },
    ],
  },
  closing: {
    heading: `Start with *the ceiling.*`,
    body: `Tell me a little about your home, and I'll bring samples to your walk-through.`,
    button: `Ask about Surfaces`,
  },
  // The small link under the closing, to the playful line.
  mischiefLink: `Want something playful? *See Mischief & Mortar.*`,
};

// ── Mischief & Mortar page (/mischief) ───────────────────────────────────────
// Every photo here is a rendering for now, so each keeps `concept: true`.
export const mischiefPage = {
  // What Google and link previews show.
  title: `Custom Wallpaper, Doorbells & Door Knockers | Mischief & Mortar`,
  description: `Hand-drawn custom wallpaper, drawer surprises, and one-of-a-kind doorbells and door knockers, made by artisans and installed in California's Gold Country and Sacramento area.`,
  eyebrow: `The playful side`,
  heading: `Mischief *& Mortar*`,
  lede: `Every beautiful home deserves a secret or two. A drawer that makes you smile. A doorbell nobody else has. Wallpaper starring your dog. Made by hand, made for you, and impossible to find anywhere else.`,
  heroPhoto: {
    file: `mischief-hero.jpg`,
    shot: `A powder room papered in a hand-drawn pattern of the owner's own dogs, a brass sconce glowing. Portrait`,
    alt: `A powder room papered in a hand-drawn repeating pattern of terriers, with a round brass mirror and a carved stone sink`,
    concept: true,
  },
  heroButton: `Request a commission`,
  intro: `Quiet luxury is one way not to settle. A home with a sense of humor is the other. Everything here is still handmade by Members of the Alliance and installed by our trades. Playful, *and made to last.*`,
  signature: {
    eyebrow: `Commissioned for you`,
    heading: `Four *signatures*`,
    more: `Tell me more`,
    items: [
      {
        title: `Custom Wallpaper`,
        body: `Your dog, your chickens, your horses, your hometown or the land your house sits on, hand-drawn by an artist and turned into a repeating wallpaper made only for you. Perfect for a powder room, a mudroom, a nursery or a ceiling.`,
        photo: { file: `mischief-wallpaper.jpg`, shot: `A mudroom papered in a hand-drawn repeat of the family's chickens and horses. Portrait`, alt: `A mudroom papered in a hand-drawn pattern of hens and roosters among wildflowers, above an oak bench and garden boots`, concept: true },
      },
      {
        title: `Inside-the-Drawer Surprises`,
        body: `The best rooms keep a secret. I line drawers, cabinet backs, pantry doors and the inside of the coat closet with bold paper, hand-painted patterns or a hidden message, so the people who live there get a small surprise every day.`,
        photo: { file: `mischief-drawer.jpg`, shot: `An open kitchen drawer lined in a bold hand-painted pattern, a small message inside. Portrait`, alt: `An open walnut drawer lined with a bold citrus-and-cherry paper, holding linen napkins and brass flatware`, concept: true },
      },
      {
        title: `Custom Doorbells`,
        body: `The first thing a guest touches deserves better than a plastic button. Hand-cast bronze, carved stone, enamel or ceramic doorbells shaped as a quail, a leaf, a family initial or something only you would think of.`,
        photo: { file: `mischief-doorbell.jpg`, shot: `A hand-cast bronze doorbell shaped as a California quail beside a front door. Portrait`, alt: `A hand-cast bronze doorbell shaped like a California quail, perched on a carved leaf-shaped wood plate on a plaster wall beside a front door`, concept: true },
      },
      {
        title: `Custom Door Knockers`,
        body: `A knocker made for one front door: a cast-bronze hand, a fox, a key, a branch from your own oak tree. A small sculpture that says hello before you do.`,
        photo: { file: `mischief-knocker.jpg`, shot: `A cast-bronze oak-branch door knocker on a heavy wood front door. Portrait`, alt: `A cast-iron door knocker of oak leaves and acorns wrapped into a ring, on a weathered oak door`, concept: true },
      },
    ],
  },
  more: {
    heading: `More *mischief*`,
    items: [
      { title: `Secret Doors`, line: `A bookcase that swings open to a wine room, office or hideout.`, photo: { file: `mischief-secret-door.jpg`, shot: `A bookcase swung open onto a lit wine room`, alt: `A bookcase swung open to reveal a stone-walled wine room`, concept: true } },
      { title: `A Message in the Tile`, line: `A name, a date or an inside joke set into the tile, found only by those who look.`, photo: { file: ``, shot: `A small hand-lettered tile with a date set into a field of plain tile`, alt: `A single hand-lettered tile reading a wedding date, set into a field of plain white tile`, concept: true } },
      { title: `Star Map Ceilings`, line: `A ceiling that glows with the night sky from the day that mattered most.`, photo: { file: `mischief-star-ceiling.jpg`, shot: `A bedroom ceiling painted as a glowing star map at night`, alt: `A bedroom ceiling painted midnight blue with a fine gold star map, above a bed and a sunset window`, concept: true } },
      { title: `The Disco Powder Room`, line: `Mirrored mosaic, bold paper and a tiny chandelier. The party room of the house.`, photo: { file: `mischief-disco-powder.jpg`, shot: `A powder room with mirrored mosaic, bold paper and a tiny chandelier`, alt: `A powder room of mirrored mosaic tile beneath a copper ceiling and a tiny crystal chandelier, with a marble pedestal sink`, concept: true } },
      { title: `Storytelling Stairs`, line: `One painted tile, word or illustration on every step.`, photo: { file: `mischief-stairs.jpg`, shot: `Stair risers each with a different painted illustration`, alt: `Stair risers each hand-painted with a quail, oak leaves, a farmhouse, a running dog, a sunrise and a key`, concept: true } },
      { title: `Glass & Neon`, line: `A handmade sign that says something personal, for the bar, garage or playroom.`, photo: { file: ``, shot: `A handmade neon sign with a family name above a home bar`, alt: `A warm handmade neon script sign glowing above a home bar`, concept: true } },
      { title: `Personal Switch Plates`, line: `A tiny brass key, a little hinged door, a hand-painted bird.`, photo: { file: ``, shot: `A brass switch plate with a tiny hinged door`, alt: `A brass light switch plate with a tiny hinged door and a hand-painted bird`, concept: true } },
      { title: `House Numbers`, line: `Handmade in ceramic, cast iron, enamel or neon.`, photo: { file: `mischief-house-numbers.jpg`, shot: `Handmade ceramic house numbers on a plaster wall`, alt: `Brass house numbers beside a cast-bronze hand knocker on a wood front door`, concept: true } },
      { title: `Living Walls`, line: `Moss and living art for the dark corners.`, photo: { file: ``, shot: `A preserved moss wall in a dim hallway`, alt: `A wall of soft green moss and ferns in a dim hallway`, concept: true } },
      { title: `The Garage, Reconsidered`, line: `Checkerboard floors, brass hooks and a mural of the car you love.`, photo: { file: ``, shot: `A garage with a checkerboard floor, brass hooks and a mural of a vintage car`, alt: `A garage with a black-and-cream checkerboard floor and a painted mural of a vintage truck`, concept: true } },
    ],
  },
  box: {
    heading: `The Mischief *Box.*`,
    body: `A gift box with one handmade surprise, a custom doorbell, knocker, switch plate or house number, ready for a new homeowner. Agents and builders: this is the closing gift people actually remember.`,
    button: `Ask about the Mischief Box`,
    photo: { file: `mischief-box.jpg`, shot: `An open linen gift box holding a hand-cast bronze door knocker on tissue. Wide`, alt: `An open green gift box holding a bronze quail doorbell, a hand-glazed number tile and a card sealed with wax`, concept: true },
  },
  // The commission request form.
  form: {
    eyebrow: `Commission request`,
    heading: `Tell me *the story.*`,
    intro: `The four signatures are made to order. Tell me what you have in mind, and send a few photos if you like. I read every request myself.`,
    fields: {
      name: { label: `Full name`, error: `Please add your full name.` },
      email: { label: `Email`, error: `Please add your email, so I can reach you.` },
      phone: { label: `Phone` },
      wants: { label: `What would you like?`, note: `pick any`, error: `Please pick at least one.` },
      story: { label: `Tell me the story`, placeholder: `Who or what should it feature? Pets, places, initials, a favorite tree...` },
      photos: {
        label: `Inspiration photos`,
        hint: `Up to 5 images, each under 10MB. Pets, places, your front door.`,
        button: `Add photos`,
        remove: `Remove`,
        tooMany: `That's more than 5 photos. I've kept the first 5.`,
        tooBig: `That photo is over 10MB, so I've left it out:`,
        notImage: `That file isn't a photo, so I've left it out:`,
        uploading: `Sending photo`,
        failed: `A photo didn't send. Please try again, or remove it and send the rest.`,
      },
      gift: { label: `Is this a gift?` },
      timing: { label: `Timing`, note: `pick one`, error: `Please choose a timing.` },
    },
    submit: `Send my request`,
    sending: `Sending…`,
    successHeading: `Got *it.*`,
    success: `I love a good story. I'll be in touch within a few days with ideas and a maker in mind.`,
  },
  closing: {
    heading: `Every home I touch gets one secret. *Want yours?*`,
  },
};

// ── Moss & Murmur page (/outdoors) ───────────────────────────────────────────
// Every photo here is a rendering for now, so each keeps `concept: true`.
export const outdoorsPage = {
  // What Google and link previews show.
  title: `Garden Water Features, Secret Gardens & Outdoor Lighting | Moss & Murmur`,
  description: `Hand-carved water features, hidden garden music, secret garden spaces and handmade outdoor lighting, fire-wise and water-wise, for homes in California's Gold Country and Sacramento area.`,
  eyebrow: `The outdoor side`,
  heading: `Moss *& Murmur*`,
  lede: `The best outdoor spaces aren't seen all at once. They're discovered: the sound of water around a corner, a gate in the hedge, a chime tuned to a chord you chose. I bring that sense of discovery to the land around your home.`,
  heroPhoto: {
    file: `outdoors-hero.jpg`,
    shot: `A garden path at dusk curving past ferns and oaks toward a glowing lantern and a gate in the hedge. Very wide`,
    alt: `A long reflecting pool at dusk holding the sky and a lone valley oak, golden foothills beyond`,
    concept: true,
  },
  intro: `Every piece is made by Members of the Alliance (stone carvers, metalworkers, ceramicists and woodworkers) and installed by licensed landscape and electrical partners. All of it is designed for the Gold Country and the Sierra foothills: fire-wise, water-wise and rooted in the land.`,
  senses: {
    eyebrow: `The five senses`,
    examplesLabel: `For example`,
    items: [
      {
        sense: `Sound`,
        title: `Water`,
        body: `Water you hear before you see it. Hand-carved stone basins, narrow rills that follow a path, a copper rain chain singing into a granite bowl, a still pool that holds the sky.`,
        examples: [`Carved stone basin`, `Stone rill`, `Copper rain chain`, `Reflecting pool`],
        photo: { file: `outdoors-water.jpg`, shot: `A copper rain chain spilling into a carved granite bowl among ferns. Wide`, alt: `A narrow stone rill running beside a gravel path through lavender and oaks toward the foothills`, concept: true },
        detail: { file: `outdoors-water-detail.jpg`, shot: `Close-up`, alt: `A copper rain chain spilling into a carved stone bowl among ferns beside a plaster wall`, concept: true },
      },
      {
        sense: `Sound`,
        title: `Music`,
        body: `Your own music, hidden in the garden. Speakers disguised as stone and planters, and wind chimes made by hand and tuned to a chord you choose.`,
        examples: [`Hidden garden speakers`, `Hand-tuned chimes`, `The whisper bench`],
        photo: { file: `outdoors-music.jpg`, shot: `Handmade bronze wind chimes hanging from an oak branch above a stone bench. Wide`, alt: `A curved carved-stone whisper bench among lavender, overlooking a lake in the foothills at sunset`, concept: true },
        detail: { file: `outdoors-music-detail.jpg`, shot: `Close-up`, alt: `Handmade bronze wind chimes hanging from an oak branch above a weathered garden bench`, concept: true },
      },
      {
        sense: `Sight`,
        title: `Secret Gardens`,
        body: `A gate in the hedge. A round moon gate framing the view. A clipped green room with one chair and one lantern. Spaces that make you feel like you found something.`,
        examples: [`Hidden gate`, `Moon gate`, `Hedge room`, `Reading nook in the slope`],
        photo: { file: `outdoors-secret-garden.jpg`, shot: `A round stone moon gate in a hedge framing a view of golden foothills. Wide`, alt: `A clipped hedge room with one lounge chair, a stack of books and a stone side table`, concept: true },
        detail: { file: `outdoors-secret-detail.jpg`, shot: `Close-up`, alt: `An arched wooden door set into a tall clipped hedge, standing open onto a hidden garden`, concept: true },
      },
      {
        sense: `Touch`,
        title: `Outdoor Rooms`,
        body: `Handmade tile tables, a sculptural fire bowl, an outdoor shower wrapped in stone, copper and ferns.`,
        examples: [`Tile dining table`, `Forged fire bowl`, `Garden shower`],
        photo: { file: `outdoors-rooms.jpg`, shot: `An outdoor dining table of handmade tile beside a forged iron fire bowl at dusk. Wide`, alt: `A hammered copper fire bowl glowing in a circle of stone seating above the foothills at sunset`, concept: true },
        detail: { file: `outdoors-rooms-detail.jpg`, shot: `Close-up`, alt: `An outdoor shower in a plaster wall with a copper rain head, ferns and a teak floor`, concept: true },
      },
      {
        sense: `Light`,
        title: `After Dark`,
        body: `Handmade lanterns, hammered-copper path lights, and one oak lit like the centerpiece it is. Gardens should be as beautiful at nine at night as at nine in the morning.`,
        examples: [`Handmade lanterns`, `Copper path lights`, `Oak uplighting`, `Firefly hedge lights`],
        photo: { file: `outdoors-after-dark.jpg`, shot: `A great valley oak lit from below at night, hammered-copper path lights along a stone path. Wide`, alt: `A great valley oak lit from below under a starry sky, a stone wall at its foot`, concept: true },
        detail: { file: `outdoors-after-dark-detail.jpg`, shot: `Close-up`, alt: `A gravel path lit by low copper lights through lavender toward a glowing house at dusk`, concept: true },
      },
    ],
  },
  mischief: {
    line: `A stone fox peeking from the ferns. A tiny door at the base of a tree. A message carved into a stepping stone.`,
    eyebrow: `A little mischief outside`,
    photos: [
      { file: `outdoors-stone-fox.jpg`, shot: `A stone fox in the ferns`, alt: `A small carved stone fox peeking out from ferns beside a mossy stone wall`, concept: true },
      { file: `outdoors-tiny-door.jpg`, shot: `A tiny door in a tree`, alt: `A tiny arched wooden door set into the base of an old oak, clover around it`, concept: true },
    ],
    link: `See Mischief & Mortar`,
  },
  begin: {
    heading: `Three ways *to begin*`,
    items: [
      { name: `One Moment`, line: `A single feature: a carved basin, a tuned chime, a lantern-lit path.` },
      { name: `The Secret Room`, line: `One hidden garden space, fully finished.` },
      { name: `The Whole Grounds`, line: `A complete outdoor plan for the land around your home. Quoted per project.` },
    ],
  },
  wise: {
    heading: `Fire-wise and *water-wise*`,
    body: `Here in the foothills, beautiful has to be smart too. I design near the house with stone, metal, gravel and fire-resistant plants that respect California's defensible-space rules, and every water feature recirculates, using very little water. You get a garden that's lovely, safe and easy to live with.`,
  },
  who: `Every outdoor project is installed by licensed landscape and electrical contractors I trust, and every handmade piece carries a card naming its maker.`,
  closing: {
    heading: `Let's find the secret *in your garden.*`,
  },
};

// ── How it works page ────────────────────────────────────────────────────────
export const howPage = {
  title: `How it works`,
  description: `From a complimentary walk-through to installation by licensed installers, in five steps, with one clear price.`,
  eyebrow: `Five steps`,
  heading: `How it *works*`,
  lede: `From the first walk-through to the last screw, I handle every step. You walk in, and it's finished.`,
  steps: [
    {
      name: `The walk-through`,
      meta: `Complimentary · room by room · no obligation`,
      body: `I visit your home and look for the builder-grade details hiding in plain sight. We talk about how you live and how you want the house to feel.`,
    },
    {
      name: `The edit`,
      meta: `Pieces · makers · samples or drawings`,
      body: `A short, considered set of pieces and makers, with samples or drawings. When nothing existing is right, I commission something new.`,
    },
    {
      name: `One clear price`,
      meta: `Pieces · delivery · installation`,
      body: `Pieces, delivery and installation together, in one number. No open-ended bill.`,
    },
    {
      name: `The install`,
      meta: `Licensed installers · I oversee it`,
      body: `Licensed installers put every piece in place, and I oversee it. You come home to it finished.`,
    },
    {
      name: `The story card`,
      meta: `Every piece names its maker`,
      body: `Every piece arrives with a card naming its maker and how it was made, so you can tell its story to your guests.`,
    },
  ],
  // The sample card shown under step 5.
  storyCard: {
    label: `Story card · sample layout`,
    piece: `[Piece name]`,
    maker: `Made by [Maker name], [Town]`,
    method: `[Material and method, in two short lines.]`,
    member: `Member of the Alliance`,
  },
  closing: {
    heading: `It starts with a *walk-through.*`,
    body: `I'm taking 25 homes in our first season.`,
  },
};

// ── Makers page ──────────────────────────────────────────────────────────────
export const makersPage = {
  title: `Makers`,
  description: `Members of the Alliance are independent artisans: smiths, woodworkers, potters, stone carvers, plasterers and lighting makers. Apply to join.`,
  eyebrow: `For makers`,
  heading: `Members of *the Alliance.*`,
  lede: `Members of the Alliance are independent artisans: smiths, woodworkers, potters, stone carvers, plasterers and lighting makers. Many work alone or in small shops, often a few miles from the homes that need them. I bring their work into homes whose owners chose handmade on purpose.`,
  applyLink: `Apply to join`,
  offer: {
    heading: `What membership *means*`,
    items: [
      `Commissions from clients who chose handmade on purpose`,
      `Your name on every piece`,
      `No chasing clients or managing installs`,
      `Pricing that respects the time the work takes`,
    ],
  },
  form: {
    heading: `Apply *to join*`,
    intro: `Tell me a little about your work. I read every application myself.`,
    fields: {
      name: { label: `Your name`, error: `Please add your name.` },
      email: { label: `Email`, error: `Please add your email.` },
      craft: {
        label: `Your craft`,
        hint: `Tap one below, or type your own.`,
        error: `Please tell me your craft.`,
        // Tapping one of these fills in the box.
        suggestions: [
          `Blacksmithing and metalwork`,
          `Woodworking`,
          `Ceramics and pottery`,
          `Stone carving`,
          `Lighting`,
          `Wallpaper or surface design`,
          `Tile and ceramics`,
          `Mural and decorative painting`,
          `Plaster and limewash`,
          `Illustration and pattern design`,
          `Metal casting and bronze`,
          `Enamel and small sculpture`,
          `Glass and neon`,
          `Decorative painting`,
          `Garden and landscape design`,
          `Outdoor lighting`,
          `Sound and chime making`,
        ],
      },
      location: { label: `Where you work`, hint: `Town or region is fine.`, error: `Please tell me where you work.` },
      website: { label: `Website or Instagram` },
      note: { label: `A short note`, hint: `What you make, and what you'd love to make for a home like this.` },
    },
    submit: `Send my application`,
    sending: `Sending…`,
    successHeading: `Thank *you.*`,
    success: `Your application is in. I look at every one myself, and I'll be in touch.`,
  },
};

// ── Founding Client List (the waitlist) ──────────────────────────────────────
export const waitlistPage = {
  title: `The Founding Client List`,
  description: `I'm taking 25 homes in the first season. Join the Founding Client List for a complimentary walk-through and first pick of the founding collection.`,
  eyebrow: `First season · 25 homes`,
  heading: `The Founding *Client List*`,
  lede: `I'm taking 25 homes in our first season. Join the list and I'll reach out personally to schedule your complimentary walk-through.`,
  perksHeading: `Founding clients get`,
  perks: [
    `A complimentary walk-through`,
    `First pick of the founding collection pieces`,
    `A maker card for every piece`,
    `Founding client pricing on your first project`,
  ],
  form: {
    fields: {
      name: { label: `Full name`, error: `Please add your full name.` },
      email: { label: `Email`, error: `Please add your email, so I can reach you.` },
      phone: { label: `Phone` },
      city: { label: `City or area`, error: `Please add your city or area.` },
      homeType: { label: `Type of home`, note: `pick one`, error: `Please choose a type of home.` },
      bothers: { label: `What bothers you most?`, note: `optional, pick any` },
      surfaces: { label: `Any surfaces you're curious about?`, note: `optional, pick any` },
      outdoors: { label: `Anything outdoors you're dreaming about?`, note: `optional, pick any` },
      timing: { label: `Timing`, note: `pick one`, error: `Please choose a timing.` },
      heardFrom: { label: `How did you hear about us?` },
    },
    // Shown when someone arrives from "Ask about Surfaces".
    surfacesNote: `I've marked wallpaper and ceilings for you below. Change anything you like.`,
    // Shown when someone arrives from the Mischief & Mortar page.
    mischiefNote: `I've marked Mischief & Mortar for you below. Change anything you like.`,
    outdoorsNote: `I've marked outdoor spaces for you below. Tell me what you're dreaming about.`,
    mischiefBoxNote: `You're asking about the Mischief Box. I've marked Mischief & Mortar below, and I'll bring box ideas to our first conversation.`,
    submit: `Join the list`,
    sending: `Sending…`,
    successHeading: `You're on *the list.*`,
    success: `I read every signup myself, and I'll be in touch within a few days to set up your walk-through.

In the meantime, take a look around your home. You may start noticing things.`,
    backLink: `Back to the home page`,
  },
  privacy: `I'll only use your details to contact you about A Particular Alliance. I never sell or share them.`,
};

// Shared bits of the two forms.
export const formText = {
  requiredNote: `Fields marked * are required.`,
  errorSummary: `Please fill in the fields marked below.`,
  optional: `optional`,
  choose: `Choose one`,
};

// The answer choices. Changing these also needs a matching database change,
// so ask Claude Code before editing them.
export const choices = {
  homeType: [`New construction`, `Existing home`, `Second home`, `Short-term rental`],
  bothers: [`Lighting`, `Hardware and switch plates`, `Vents and registers`, `Color and texture`, `A whole room`, `Wallpaper, tile or ceilings`, `Something playful (Mischief & Mortar)`, `Outdoor spaces (Moss & Murmur)`],
  surfaces: [`Ceilings`, `Powder room`, `Entry`, `Stairs`, `Closet`, `Bookshelves`, `Laundry`, `Fireplace`, `Not sure yet`],
  timing: [`This season`, `In the next 6 months`, `Just curious`],
  outdoors: [`Water feature`, `Music`, `Secret garden`, `Outdoor room`, `Lighting`, `Not sure yet`],
  heardFrom: [`Realtor or friend`, `Instagram`, `Facebook`, `Other`],
  // The commission request form (Mischief & Mortar).
  wants: [`Custom wallpaper`, `Drawer and cabinet surprises`, `Doorbell`, `Door knocker`, `Mischief Box`, `Water feature`, `Garden chime`, `Lanterns`, `Garden sculpture`, `Something else`],
  gift: [`Yes`, `No`],
  commissionTiming: [`Before the holidays`, `In the next 3 months`, `No rush`],
} as const;

// ── Messages shown when something goes wrong ─────────────────────────────────
export const errors = {
  required: `Please fill in the fields marked below.`,
  email: `That email address doesn't look quite right.`,
  network: `Something went wrong sending that. Please try again in a moment.`,
};

export const notFound = {
  heading: `This page isn't *here.*`,
  body: `It may have moved, or the link may be off by a letter.`,
  link: `Back to the home page`,
};
