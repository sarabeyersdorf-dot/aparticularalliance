/*
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL THE WORDS ON THE WEBSITE LIVE IN THIS ONE FILE.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  How to edit safely:
 *  • Change only the words BETWEEN the backticks  `like this`.
 *    Apostrophes and quote marks are fine inside them: `I'm taking 25 homes.`
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
  // Used for Google results and link previews when no page-specific one is set.
  description: `A Particular Alliance creates homes for people who won't settle for builder grade. Handmade, one-of-a-kind pieces from independent makers, sourced, priced, delivered and installed as one premium package.`,
  promise: `A Particular Alliance creates homes for people who won't settle for builder grade.`,
  url: `https://aparticularalliance.com`,
  // Leave empty (``) to hide. Fill in to show them in the footer.
  contactEmail: ``,
  instagram: ``, // e.g. `https://instagram.com/aparticularalliance`
  footerTagline: `Never settle for builder grade.`,
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
  problem: {
    file: ``,
    shot: `Close-up of a plain plastic switch plate in a beautiful room`,
    alt: `A plain plastic light switch plate on a white wall`,
  },
  alliance: {
    file: ``,
    shot: `A maker's hands at work: forging, turning or throwing`,
    alt: `An artisan's hands shaping a piece at the workbench`,
  },
  story: {
    file: ``,
    shot: `You walking through a home, looking closely at a detail`,
    alt: `Sara Cooper looking closely at a detail in a client's home`,
  },
  walkthrough: {
    file: ``,
    shot: `A walk-through in progress: notebook, samples on a kitchen island`,
    alt: `Material samples and a notebook laid out on a kitchen island`,
  },
  makers: {
    file: ``,
    shot: `A maker's workshop: tools on the wall, a piece half finished`,
    alt: `A maker's workshop with tools on the wall and a piece in progress`,
  },
  waitlist: {
    file: ``,
    shot: `A finished detail in a lived-in home: a ceramic lamp lit at dusk`,
    alt: `A hand-thrown ceramic lamp glowing in a lived-in room at dusk`,
  },
  storyCard: {
    file: ``,
    shot: `The maker story card beside a finished piece`,
    alt: `A printed card naming the maker, resting beside a finished piece`,
  },
};

// ── The five collections ─────────────────────────────────────────────────────
export const collections = [
  {
    slug: `gilt-and-grain`,
    name: `Gilt & Grain`,
    mood: `The touchpoints.`,
    description: `Warm brass and hand-finished wood for the things your hands find every day: cabinet pulls, door levers, switch plates and house numbers. Small pieces, felt a hundred times a day.`,
    pieces: [`Cabinet pulls`, `Door levers`, `Switch plates`, `House numbers`],
    photo: {
      file: ``,
      shot: `Brass cabinet pulls on a hand-finished wood drawer front`,
      alt: `Hand-finished brass pulls on a warm wood drawer front`,
    },
  },
  {
    slug: `ore-and-oak`,
    name: `Ore & Oak`,
    mood: `Gold Country, made by hand.`,
    description: `Forged iron, reclaimed oak and native stone from makers in the Sierra foothills. Heavy, honest materials with a history, shaped by people who live where they come from.`,
    pieces: [`Forged iron`, `Reclaimed oak`, `Native stone`],
    photo: {
      file: ``,
      shot: `Forged iron hardware on a reclaimed oak door`,
      alt: `Hand-forged iron hardware on a weathered reclaimed oak door`,
    },
  },
  {
    slug: `brass-and-burl`,
    name: `Brass & Burl`,
    mood: `The statement.`,
    description: `Sculptural lighting and rare figured woods, often commissioned from scratch. The piece people ask about first, made once, for one room.`,
    pieces: [`Sculptural lighting`, `Figured woods`, `Commissioned pieces`],
    photo: {
      file: ``,
      shot: `A sculptural light fixture above a burl wood table`,
      alt: `A sculptural brass light fixture hanging above a figured burl wood table`,
    },
  },
  {
    slug: `gilt-and-loam`,
    name: `Gilt & Loam`,
    mood: `Earth, refined.`,
    description: `Hand-thrown ceramics, plaster finishes, textured walls and pottery lamps. Color and texture that turn a flat white room into somewhere you want to stay.`,
    pieces: [`Hand-thrown ceramics`, `Plaster finishes`, `Textured walls`, `Pottery lamps`],
    photo: {
      file: ``,
      shot: `A pottery lamp against a hand-troweled plaster wall`,
      alt: `A hand-thrown pottery lamp in front of a textured plaster wall`,
    },
  },
  {
    slug: `marble-and-moss`,
    name: `Marble & Moss`,
    mood: `Stone and living things.`,
    description: `Carved stone vessels, bath and kitchen accents, and planters. Quiet, weighty pieces that bring the outside in.`,
    pieces: [`Carved stone vessels`, `Bath and kitchen accents`, `Planters`],
    photo: {
      file: ``,
      shot: `A carved stone planter with moss or a fern on a windowsill`,
      alt: `A carved stone planter holding a fern on a sunlit windowsill`,
    },
  },
];

// ── Home page ────────────────────────────────────────────────────────────────
export const home = {
  title: `Never settle for builder grade`,
  hero: {
    eyebrow: `The eye you've always wanted.`,
    heading: `Homes for people who won't settle for builder grade.`,
    body: `I pair homeowners with independent makers, then source, price, deliver and install one-of-a-kind pieces as a single, finished package.`,
  },
  problem: {
    eyebrow: `The problem`,
    heading: `Beautiful house. Builder-grade details.`,
    body: `Walk through almost any new home, even one with a seven-figure price, and you'll find the same things: plastic switch plates, stamped vent covers, a light fixture that came in a box of twelve.

Nobody chose them for you. The builder chose them for everyone.

They're also the things you touch every day. The door lever. The cabinet pull. The plate around the light switch. When they're made by hand, a house starts to feel like it was made for you.`,
  },
  alliance: {
    eyebrow: `The Alliance`,
    heading: `An alliance of three.`,
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
    link: `Read the story`,
  },
  collections: {
    eyebrow: `The collections`,
    heading: `Five collections, all handmade.`,
    intro: `Each one starts from a material and a mood. Many pieces are commissioned for a single home.`,
    link: `See all five collections`,
  },
  closing: {
    heading: `Anything but beige.`,
    body: `I'm taking 25 homes in our first season. Founding clients get a complimentary walk-through and first pick of the founding collection.`,
  },
};

// ── The Alliance page ────────────────────────────────────────────────────────
// TODO for Sara: "Where it began" is a first draft. Make it your own story.
export const alliancePage = {
  title: `The Alliance`,
  description: `The story behind A Particular Alliance: a client with standards, a maker with craft, and a curator who handles everything in between.`,
  heading: `The Alliance.`,
  lede: `Three parties, one standard.`,
  began: {
    heading: `Where it began`,
    body: `I've walked through a great many beautiful homes. As a real estate broker, it's part of the job. And again and again I noticed the same thing: the bones were extraordinary, and the details were builder grade.

The plastic switch plate in a room with twelve-foot ceilings. The stamped vent cover under a window that frames the whole valley. Nobody had chosen those things. They had simply arrived with the house.

Meanwhile, a few miles away, there were people forging iron, turning wood and throwing clay at a level most homeowners never get to see. The two never met. A Particular Alliance is how they meet.`,
  },
  beliefs: {
    heading: `What we believe`,
    items: [
      {
        title: `The small things are the big things.`,
        body: `You touch a door lever thousands of times. It should be worth touching.`,
      },
      {
        title: `Your taste was never the problem.`,
        body: `The builder chose those details, not you. My job is to help you choose your own.`,
      },
      {
        title: `Makers deserve their name on the work.`,
        body: `Every piece comes with a card that names the person who made it.`,
      },
      {
        title: `One of a kind should not mean one more project to manage.`,
        body: `You shouldn't have to coordinate five tradespeople to get it right. I do that.`,
      },
    ],
  },
  how: {
    heading: `How it works`,
    body: `It starts with a complimentary walk-through of your home and ends with every piece installed and its maker named. In between, I handle everything, and you get one clear price.`,
    link: `See the five steps`,
  },
  tagline: `Our hand. Your name.`,
};

// ── Collections page ─────────────────────────────────────────────────────────
export const collectionsPage = {
  title: `Collections`,
  description: `Five collections of handmade, one-of-a-kind pieces for the home: Gilt & Grain, Ore & Oak, Brass & Burl, Gilt & Loam and Marble & Moss.`,
  heading: `The collections.`,
  lede: `Five collections, each starting from a material and a mood. Every piece is handmade by a Member of the Alliance, and many are commissioned for a single home.`,
  closing: {
    heading: `See them in your own home.`,
    body: `Founding clients get first pick of the founding collection pieces.`,
  },
};

// ── How it works page ────────────────────────────────────────────────────────
export const howPage = {
  title: `How it works`,
  description: `From a complimentary walk-through to installation by licensed installers, in five steps, with one clear price.`,
  heading: `How it works.`,
  lede: `Five steps from builder grade to one of a kind. You make the choices; I handle the rest.`,
  steps: [
    {
      name: `The walk-through`,
      body: `I come to your home and walk it with you, room by room. We talk about how you live and what you notice. It's complimentary, and there's no obligation.`,
    },
    {
      name: `The edit`,
      body: `I come back with a short, considered edit: the pieces I'd change, the makers I'd ask, and samples, drawings or photos so you can see it before anything is made.`,
    },
    {
      name: `One clear price`,
      body: `You get one price for the whole project, covering the pieces, delivery and installation. No line items to decode, no stack of invoices.`,
    },
    {
      name: `The install`,
      body: `Licensed installers put every piece in place, and I oversee it from start to finish. You don't have to manage anyone.`,
    },
    {
      name: `The story card`,
      body: `Every piece arrives with a card naming the maker who made it, the materials and the story behind it. It stays with the home, an heirloom from the day it's installed.`,
    },
  ],
  closing: {
    heading: `It starts with a walk-through.`,
    body: `Founding clients get theirs complimentary.`,
  },
};

// ── Makers page ──────────────────────────────────────────────────────────────
export const makersPage = {
  title: `Makers`,
  description: `Members of the Alliance are independent artisans: smiths, woodworkers, potters, stone carvers and lighting makers. Apply to join.`,
  heading: `Members of the Alliance.`,
  lede: `The makers in the Alliance are independent artisans: smiths, woodworkers, potters, stone carvers, plasterers and lighting makers. I bring them commissions in homes that will value the work, and I take care of everything around it.`,
  offer: {
    heading: `What membership means`,
    items: [
      `Commissions from clients who chose handmade on purpose.`,
      `Your name on every piece, on a card that stays with the home.`,
      `No chasing clients, coordinating installs or managing deliveries. I handle that.`,
      `Pricing that respects the time the work takes.`,
    ],
  },
  form: {
    heading: `Apply to join`,
    intro: `Tell me a little about your work. I read every application myself.`,
    fields: {
      name: `Your name`,
      email: `Email`,
      craft: `Your craft`,
      craftHint: `For example: blacksmith, woodturner, ceramicist`,
      location: `Where you work`,
      website: `Website or Instagram`,
      note: `A short note`,
      noteHint: `What you make, and what you'd love to make for a home like this.`,
    },
    submit: `Send my application`,
    sending: `Sending…`,
    successHeading: `Thank you.`,
    success: `Your application is in. I look at every one myself, and I'll be in touch.`,
  },
};

// ── Founding Client List (the waitlist) ──────────────────────────────────────
export const waitlistPage = {
  title: `The Founding Client List`,
  description: `I'm taking 25 homes in the first season. Join the Founding Client List for a complimentary walk-through and first pick of the founding collection.`,
  heading: `The Founding Client List`,
  lede: `I'm taking 25 homes in our first season. Join the list and I'll reach out personally to schedule your complimentary walk-through.`,
  perksHeading: `Founding clients get`,
  perks: [
    `A complimentary walk-through`,
    `First pick of the founding collection pieces`,
    `A maker card for every piece`,
    `Founding client pricing on their first project`,
  ],
  form: {
    fields: {
      name: `Full name`,
      email: `Email`,
      phone: `Phone`,
      city: `City or area`,
      homeType: `Type of home`,
      bothers: `What bothers you most?`,
      bothersHint: `Pick any that apply.`,
      timing: `Timing`,
      heardFrom: `How did you hear about us?`,
    },
    optional: `optional`,
    choose: `Choose one`,
    submit: `Join the list`,
    sending: `Sending…`,
    successHeading: `You're on the list.`,
    success: `I read every signup myself, and I'll be in touch within a few days to set up your walk-through. In the meantime, take a look around your home. You may start noticing things.`,
  },
  privacy: `I'll only use your details to contact you about A Particular Alliance. I never sell or share them.`,
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
  required: `Please fill in the fields marked as required.`,
  email: `That email address doesn't look quite right.`,
  network: `Something went wrong sending that. Please try again in a moment.`,
};

export const notFound = {
  heading: `This page isn't here.`,
  body: `It may have moved, or the link may be off by a letter.`,
  link: `Back to the home page`,
};
