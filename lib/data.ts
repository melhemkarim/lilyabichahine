// ---------------------------------------------------------------------------
// SITE CONTENT
// Everything below is plain data — no styling lives here. Edit freely:
// swap in your real name, bio, categories, and image paths as you add photos.
// Image paths are just strings; drop files into /public/images/... using the
// same paths and they'll appear automatically (missing files gracefully show
// a warm placeholder instead of a broken icon, so the site never looks broken
// while you're still adding photos).
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Lily Abichahine",
  role: "Lawyer / Artist",
  tagline:
    "Performance, installation, and lecture-performance at the intersection of law, myth, and memory.",
  email: "hello@example.com",
  location: "Beirut — Paris",
  heroImage: "/images/about/portrait-wide.jpg",
};

export type Embed = {
  platform: "vimeo" | "youtube";
  url: string;
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** ISO-ish date used for sorting/labels. Year is enough if that's all you have. */
  date: string;
  /** Free-form category — Teaching, Workshop, Discussion, Performance, Installation, etc. */
  category: string;
  venue: string;
  location: string;
  credits: string[];
  description: string[];
  coverImage: string;
  gallery?: string[];
  embed?: Embed;
};

export const PROJECTS: Project[] = [
  {
    slug: "our-sea-2",
    title: "Our Sea II: Secrets of the Infinite Sea",
    date: "2022",
    category: "Lecture Performance",
    venue: "Theater Bremen",
    location: "Bremen, Germany",
    credits: [
      "Director, Writer & Performer — Lily Abichahine",
      "Video Editors — Rami El-Sabbagh, Rabih Ghannam",
      "Docu-Essay Editor — Firas El-Hallak",
      "Directors of Photography — François Duverger, Barış B. Atal",
      "Camera Assistants — Valentin Printant, Fatemeh Melika Gholizadeh, Yalçın Inan",
      "Sound Artist — Jad Atoui",
    ],
    description: [
      "Secrets of the Infinite Sea is the second chapter within a series of myths and reality explorations. After two residencies in Izmir and Marseille, the artist traces a connection between these cities, reminding us of invisible links among various Mediterranean contexts.",
      "Exploring both reality and mythology, she tackles the myth of Prometheus. In this work, she transforms herself into a contemporary haruspex and tells the story of migration from ancient to contemporary times, offering her audience a reading of the future that mixes facts with dark humor, in text, video, and sound.",
    ],
    coverImage: "/images/work/our-sea-2/cover.jpg",
    
    embed: {
      platform: "vimeo",
      url: "https://vimeo.com/785677353",
      note: "Promotional docu-essay — password protected, contact via e-mail for access.",
    },
  },
  {
    slug: "abjad-hawwaz",
    title: "Abjad Hawwaz: How I Was Destroyed by a Mall Thrice",
    date: "2022",
    category: "Installation",
    venue: "Beit Beirut",
    location: "Beirut, Lebanon",
    credits: [
      "Concept, Design & Text — Lily Abichahine",
      "Project Assistants — Nour Abdelbaki, Soraya Salwan Hammoud",
      "Mechanical Engineering Consultant — Ali Kain, Tilman Grünewald",
      "Sound Engineer — Ziad Moukarzel",
      "Technician — Mohammad Abou Khalaf",
    ],
    description: [
      "For her first installation, the artist worked on the topic of urban memory. Starting from a personal story about her childhood school that ceased to exist as it became a commercial center, she tries to recreate the playground of the forgotten school.",
      "To do so, she installs a sandpit of 2m x 1m, mechanically shaped with structures-sculptures that appear and disappear continuously, relating to the aesthetics of a construction site. She also resorts to recordings at various stations where testimonies of alumni, staff, neighbors, and people who remember the old plot of land are replayed.",
      "Symbol of a city in continuous construction and deconstruction, the preservation of memory is achieved through the archiving of oral history and the physical reconstruction of one of the main school elements.",
    ],
    coverImage: "/images/work/abjad-hawwaz/cover.jpg",
    
    embed: {
      platform: "vimeo",
      url: "https://vimeo.com/792920487",
      note: "Video of the sandpit in motion — password protected, contact via e-mail for access.",
    },
  },
  {
    slug: "extended-cities",
    title: "Extended Cities",
    date: "2021",
    category: "Installation",
    venue: "The Muse",
    location: "Sudan — work in progress",
    credits: [
      "Concept, Design & Text — Lily Abichahine, in conversation with Hazem Al-Muhammad",
      "Project Assistant — Marwan Hamza",
      "Researcher Assistant — Hassan Nasser",
    ],
    description: [
      "Extended Cities is an art residency between Sudan and Lebanon through which the artist explores the city of Khartoum, transposing her Lebanese experience relating to the study of places that cease to exist.",
      "The work delves into the memories of each city, drawing comparisons to understand each through the other's lens. The project relies on defining the themes through which we can understand their social, economic, and political intersections — interpreted through an artistic intervention resulting from Abichahine's dialogue with Sudanese artist Hazem Hussein.",
    ],
    coverImage: "/images/work/extended-cities/cover.jpg",
    gallery: ["/images/work/extended-cities/gallery-1.jpg"],
  },
  {
    slug: "etreinte",
    title: "L'Étreinte",
    date: "2022",
    category: "Lecture-Performance",
    venue: "Conservatoire National Supérieur d'Art Dramatique",
    location: "Paris, France",
    credits: [
      "Writer & Performer — Lily Abichahine",
      "With the generous guidance of Giuseppe Burighel",
    ],
    description: [
      "The artist conducted a happening within a symposium program at the prestigious Conservatoire National Supérieur d'Art Dramatique (CNSAD) in Paris. She offered her audience an experience of circumstantial taboos where touch is at the heart of experimentation.",
      "Her intervention was followed by a lecture where she juggles between narrative-fiction and emerging legal questions, in a world torn between two imperatives: freedom on one hand and security on the other.",
    ],
    coverImage: "/images/work/etreinte/cover.jpg",
  },
  {
    slug: "exquisite-corpse",
    title: "Exquisite Corpse",
    date: "2021",
    category: "Lecture Performance",
    venue: "Künstlerhaus Mousonturm",
    location: "Frankfurt, Germany",
    credits: [
      "Writer & Performer — Lily Abichahine",
      "Assistant Researchers — Rola Makké, Lauren Hutchinson",
      "Graphic Designer — Ghalia Khalili",
      "Artistic Advisor — Rabih Mroueh",
      "With the generous guidance of Matthias Lilienthal",
    ],
    description: [
      "Who decides on life after death? In Exquisite Corpse, Lily Abichahine tells the story of one Lebanese family: after the father's death, his son decides to have the body mummified to allow future generations to have contact with him. Is this a sign of affection or a liability?",
      "An almost irresolvable dispute develops between different members of the family, which Abichahine describes from the perspective of the family's lawyer. Entirely in keeping with the motto 'the personal is political,' the microcosm of this family story provides interesting insights into Lebanese society.",
      "Where art meets the law, different political and ethical approaches come into play, as does the question: on what temporal, spatial, and emotional levels are the effects of patriarchy felt?",
    ],
    coverImage: "/images/work/exquisite-corpse/cover.jpg",
    gallery: [
      "/images/work/exquisite-corpse/gallery-1.jpg",
      "/images/work/exquisite-corpse/gallery-2.jpg",
    ],
  },
  {
    slug: "our-sea-1",
    title: "Our Sea I: Choreography for a Woman and a Stone",
    date: "2021",
    category: "Performance",
    venue: "Santa Maria dello Spasimo",
    location: "Palermo, Italy",
    credits: [
      "Director, Writer & Performer — Lily Abichahine",
      "Video Editor — Rami El-Sabbagh",
      "Video Assistants — Micheal Landau, Riccardo Campagna",
      "Director of Photography — Genny Petrotta",
      "Sound Artist — Jad Atoui",
      "Opera Singer — Eliane Saadeh",
      "Production Manager — Letizia Gullo",
    ],
    description: [
      "Within the framework project Our Sea / Mare Nostrum, which focuses on the illegalities of the coastal areas of several Mediterranean cities, and following two residencies in Lebanon and Sicily, this first performance premiered in 2021.",
      "Choreography for a Woman and a Stone reinterprets the myth of Sisyphus: Sisyphus is a woman, from the region surrounding this 'middle basin,' leading a circular run lasting roughly 40 minutes, tied by a rope to a stone placed at the center of an 8-by-8-meter stage. Her run leaves traces on the ground, while behind her a screen projects footage filmed in both localities.",
    ],
    coverImage: "/images/work/our-sea-1/cover.jpg",
    gallery: [
      "/images/work/our-sea-1/gallery-1.jpg",
      "/images/work/our-sea-1/gallery-2.jpg",
      "/images/work/our-sea-1/gallery-3.jpg",
    ],
    embed: {
      platform: "vimeo",
      url: "https://vimeo.com/664913612",
      note: "Excerpts from performance — password protected, contact via e-mail for access.",
    },
  },
  {
    slug: "agreement-for-photography-provision",
    title: "Agreement for Photography Provision",
    date: "2021",
    category: "Collective Exhibition",
    venue: "Colonels Row",
    location: "New York, United States",
    credits: [
      "Concept & Drafting — Lily Abichahine",
      "Assistant Researchers — Tala Rahal, Tamar Kharatishvlii",
      "Curators — Mari Spirto, Lila Nazemian, Abhijan Toto",
      "Advisors — Vartan Avakian, Yasmine Eid-Sabbagh, Kristine Khouri",
    ],
    description: [
      "The exhibited, reviewed, and annotated agreement is based on the Deposit Agreement used by the Arab Image Foundation (AIF). Alongside it, a photograph from the AIF collection serves as a guiding tool. The viewer is invited into an investigation of ethics and legal considerations in the context of digitized sensitive archival material.",
      "Through the medium of a legal document, the lawyer and artist explores how one might address the preservation of cultural heritage — questions of rightful ownership, custodianship, and control over culture and data are examined throughout, following NYU's Hagop Kevorkian Center workshop Unravelling Collections and Practices: Rights, Materialities and Photographic Agency.",
    ],
    coverImage: "/images/work/agreement-for-photography-provision/cover.jpg",
  },
];

