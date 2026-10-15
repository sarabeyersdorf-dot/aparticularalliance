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
export const photos = {
  hero: {
    file: ``,
    shot: `A handmade brass door lever on a plaster wall, soft morning light`,
    alt: `A hand-finished brass door lever against a warm plaster wall`,
  },
  before: {
    file: ``,
    shot: `A plastic switch plate, straight on`,
    alt: `A plain plastic light switch plate`,
  },
  after: {
    file: ``,
    shot: `A hand-carved walnut switch plate, straight on`,
    alt: `A hand-carved walnut switch plate`,
  },
  alliance: {
    file: ``,
    shot: `A maker's hands at a workbench, wood shavings and hand tools, warm side light`,
    alt: `A maker's hands at a workbench among wood shavings and hand tools`,
  },
  walkthrough: {
    file: ``,
    shot: `Sara in a client's entry, notebook in hand, looking at a door lever`,
    alt: `Sara Cooper in a client's entry with a notebook, looking closely at a door lever`,
  },
  makers: {
    file: ``,
    shot: `A potter at the wheel in a small foothill studio, clay on the hands, face out of frame`,
    alt: `A potter's clay-covered hands at the wheel in a small studio`,
  },
};

// ── The five collections ─────────────────────────────────────────────────────
export const collections = [
  {
    slug: `gilt-and-grain`,
    name: `Gilt & Grain`,
    mood: `The touchpoints.`,
    description: `Warm brass and hand-finished wood: cabinet pulls, door levers, switch plates, house numbers.`,
    photo: {
      file: ``,
      shot: `Brass cabinet pulls and a door lever on hand-finished oak, close and warm`,
      alt: `Brass cabinet pulls and a door lever on hand-finished oak`,
    },
  },
  {
    slug: `ore-and-oak`,
    name: `Ore & Oak`,
    mood: `Gold Country, made by hand.`,
    description: `Forged iron, reclaimed oak, native stone from Sierra foothill makers.`,
    photo: {
      file: ``,
      shot: `A forged iron fireplace set against native foothill stone and reclaimed oak`,
      alt: `A forged iron fireplace set against native stone and reclaimed oak`,
    },
  },
  {
    slug: `brass-and-burl`,
    name: `Brass & Burl`,
    mood: `The statement.`,
    description: `Sculptural lighting, rare figured woods, often commissioned from scratch.`,
    photo: {
      file: ``,
      shot: `A sculptural brass chandelier above a figured burl-wood table, evening light`,
      alt: `A sculptural brass chandelier above a burl-wood table in evening light`,
    },
  },
  {
    slug: `gilt-and-loam`,
    name: `Gilt & Loam`,
    mood: `Earth, refined.`,
    description: `Hand-thrown ceramics, plaster finishes, textured walls, pottery lamps.`,
    photo: {
      file: ``,
      shot: `Hand-thrown ceramic vessels and a pottery lamp in front of a textured plaster wall`,
      alt: `Hand-thrown ceramic vessels and a pottery lamp against a textured plaster wall`,
    },
  },
  {
    slug: `marble-and-moss`,
    name: `Marble & Moss`,
    mood: `Stone and living things.`,
    description: `Carved stone vessels, bath and kitchen accents, planters.`,
    photo: {
      file: ``,
      shot: `A carved stone planter with ferns on a kitchen windowsill, cool morning light`,
      alt: `A carved stone planter holding ferns on a kitchen windowsill`,
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
    eyebrow: `Five collections`,
    heading: `Each one a room *of its own.*`,
    swipeHint: `Swipe to see all five`,
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
  description: `Five collections of handmade, one-of-a-kind pieces for the home: Gilt & Grain, Ore & Oak, Brass & Burl, Gilt & Loam and Marble & Moss.`,
  eyebrow: `Five collections`,
  heading: `Choose by *feeling.*`,
  lede: `Each collection is a mood, so you can choose by feeling instead of by catalog number.`,
  numberLabel: `Collection`,
  closing: {
    heading: `Anything but *beige.*`,
    body: `Founding clients get first pick of the founding collection.`,
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
        hint: `For example: blacksmith, ceramicist, woodturner, plasterer.`,
        error: `Please tell me your craft.`,
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
      timing: { label: `Timing`, note: `pick one`, error: `Please choose a timing.` },
      heardFrom: { label: `How did you hear about us?` },
    },
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
  bothers: [`Lighting`, `Hardware and switch plates`, `Vents and registers`, `Color and texture`, `A whole room`],
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
