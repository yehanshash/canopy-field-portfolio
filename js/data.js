// Data for the static portfolio
const UN = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

window.DATA = {
  publicationFilters: ["All", "Canopy", "Ethnobotany", "Conservation", "Mycology"],

  publications: [
    { year: "2025", title: "Vertical heterogeneity and the limits of single-stratum biodiversity surveys", venue: "Nature Ecology & Evolution", tag: "Canopy" },
    { year: "2024", title: "Mycorrhizal connectivity loss in selectively logged Bornean dipterocarps", venue: "Science", tag: "Mycology" },
    { year: "2024", title: "Naming the vine: a multilingual census of Banisteriopsis caapi cultivars", venue: "Journal of Ethnopharmacology", tag: "Ethnobotany" },
    { year: "2023", title: "Acoustic baselines for tropical primary forest, derived from 240 ARUs", venue: "Methods in Ecology and Evolution", tag: "Canopy" },
    { year: "2023", title: "Emergent tree mortality and the canopy refugia hypothesis", venue: "Ecology Letters", tag: "Canopy" },
    { year: "2022", title: "What benefit-sharing might mean, after Nagoya", venue: "Conservation Biology", tag: "Conservation" },
    { year: "2022", title: "Bromeliad-borne anuran assemblages in igapó canopies", venue: "Biotropica", tag: "Canopy" },
    { year: "2021", title: "Selective logging concessions and below-ground biodiversity: a meta-analysis", venue: "Global Change Biology", tag: "Mycology" },
    { year: "2021", title: "On translation, and the impossibility of botanical names", venue: "Granta (essay)", tag: "Ethnobotany" },
    { year: "2020", title: "A 200-year reconstruction of canopy disturbance in the upper Amazon", venue: "PNAS", tag: "Conservation" },
    { year: "2020", title: "Sleeping among emergents: notes on long-duration canopy observation", venue: "American Scientist", tag: "Canopy" },
    { year: "2019", title: "Strangler fig phenology under elevated CO₂: a 12-year record", venue: "New Phytologist", tag: "Canopy" },
    { year: "2018", title: "Indigenous fire stewardship in the western Amazon basin", venue: "Nature Sustainability", tag: "Conservation" },
    { year: "2017", title: "The pharmacology of the unspoken: notes from the Cofán materia medica", venue: "Economic Botany", tag: "Ethnobotany" },
  ],

  journal: [
    { id: "j1", img: UN("1518173946687-a4c8892bbd9f", 1400), ttl: "Igapó at first light",           meta: "Rio Jaú · Aug 2024",  gc: "span 6", gr: "span 3" },
    { id: "j2", img: UN("1574482620811-1aa16ffe3c82", 900),  ttl: "Phyllomedusa bicolor, calling",  meta: "Manaus · Feb 2024",   gc: "span 3", gr: "span 2" },
    { id: "j3", img: UN("1500382017468-9049fed747ef", 900),  ttl: "After the rain, Sepik",          meta: "Papua · May 2024",    gc: "span 3", gr: "span 2" },
    { id: "j4", img: UN("1448375240586-882707db888b", 900),  ttl: "Climbing the kapok",             meta: "Putumayo · Mar 2024", gc: "span 4", gr: "span 3" },
    { id: "j5", img: UN("1535930891776-0c2dfb7fda1a", 1400), ttl: "Cathedral of strangler figs",    meta: "Manú · Nov 2023",     gc: "span 5", gr: "span 3" },
    { id: "j6", img: UN("1542273917363-3b1817f69a2d", 900),  ttl: "Mycelium, 4 cm down",            meta: "Borneo · Sep 2023",   gc: "span 3", gr: "span 3" },
    { id: "j7", img: UN("1441974231531-c6227db76b6e", 900),  ttl: "The 47-meter platform",          meta: "Rio Negro · Jan 2024",gc: "span 4", gr: "span 2" },
    { id: "j8", img: UN("1502082553048-f009c37129b9", 900),  ttl: "Path to camp at dusk",           meta: "Iquitos · Jun 2024",  gc: "span 4", gr: "span 2" },
    { id: "j9", img: UN("1506794778202-cad84cf45f1d", 900),  ttl: "Caapi vine, eight years old",    meta: "Putumayo · Mar 2024", gc: "span 4", gr: "span 2" },
  ],

  species: [
    { sci: "Couratari guianensis",  name: "Tauari",                            icon: "tree",   status: "VU", region: "Amazonas",         height: "55 m",            note: "Emergent. Drops a small white fruit the size of a pingpong ball. We've tagged 184." },
    { sci: "Phyllomedusa bicolor",  name: "Giant Monkey Frog",                 icon: "frog",   status: "LC", region: "Pan-Amazon",       height: "Canopy 25–35 m",  note: "Walks, doesn't hop. Calls at dusk; kambô peptides in the secretion." },
    { sci: "Banisteriopsis caapi",  name: "Yagé / Ayahuasca Vine",             icon: "vine",   status: "LC", region: "Upper Amazon",     height: "Vine 30 m+",      note: "Cultivated by name, not by binomial. The Cofán recognize 11 cultivars." },
    { sci: "Harpia harpyja",        name: "Harpy Eagle",                       icon: "eagle",  status: "VU", region: "Neotropics",       height: "Nests 40 m+",     note: "Nests in emergents. The two-meter wingspan can knock you off a platform." },
    { sci: "Rafflesia arnoldii",    name: "Corpse Flower",                     icon: "flower", status: "EN", region: "Sumatra / Borneo", height: "Forest floor",    note: "World's largest single flower. Blooms ~5 days. Smells exactly like its name." },
    { sci: "Ficus aurea",           name: "Strangler Fig",                     icon: "fig",    status: "LC", region: "Neotropics",       height: "30 m",            note: "Begins as an epiphyte; outlives the host it grows around. A 200-yr architecture." },
    { sci: "Ateles belzebuth",      name: "White-bellied Spider Monkey",       icon: "monkey", status: "EN", region: "Upper Amazon",     height: "Upper canopy",    note: "Travels as one with the canopy — never touches ground in undisturbed forest." },
    { sci: "Cathartes melambrotus", name: "Greater Yellow-headed Vulture",     icon: "vulture",status: "LC", region: "Amazon",           height: "Emergent",        note: "Finds carrion by smell — rare among birds. Soars 40+ m above the closed canopy." },
  ],

  expeditions: [
    { id: "e1", x: 32, y: 62, title: "Reserva Mamirauá",   country: "Amazonas, Brazil",            year: "2024", days: "118", team: "9",  body: "Vertical stratification census in seasonally flooded igapó. Established three new permanent canopy walkways at 28, 34, and 41 meters." },
    { id: "e2", x: 28, y: 58, title: "Putumayo Headwaters",country: "Putumayo, Colombia",          year: "2023", days: "62",  team: "6",  body: "Ethnobotanical fieldwork with Cofán elders. Co-authored the first multilingual census of caapi cultivars used in the upper Putumayo." },
    { id: "e3", x: 27, y: 64, title: "Manú Wilderness",    country: "Madre de Dios, Perú",         year: "2022", days: "94",  team: "11", body: "Tagged and instrumented 184 emergent trees above 45 m. Bioacoustic baseline derived from 32 ARUs over the wet season." },
    { id: "e4", x: 76, y: 60, title: "Danum Valley",       country: "Sabah, Borneo",               year: "2023", days: "76",  team: "8",  body: "Mycorrhizal connectivity mapping across selectively logged dipterocarp forest. Sampled 412 root junctions." },
    { id: "e5", x: 84, y: 64, title: "Upper Sepik",        country: "East Sepik, Papua New Guinea",year: "2024", days: "44",  team: "7",  body: "Pilot bioacoustic survey, in collaboration with Wildlife Conservation Society. Deployed 28 ARUs along a 22 km transect." },
    { id: "e6", x: 52, y: 60, title: "Congo Basin",        country: "Salonga, DRC",                year: "2022", days: "38",  team: "5",  body: "Comparative emergent census, co-led with WWF. The first standardized cross-basin survey using identical methodology to our Amazon plots." },
  ],

  press: [
    { outlet: "The New York Times Magazine",        ttl: "The Woman Who Sleeps in the Canopy",        date: "Apr 2024",     kind: "Profile" },
    { outlet: "BBC Radio 4 — The Life Scientific",  ttl: "Iris Vega on listening to the rainforest",  date: "Jan 2024",     kind: "Audio · 41 min" },
    { outlet: "TED — Vancouver",                    ttl: "What a hectare of canopy actually contains",date: "Nov 2023",     kind: "Talk · 18 min" },
    { outlet: "Granta",                             ttl: "On translation, and the names of trees",    date: "Issue 165, 2023", kind: "Essay" },
    { outlet: "Nature — News Feature",              ttl: "The lab that maps forests vertically",      date: "Aug 2023",     kind: "Feature" },
    { outlet: "The Atlantic",                       ttl: "A field guide to mourning a tree",          date: "Mar 2023",     kind: "Essay" },
  ],

  STATUS_LABELS: {
    LC: "Least Concern", NT: "Near Threatened", VU: "Vulnerable", EN: "Endangered", CR: "Critically Endangered",
  },
};