export const ABOUT = {
  eyebrow: "About / CV",
  heading: "The Artist",
  portrait: "/images/about/cover.jpg",
  portraitCredit: "Photo courtesy of Paul Ghorra",
  bio: [
    "Born in 1985, Lily Abichahine grew up in Beirut. She graduated from the Faculty of Law at Saint Joseph University and has worked in Beirut and Paris as a lawyer and consultant. She obtained her Bachelor's degree in Performing Arts in 2018 and her Master's degree in 2020, both from the University of Paris VIII.",
    "Her dissertation and first work, Narrations Chorégraphiques: Fragments d'un Corps en Course, analyses running as an aesthetic gesture. Her artistic practice confronts legal issues with fictional narratives in a lecture-performance format, as in Exquisite Corpse (2021), which premiered in Frankfurt, Germany.",
    "As part of her Mare Nostrum project (since 2021 — ongoing), she has been working between Mediterranean cities, contemplating their realities as the fundamental expression of their collective unconscious. She refers to their myths, reinterpreting them on stage, tracing connections between cities and underlining the invisible links that underpin the Mediterranean context.",
    "Her installation Abjad Hawwaz: How I Was Destroyed by a Mall Thrice (2022) addresses the issue of urban planning in Beirut in the context of post-war reconstruction. Her practice is multidisciplinary, devoted to the study of myth, art history, and archaeology through the prism of law. She examines issues of genealogy, heritage, and collective memory.",
  ],
  education: [
    { year: "2020", item: "M.A. Performing Arts, Université Paris VIII" },
    { year: "2018", item: "B.A. Performing Arts, Université Paris VIII" },
    { year: "—", item: "Faculty of Law, Saint Joseph University, Beirut" },
  ],
};

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  return { prev, next };
}
