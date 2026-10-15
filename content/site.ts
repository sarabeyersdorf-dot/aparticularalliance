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
    alt: `A plaster archway opening onto a brass pendant above a burl wood console, with a window onto oak-covered hills at sunset`,
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

// ── The six collections ──────────────────────────────────────────────────────
export const collections = [
  {
    slug: `gilt-and-grain`,
    name: `Gilt & Grain`,
    mood: `The touchpoints.`,
    description: `Warm brass and hand-finished wood: cabinet pulls, door levers, switch plates, house numbers.`,
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
    description: `Forged iron, reclaimed oak, native stone from Sierra foothill makers.`,
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
    description: `Sculptural lighting, rare figured woods, often commissioned from scratch.`,
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
    description: `Hand-thrown ceramics, plaster finishes, textured walls, pottery lamps.`,
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
    description: `Carved stone vessels, bath and kitchen accents, planters.`,
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
    eyebrow: `Six collections`,
    heading: `Each one a room *of its own.*`,
    swipeHint: `Swipe to see all six`,
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
  began: {
    heading: `Where it *began*`,
    body: `I've walked through hundreds of homes as a real estate broker, some of them well over a million dollars. Again and again, I noticed the same thing. The square footage was there. The view was there. But the details told a different story: the same plastic switch plates, the same stamped vent covers, the same light fixtures you could find in any new subdivision.

Nobody did anything wrong. Builders choose what is fast, and most buyers never get the chance to choose otherwise. They move in, they get busy, and the house never quite becomes theirs.

At the same time, I kept meeting extraordinary makers, often just a few miles from the homes that needed them, working at a level most homeowners never see. The two worlds almost never met. A Particular Alliance is where they meet.`,
  },
  beliefs: {
    heading: `What we *believe*`,
    items: [
      `The small things are the big things.`,
      `Your taste was never the problem.`,
      `Makers deserve their name on the work.`,
      `One of a kind should not mean one more project to manage.`,
    ],
  },
  tagline: `Our hand. *Your name.*`,
  makersLink: `Members of the Alliance`,
};

// ── Collections page ─────────────────────────────────────────────────────────
export const collectionsPage = {
  title: `Collections`,
  description: `Six collections of handmade, one-of-a-kind pieces for the home: Gilt & Grain, Ore & Oak, Brass & Burl, Gilt & Loam, Marble & Moss and Paper & Plaster.`,
  eyebrow: `Six collections`,
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
    alt: `A sitting room ceiling painted black with fine gold linework, a glass chandelier hanging at its center`,
    concept: true,
  },
  intro: `Builder-grade homes are finished in flat paint and good intentions. Surfaces changes that, one wall, ceiling or stair at a time. Every paper, tile and finish comes from a maker or artist I've chosen, and every installation is done by trades I trust.`,
  offer: {
    heading: `What *we do*`,
    cards: [
      {
        title: `The Fifth Wall`,
        line: `Wallpapered and painted ceilings that change how a room feels the moment you walk in.`,
        photo: { file: `surfaces-fifth-wall.jpg`, shot: `A dining room with a patterned wallpapered ceiling`, alt: `A sunlit garden room with botanical wallpaper running up the walls and across the ceiling`, concept: true },
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
        photo: { file: `surfaces-murals.jpg`, shot: `A hand-painted landscape mural across one wall of a sitting room`, alt: `A double-height living room wall painted with an oversized botanical leaf mural`, concept: true },
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
      body: `Every piece arrives with a card naming its maker and how it was made, so the story stays with the piece.`,
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
      timing: { label: `Timing`, note: `pick one`, error: `Please choose a timing.` },
      heardFrom: { label: `How did you hear about us?` },
    },
    // Shown when someone arrives from "Ask about Surfaces".
    surfacesNote: `I've marked wallpaper and ceilings for you below. Change anything you like.`,
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
  bothers: [`Lighting`, `Hardware and switch plates`, `Vents and registers`, `Color and texture`, `A whole room`, `Wallpaper, tile or ceilings`],
  surfaces: [`Ceilings`, `Powder room`, `Entry`, `Stairs`, `Closet`, `Bookshelves`, `Laundry`, `Fireplace`, `Not sure yet`],
  timing: [`This season`, `In the next 6 months`, `Just curious`],
  heardFrom: [`Realtor or friend`, `Instagram`, `Facebook`, `Other`],
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