// SVG plate markup per species type
window.SPECIES_PLATES = {
  tree:    `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 110 V 65" stroke-width="1.6"/><path d="M60 65 C 30 60, 25 35, 45 25 C 50 12, 70 12, 78 22 C 100 22, 100 50, 80 60 C 75 70, 65 70, 60 65"/><path d="M52 55 L 60 70 M 68 55 L 60 70 M 60 50 V 65" stroke-width="0.7" opacity="0.6"/><path d="M56 110 Q 60 100 64 110" stroke-width="0.8"/></svg>`,
  frog:    `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M40 70 C 35 50, 50 40, 60 40 C 70 40, 85 50, 80 70 C 88 75, 95 78, 95 85 C 95 90, 85 86, 80 80 C 80 90, 70 95, 60 95 C 50 95, 40 90, 40 80 C 35 86, 25 90, 25 85 C 25 78, 32 75, 40 70 Z"/><circle cx="50" cy="52" r="4"/><circle cx="70" cy="52" r="4"/><circle cx="50" cy="52" r="1.6" fill="currentColor"/><circle cx="70" cy="52" r="1.6" fill="currentColor"/><path d="M50 75 Q 60 80 70 75" stroke-width="0.8"/></svg>`,
  vine:    `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 10 C 50 30, 30 50, 50 60 S 30 80, 50 100 S 70 110, 90 110" stroke-width="1.4"/><g opacity="0.85"><ellipse cx="40" cy="32" rx="9" ry="3.5" transform="rotate(-30 40 32)"/><line x1="32" y1="36" x2="48" y2="28" stroke-width="0.5"/><ellipse cx="44" cy="58" rx="10" ry="4" transform="rotate(20 44 58)"/><line x1="36" y1="55" x2="52" y2="61" stroke-width="0.5"/><ellipse cx="40" cy="86" rx="9" ry="3.5" transform="rotate(-15 40 86)"/><line x1="32" y1="88" x2="48" y2="84" stroke-width="0.5"/><ellipse cx="68" cy="104" rx="11" ry="4" transform="rotate(15 68 104)"/><line x1="58" y1="102" x2="78" y2="106" stroke-width="0.5"/></g></svg>`,
  eagle:   `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 60 C 25 45, 40 50, 55 56 L 60 50 C 62 46, 68 46, 70 50 L 75 56 C 88 50, 100 45, 115 60 C 100 64, 90 64, 80 60 L 80 80 C 78 88, 72 92, 65 90 L 60 96 L 55 90 C 48 92, 42 88, 40 80 L 40 60 C 30 64, 22 64, 10 60 Z"/><line x1="62" y1="52" x2="62" y2="60" stroke-width="0.6"/><line x1="68" y1="52" x2="68" y2="60" stroke-width="0.6"/></svg>`,
  flower:  `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="60" r="10"/><g transform="translate(60 32)"><path d="M0 0 C -12 -10, -12 -28, 0 -32 C 12 -28, 12 -10, 0 0 Z"/></g><g transform="translate(86.6 49) rotate(72)"><path d="M0 0 C -12 -10, -12 -28, 0 -32 C 12 -28, 12 -10, 0 0 Z"/></g><g transform="translate(76.5 80.5) rotate(144)"><path d="M0 0 C -12 -10, -12 -28, 0 -32 C 12 -28, 12 -10, 0 0 Z"/></g><g transform="translate(43.5 80.5) rotate(216)"><path d="M0 0 C -12 -10, -12 -28, 0 -32 C 12 -28, 12 -10, 0 0 Z"/></g><g transform="translate(33.4 49) rotate(288)"><path d="M0 0 C -12 -10, -12 -28, 0 -32 C 12 -28, 12 -10, 0 0 Z"/></g><circle cx="60" cy="60" r="3.5" fill="currentColor"/></svg>`,
  fig:     `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 110 V 70" stroke-width="1.6"/><path d="M60 70 C 40 80, 30 95, 35 110 M 60 70 C 80 80, 90 95, 85 110 M 60 75 C 50 85, 45 100, 50 110 M 60 75 C 70 85, 75 100, 70 110" stroke-width="0.9"/><path d="M60 70 C 32 65, 25 40, 45 28 C 50 14, 70 14, 78 24 C 100 24, 102 52, 82 62 C 76 70, 66 70, 60 70 Z"/><path d="M50 50 L 70 50" stroke-width="0.5" opacity="0.5"/></svg>`,
  monkey:  `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M100 28 C 110 36, 108 50, 96 52" stroke-width="1.4"/><ellipse cx="60" cy="60" rx="20" ry="22"/><circle cx="60" cy="34" r="13"/><circle cx="55" cy="32" r="2" fill="currentColor"/><circle cx="65" cy="32" r="2" fill="currentColor"/><path d="M56 38 Q 60 41 64 38" stroke-width="0.7"/><path d="M44 56 C 30 50, 22 38, 22 25" stroke-width="1.4"/><path d="M76 56 C 90 50, 96 36, 96 28" stroke-width="1.4"/><path d="M50 80 C 45 92, 45 102, 48 110" stroke-width="1.2"/><path d="M70 80 C 75 92, 75 102, 72 110" stroke-width="1.2"/><line x1="6" y1="22" x2="114" y2="22" stroke-width="1.4"/></svg>`,
  vulture: `<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 70 C 24 56, 40 60, 55 66 C 58 60, 62 60, 65 66 C 80 60, 96 56, 112 70 C 95 76, 80 76, 67 72 L 65 78 C 62 84, 58 84, 55 78 L 53 72 C 40 76, 25 76, 8 70 Z"/><path d="M55 68 L 65 68" stroke-width="0.6"/><circle cx="60" cy="64" r="2.5" fill="currentColor"/></svg>`,
};
