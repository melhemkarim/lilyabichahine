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
  role: "Artist | Researcher",
  tagline:
    "Investigating law as both material and method, the practice engages with fiction, governance, collective memory, and artistic representation through performances, installations, moving image, and site-specific tribunals",
  email: "Lily.abichahine@gmail.com",
  heroImage: "/images/about/portrait-wide.jpg",
};

export type Embeds = {
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
  embeds?: Embeds[];
  group:
    | "Mare Nostrum"
    | "Visual Art"
    | "Tribunals"
    | "Academic and Artistic Research"
    | "Contracts"
    | "Lawyer's Monologues"
    | "Law and art workshops"
    | "Arpentage"
    | "Architecture of Justice"
    | "False Self-Care Sequences or Catastrophe Meditation"
    | "Legal Clinic"
  ;
};

export const PROJECTS: Project[] = [
  {
    slug: "our-sea-3",
    title: "Our Sea III: Tantalus Cries",
    date: "2027",
    category: "Lecture Performance",
    venue: "Theater Bremen",
    location: "Bremen, Germany",
    group: "Mare Nostrum",
    credits: [
      "Director, Writer & Performer — Lily Abichahine",
      "Video Editors — Rami El-Sabbagh, Rabih Ghannam",
      "Docu-Essay Editor — Firas El-Hallak",
      "Directors of Photography — François Duverger, Barış B. Atal",
      "Camera Assistants — Valentin Printant, Fatemeh Melika Gholizadeh, Yalçın Inan",
      "Sound Artist — Jad Atoui",
    ],
    description: [
      "In Our Sea III: Tantalus Cries, I intend to explore the two Mediterranean cities of Athens and Alexandria, tackling the myth of Tantalus. According to the Roman poet Ovid, Tantalus was a king who was punished by the gods for killing his son and offering his flesh to the gods as a meal. Outraged by his actions, the gods condemned him to forever stand in a pool of water under a fruit tree with low-hanging branches. Whenever he tried to drink the water or eat the fruit, it would recede from his reach. Athens, Alexandria, Tantalus, Poseidon, Pelops, Metis, Athena, Alexander the Great: between myth, history and geography, I will be tracking these stories linking the water and the land.",
      "Athens' famous Acropolis, the city’s most prominent hill, served as the primary water source during ancient times. According to the myth, it is Poseidon, the God of the waters and the sea, who created on this hill the first well with his spear. It became an important symbol of the city's connection to its mythology, especially as various springs and wells on the hill were used by the inhabitants as a source of drinking water and for religious ceremonies. In Alexandria, we find resonance of the myth through Poseidon to whom the mythical pharos was dedicated. In the reinterpretation of these mythologies, this project aims to draw parallels between the current ecological crisis and ancient literature in the context of today’s Mediterranean and beyond. We have been endlessly exploiting our waters for years. We are eating poisoned fish. We are swimming in water contaminated with plastic. What would be the impact in the coming years if these unethical, non-ecological and unsustainable conditions persist? By abusing our land and our sea, won’t we be punished just like Tantalus was?",
    ],
    coverImage: "/images/work/our-sea-3/cover.jpg",
    
  },
  {
    slug: "our-sea-2",
    title: "Our Sea II: Secrets of the Infinite Sea",
    date: "2022",
    category: "Lecture Performance",
    venue: "Theater Bremen",
    location: "Bremen, Germany",
    group: "Mare Nostrum",
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
    embeds: [
  {
    platform: "vimeo",
    url: "https://vimeo.com/853943596",
    note: "Performance documentation",
  },
  {
    platform: "vimeo",
    url: "https://vimeo.com/785677353",
    note: "Promotional docu-essay",
  },
],
   
      
    gallery: [
    "/images/work/our-sea-2/gallery-1.jpg",
  ],
  },
  
  {
    slug: "abjad-hawwaz",
    title: "Abjad Hawwaz: How I Was Destroyed by a Mall Thrice",
    date: "2022",
    category: "Installation",
    venue: "Beit Beirut",
    location: "Beirut, Lebanon",
    group: "Visual Art",
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
    embeds: [
  {
    platform: "vimeo",
    url: "https://vimeo.com/792920487",
    note: "Video of the sandpit in motion — password protected, contact via e-mail for access.",
  },
],
  },
  {
    slug: "extended-cities",
    title: "Extended Cities",
    date: "2021",
    category: "Installation",
    venue: "The Muse",
    location: "Sudan — work in progress",
    group: "Visual Art",
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
    category: "Lawyer's Monologues",
    venue: "Conservatoire National Supérieur d'Art Dramatique",
    location: "Paris, France",
    group: "Lawyer's Monologues",
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
    category: "Lawyer's Monologues",
    venue: "Künstlerhaus Mousonturm",
    location: "Frankfurt, Germany",
    group: "Lawyer's Monologues",
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
    group: "Mare Nostrum",
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
    ],
    embeds: [
  {
    platform: "vimeo",
    url: "https://vimeo.com/664913612",
    note: "Excerpts from performance — password protected, contact via e-mail for access.",
  },
],
  },
  {
    slug: "agreement-for-photography-provision",
    title: "Agreement for Photography Provision",
    date: "2021",
    category: "Collective Exhibition",
    venue: "Colonels Row",
    location: "New York, United States",
    group: "Contracts",
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

  // ----------------------------------------------------------------- TRIBUNAL

  {
    slug: "tribunal-for-the-neckar",
    title: "The Tribunal for the Neckar",
    date: "2026",
    category: "Performative Tribunal",
    venue: "Neckar Insel",
    location: "Stuttgart, Germany",
    group: "Tribunals",
    credits: [
      "Concept, Text & Direction — Lily Abichahine",
      "Artistic Curation — Tamarind Rossetti, Stephen Wright",
      "Scenography — Student of the Haute École des Arts du Rhin (HEAR), Strasbourg",
      "Video — Nina Corman",
      "Sound — Nina Corman",
      "With the participation of Suzanne Aski, Baptiste Morizot, Hervé Coves, Béatrice Josse",
    ],
    description: [
      "Tribunal for the Neckar is a performative civic assembly staged along the banks of the Neckar River, within the institution Neckar Insel. It gathers ecology experts, residents of Stuttgart, and associations working on river pollution in the state of Baden-Württemberg within a shared space of dialogue.",
      "The project was commissioned by Johanne Mazeaud of the Institut français of Stuttgart and presented under the curation of the Kunsthalle Stuttgart.",
    ],
    coverImage: "/images/work/tribunal-for-the-neckar/cover.jpg",
  },
  {
    slug: "bodies-on-trial-218",
    title: "Bodies on Trial – §218",
    date: "2026",
    category: "Performativ Tribunal",
    venue: "Theater Rampe",
    location: "Stuttgart, Germany",
    group: "Tribunals",
    credits: [
      "Concept, Scenario & Direction — Lily Abichahine",
      "Video — Krasa",
      "Photography — Lauryn Hölzel",
      "Assistant — Evgenia Asimakopoulou",
      "Sound — Max Kirks",
      "Music — Nils Eckart Production",
      "Production Assistant — Anne Mahlow",
      "Special thanks to — Ilona Schaal, Heba Amin, Theresa Bürkle",
    ],
    description: [
      "Bodies on Trial – §218 invites the public into a heightened, participatory courtroom where personal experience meets legal fiction. The performance exposes the contradictions and unresolved tensions around Germany's abortion law, questioning who is heard, who is silenced, and how bodies become evidence within systems of governance.",
      "This tribunal-performance invites the audience to reflect, debate, and bear witness to the tensions between law, autonomy, and the body — and to consider what justice might look like beyond the written law. Developed as part of a lectureship for the Fachklasse for Digital and Time-based Art (Klasse Amin) during the Winter Semester 2025/2026, the artist's students took part in the performance.",
    ],
    coverImage: "/images/work/bodies-on-trial-218/cover.jpg",
  },
  {
    slug: "tribunal-for-an-island",
    title: "Tribunal for an Island",
    date: "2024",
    category: "Participatory Performance",
    venue: "West Cork Art Center Uillinn",
    location: "Cork, Ireland",
    group: "Tribunals",
    credits: [
      "Director & Writer — Lily Abichahine",
      "Video Artist & Director of Photography — Tomasz Madajczak",
      "Mentorship — Harry Brown",
      "Poster Design — Francois Nour",
      "Assistant — Blessing Masueme",
      "Special thanks to — Deirdre McGowan, Paul Hayes, Judith Gilbert, Ann Davoren",
      "With the generous support of West Cork Arts Centre (Uillinn) and Creative Europe",
    ],
    description: [
      "As part of her research on fiction in art and law, the artist developed Tribunal for an Island during a residency at Uillinn: West Cork Arts Centre and fieldwork on Sherkin and Cape Clear Islands. The project unfolded in two phases: informal island forums, where residents discussed shared concerns identified through interviews and observation, and a staging in the form of an open-air people's tribunal involving experts, witnesses, and debate.",
      "In keeping with the ethics of community-based practice, the work was neither photographed nor filmed, prioritizing live dialogue and collective presence. Drawing on her legal background, the artist reimagines the tribunal as a performative space to perform the law and recenter island communities often marginalized from cultural life.",
    ],
    coverImage: "/images/work/tribunal-for-an-island/cover.jpg",
  },
  {
  slug: "legal-clinic-for-artists-lebanon",
  title: "Legal Clinic for Artists in Lebanon",
  date: "October 2026 – April 2027",
  category: "Pilot Project",
  venue: "Beirut Art Center",
  location: "Beirut, Lebanon",
  group: "Legal Clinic",
  credits: [
    "Lead & Founder — Lily Abichahine",
    "In partnership with — Beirut Art Center",
    "Supported by Seed Funding — Arab Fund for Arts and Culture (AFAC)",
  ],
  description: [
    "The Legal Clinic for Artists in Lebanon is a pilot initiative establishing the country's first legal clinic dedicated to artists and cultural practitioners.",
    "The project creates a new space connecting artists, legal experts, institutions, and cultural practitioners to address the legal challenges affecting artistic practice, including contracts, copyright, intellectual property, production, and working conditions.",
    "Through the development of a growing network of lawyers and cultural partners, the initiative aims to provide accessible legal support while strengthening the sustainability of Lebanon's cultural ecosystem.",
    "The pilot launches from 26–31 October 2026 at Beirut Art Center, marking the beginning of a long-term platform for dialogue between art and law.",
  ],
  coverImage: "/images/work/legal-clinic-for-artists-lebanon/cover.jpg",
},

  // ------------------------------------------------- ACADEMIC & ARTISTIC RESEARCH

  {
    slug: "teaching-semester-abk-stuttgart",
    title: "Teaching Semester — Academy of Fine Arts (ABK) Stuttgart",
    date: "October 2025 – February 2026",
    category: "Teaching",
    venue: "Academy of Fine Arts (ABK)",
    location: "Stuttgart, Germany (DE)",
    group: "Academic and Artistic Research",
    credits: ["Instructor — Lily Abichahine"],
    description: [
      "A teaching semester at the Academy of Fine Arts (ABK) Stuttgart, continuing the artist's work at the intersection of law and artistic practice with students in the Fachklasse for Digital and Time-based Art.",
    ],
    coverImage: "/images/work/teaching-semester-abk-stuttgart/cover.jpg",
  },
  {
    slug: "workshop-for-artists-the-muse-khartoum",
    title: "Workshop for Artists — The Muse Multi Studios",
    date: "November 2025",
    category: "Workshop",
    venue: "The Muse Multi Studios",
    location: "Khartoum, Sudan (SD)",
    group: "Academic and Artistic Research",
    credits: ["Facilitator — Lily Abichahine"],
    description: [
      "A workshop for artists held at The Muse Multi Studios in Khartoum, exploring law and fiction as tools for artistic research and production.",
    ],
    coverImage: "/images/work/workshop-for-artists-the-muse-khartoum/cover.jpg",
  },
  {
    slug: "workshop-for-artists-ard-le-caire",
    title: "Workshop for Artists — ARD Art Institute",
    date: "November 2025",
    category: "Workshop",
    venue: "ARD Art Institute",
    location: "Le Caire, Egypt (EG)",
    group: "Academic and Artistic Research",
    credits: ["Facilitator — Lily Abichahine"],
    description: [
      "A workshop for artists at the ARD Art Institute in Cairo, continuing the artist's research into legal fiction and artistic method.",
    ],
    coverImage: "/images/work/workshop-for-artists-ard-le-caire/cover.jpg",
  },
  {
    slug: "workshop-law-students-macerata",
    title: "Workshop for Law Students — University of Macerata",
    date: "June 2025",
    category: "Workshop",
    venue: "University of Macerata, Ph.D. Programme in Law and Innovation",
    location: "Italy (IT)",
    group: "Academic and Artistic Research",
    credits: ["Facilitator — Lily Abichahine"],
    description: [
      "A workshop for Ph.D. candidates in the Law and Innovation programme at the University of Macerata, examining the possibilities of artistic practice as a method of legal imagination.",
    ],
    coverImage: "/images/work/workshop-law-students-macerata/cover.jpg",
  },
  {
    slug: "workshop-law-students-utrecht",
    title: "Workshop for Law Students — Utrecht University",
    date: "April 2023",
    category: "Workshop",
    venue: "Utrecht University, Master's degree in Public International Law",
    location: "Netherlands (NL)",
    group: "Academic and Artistic Research",
    credits: [
      "Facilitator — Lily Abichahine",
      "Special thanks to — Prof. Fabrizio Marongiu Buonaiuti, Elisa Pandolfi, Prof. Kushtrim Istrefi, Prof. Catherine Blanchard",
    ],
    description: [
      "A workshop for Master's students in Public International Law at Utrecht University, held in April 2023.",
    ],
    coverImage: "/images/work/workshop-law-students-utrecht/cover.jpg",
  },
  {
    slug: "symposium-wurttembergischer-kunstverein",
    title: "Symposium — Württembergischer Kunstverein Stuttgart",
    date: "March 2026",
    category: "Symposium",
    venue: "Württembergischer Kunstverein Stuttgart",
    location: "Germany (DE)",
    group: "Academic and Artistic Research",
    credits: ["Speaker — Lily Abichahine"],
    description: [
      "On critique, restrictions, and challenges to freedom in liberal democracies today, using the example of Germany and beyond.",
    ],
    coverImage: "/images/work/symposium-wurttembergischer-kunstverein/cover.jpg",
  },
  {
    slug: "international-conference-mucem",
    title: "International Conference — Mucem",
    date: "13–14 June 2024",
    category: "Conference",
    venue: "Mucem, Circle of Researchers on the Middle East (CCMO)",
    location: "Marseille, France (FR)",
    group: "Academic and Artistic Research",
    credits: ["Speaker — Lily Abichahine"],
    description: [
      "\u201cPalestine and the World,\u201d an international conference held at the Mucem in Marseille under the Circle of Researchers on the Middle East (CCMO).",
    ],
    coverImage: "/images/work/international-conference-mucem/cover.jpg",
  },
  {
    slug: "panel-discussion-lighthouse-relief",
    title: "Panel Discussion — Lighthouse Relief Greece",
    date: "May 2023",
    category: "Panel Discussion",
    venue: "Lighthouse Relief Greece",
    location: "Athens, Greece (GR)",
    group: "Academic and Artistic Research",
    credits: ["Panelist — Lily Abichahine"],
    description: [
      "Participation in a collective discussion on humanitarian and artistic issues related to migration, hosted by Lighthouse Relief Greece in Athens.",
    ],
    coverImage: "/images/work/panel-discussion-lighthouse-relief/cover.jpg",
  },
  {
    slug: "online-lecture-university-of-dakota",
    title: "Online Lecture — University of Dakota",
    date: "February 2026",
    category: "Lecture",
    venue: "University of Dakota, School of Design, Architecture & Art",
    location: "USA",
    group: "Academic and Artistic Research",
    credits: ["Speaker — Lily Abichahine"],
    description: [
      "An online lecture for the School of Design, Architecture & Art at the University of Dakota.",
    ],
    coverImage: "/images/work/online-lecture-university-of-dakota/cover.jpg",
  },
  {
    slug: "online-lecture-tu-dublin",
    title: "Online Lecture — TU Dublin",
    date: "November 2024",
    category: "Lecture",
    venue: "TU Dublin, Master en art",
    location: "Dublin, Ireland (IRL)",
    group: "Academic and Artistic Research",
    credits: [
      "Speaker — Lily Abichahine",
      "Special thanks to — Prof. Glenn Loughrann",
    ],
    description: [
      "An online lecture for the Master en art programme at TU Dublin.",
    ],
    coverImage: "/images/work/online-lecture-tu-dublin/cover.jpg",
  },
  {
  slug: "arpentage-assembling-the-story",
  title: "L’Arpentage – Assembling the Story",
  date: "2026",
  category: "Collective Reading",
  venue: "Stuttgarter Schriftstellerhaus",
  location: "Stuttgart, Germany",
  group: "Arpentage",
  credits: [
    "Host — Robin Ackermann",
    "Direction, Concept & Filming — Lily Abichahine",
  ],
  description: [
    "In this artistic practice, collective reading becomes a form of making. Rather than treating a book as something to be individually consumed, it is approached as an artwork activated by a group through the French collective reading method known as Arpentage.",
    "Participants read fragments of a text individually before assembling meaning together through discussion. The story is gradually produced through multiple voices and perspectives.",
    "Each session functions as both a reading and a performative act of interpretation. Discussions and reflections are filmed, forming part of the artwork itself so that storytelling emerges collectively from the book and its participants.",
    "The first iteration centered on James Baldwin's 'The Fire Next Time', exploring questions of race, religion, and identity in the United States.",
  ],
  coverImage: "/images/work/arpentage-assembling-the-story/cover.jpg",
},
{
  slug: "representations-trials-and-power-workshop",
  title: "Workshop on Representations, Trials and Power",
  date: "Since November 2024",
  category: "Academic Teaching",
  venue: "Various Universities and Art Institutions",
  location: "International",
  group: "Law and art workshops",
  credits: [
    "Workshop Conceived and Delivered — Lily Abichahine",
    "Developed as part of the PhD research 'Fiction in Art and Law: Rethinking the Possibilities of Law via Artistic Practices'",
  ],
  description: [
    "This seminar explores how law and judicial systems are represented, reinvented, and contested through artistic practice.",
    "Drawing on literature, theatre, performance, and the visual arts, participants examine law not only as a regulatory framework but also as an artistic object in its own right.",
    "Historical and contemporary case studies are brought together to investigate the relationships between art and justice while considering the potential of artistic practice as an alternative institutional space.",
  ],
  coverImage: "/images/work/representations-trials-and-power-workshop/cover.jpg",
},
{
  slug: "choreographic-narrations-fragments-of-a-running-body",
  title: "Choreographic Narrations, Fragments of a Running Body",
  date: "April 2020",
  category: "Video Performance",
  venue: "Beirut Art Centre",
  location: "Beirut, Lebanon",
  group: "Visual Art",
  credits: [
    "Author & Performer — Lily Abichahine",
    "Sound — Kinda Hassan",
    "Academic & Artistic Advisor — Eliane Beaufils",
    "Project carried out as part of the Master II in Theater, University of Paris 8",
  ],
  description: [
    "A 13-minute dance video developed through a creative research process exploring race and the experience of running as an aesthetic gesture.",
    "The work investigates thoughts and sensations before, during, and after a race through a diary narrated by the artist, recounting the preparation, running, and aftermath of the Athens Marathon 2018.",
  ],
  coverImage: "/images/work/choreographic-narrations-fragments-of-a-running-body/cover.jpg",
  embeds: {
    platform: "vimeo",
    url: "https://vimeo.com/847143932?share=copy",
    note: "Password provided upon request.",
  },
},
{
  slug: "hyper-un-sur-real",
  title: "Hyper-/ Un-/ Sur-Real",
  date: "2025",
  category: "Collective Exhibition",
  venue: "Galeria Kaufhof",
  location: "Stuttgart, Germany",
  group: "Visual Art",
  credits: [
    "Participant Artist — Lily Abichahine",
  ],
  description: [
    "Hyper-/ Un-/ Sur-Real explores the promises and failures of modernity through the tensions between digital exaltation and analogue decay.",
    "Bringing together works from international artists, the exhibition reflects on ecological crisis, colonialism, war, and speculative futures while questioning the utopian narratives of technological progress.",
  ],
  coverImage: "/images/work/hyper-un-sur-real/cover.jpg",
},
{
  slug: "mare-nostrum-ii-secrets-of-the-infinite-sea-installation",
  title: "Mare Nostrum II: Secrets of the Infinite Sea",
  date: "2022",
  category: "Video Installation",
  venue: "Dream City Festival",
  location: "Tunis, Tunisia",
  group: "Visual Art",
  credits: [
    "Artist — Lily Abichahine",
  ],
  description: [
    "The video that originally accompanied the lecture performance began to take on a life of its own, presented as a continuous 24-hour loop over three days at the Dream City Festival.",
    "This marked the beginning of a new trajectory for the work, evolving beyond a performative accompaniment into an autonomous visual installation that could exist independently as an immersive moving-image artwork.",
  ],
  coverImage:
    "/images/work/mare-nostrum-ii-secrets-of-the-infinite-sea-installation/cover.jpg",
  gallery: [
    "/images/work/mare-nostrum-ii-secrets-of-the-infinite-sea-installation/gallery-1.jpg",
    "/images/work/mare-nostrum-ii-secrets-of-the-infinite-sea-installation/gallery-2.jpg",
  ],
},
];

export const ABOUT = {
  eyebrow: "About / CV",
  heading: "The Artist",
  portrait: "/images/about/cover.jpg",
  portraitCredit: "© Paul Ghorra",
  bio: [
    "Lily Abichahine is an artist and researcher whose work engages legal concepts as both material and method. Trained as a lawyer, she later studied performing arts at Paris VIII University, where she is currently completing a PhD on the intersections of fiction, law, and artistic representation, with an affiliation to the University of Humanistic Studies in the Netherlands.",
    "Her practice explores the relationships between law, governance, collective memory, and artistic representation through performances, installations, video works, and site-specific projects she calls “tribunals.” Interrogating modern democracies and architectures of justice, she creates immersive, research-based works that draw on art history, archaeology, urbanism, criminology, and geopolitics to examine how legal and political structures shape bodies, territories, heritage, and the natural world.",
    "She teaches workshops at the intersection of law and art at universities and art schools internationally. Her work has been supported through residencies and research fellowships, most recently at the Villa Medici in Rome (2025) and Akademie Schloss Solitude in Stuttgart (2025–2026). She is a long-distance runner and triathlete, attentive to the rules and structures that govern endurance sports, echoing a broader interest in systems of law and constraint.",
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