// Fitzroy Pirate Portraits — Roster Data
// ─────────────────────────────────────────────────────────────────
// File naming convention for assets:
//   images  → ./assets/images/{slug}.jpg
//   videos  → ./assets/videos/{slug}.mp4
// All slugs are lowercase first name (see slug field).
// ─────────────────────────────────────────────────────────────────

const roster = [

  // ── SPOTLIGHT ────────────────────────────────────────────────
  {
    department: null,
    spotlight: true,
    eyebrow: "Her Royal Majesty",
    members: [
      { name: "Floortje", role: "Sovereign of the Seven Tides", slug: "floortje" },
    ],
  },

  // ── MANAGEMENT ───────────────────────────────────────────────
  {
    department: "Management",
    members: [
      { name: "Jur",    role: "Grand Captain of Strategy",   slug: "jur"    },
      { name: "Mischa", role: "Grand Captain of Creativity", slug: "mischa" },
      { name: "Marnix", role: "Grand Captain of Accounts",   slug: "marnix" },
    ],
  },

  // ── STRATEGY ─────────────────────────────────────────────────
  {
    department: "Strategy",
    members: [
      { name: "Derk",    role: "High Admiral of Foresight",       slug: "derk"    },
      { name: "Emma",    role: "Royal Strategist of the Court",   slug: "emma"    },
      { name: "Mijke",   role: "Squire of Insight",               slug: "mijke"   },
      { name: "Jacinta", role: "Seeker of Hidden Truths",         slug: "jacinta" },
    ],
  },

  // ── PROJECT MANAGEMENT ───────────────────────────────────────
  {
    department: "Project Management",
    members: [
      { name: "Orfee",    role: "Duchess of Accounts",          slug: "orfee"    },
      { name: "Andrea",   role: "Countess of Timelines",        slug: "andrea"   },
      { name: "Jannieke", role: "Baroness of Deliverables",     slug: "jannieke" },
      { name: "Iris",     role: "Mistress of the Moving Tides", slug: "iris"     },
    ],
  },

  // ── PRODUCTION ───────────────────────────────────────────────
  {
    department: "Production",
    members: [
      { name: "Raf", role: "Harbourmaster of the Grand Endeavour", slug: "raf" },
    ],
  },

  // ── DESIGN ───────────────────────────────────────────────────
  {
    department: "Design",
    members: [
      { name: "Alex", role: "Master Shipwright of the Realm", slug: "alex" },
      { name: "Lili", role: "Artificer of the Crown",         slug: "lili" },
      { name: "Eva",  role: "Keeper of the Visual Code",      slug: "eva"  },
      { name: "Ana",  role: "Apprentice to the Shipwright",   slug: "ana"  },
    ],
  },

  // ── CREATIVE ─────────────────────────────────────────────────
  {
    department: "Creative",
    members: [
      { name: "Marlon",  role: "High Admiral of Imagination", slug: "marlon"  },
      { name: "Reinier", role: "Warden of the Grand Idea",    slug: "reinier" },
      { name: "Koos",    role: "Master of Mischief & Copycraft", slug: "koos" },
      { name: "Joris",   role: "Swordsmith of Concepts",      slug: "joris"   },
      { name: "Maarten", role: "Navigator of Bold Ideas",     slug: "maarten" },
      { name: "Tim",     role: "Raider of Deadlines",         slug: "tim"     },
      { name: "Axel",    role: "Deckhand of Wild Concepts",   slug: "axel"    },
      { name: "Amelia",  role: "Bearer of Untamed Ideas",     slug: "amelia"  },
    ],
  },

  // ── PIRATES OF THE PAST ──────────────────────────────────────
  {
    department: "Pirates of the Past",
    past: true,
    members: [
      { name: "Koen",   role: "The Gilded Gaze", slug: "koen"   },
      { name: "Thomas", role: "'Kokkie'",         slug: "thomas" },
      { name: "Marten", role: "Marrrty",          slug: "marten" },
    ],
  },

];
