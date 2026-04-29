// lib/portfolio-data.ts
// Données pour l'ensemble du portfolio technique ToolGuard

// PAGE 1 - MÉCANIQUE
export const mechanicsHeroStats = [
  { label: "Couple moteur requis", value: "0.52 mN·m" },
  { label: "Contrainte max MDF", value: "0.836 MPa" },
  { label: "Admissible", value: "8.33 MPa" },
  { label: "Marge sécurité", value: "×9.97" },
];

export const engineeringChallenges = [
  {
    id: "motor",
    number: "01",
    title: "Le Moteur",
    question: "Quel couple minimal pour déplacer un tiroir de 10 kg ?",
    icon: "⚙️",
    color: "orange",
    result: "C_m = 0.516 mN·m",
    insight:
      "Le moteur NEMA 17 sélectionné développe 40× le couple requis. Cette marge garantit une fiabilité totale même en conditions dégradées.",
    equations: ["F_m = ma + μmg", "C_m = (F_m × L) / (2πη)"],
  },
  {
    id: "drawer",
    number: "02",
    title: "Le Tiroir MDF",
    question: "Quelle épaisseur pour 4.5 kg d'outils en ouverture totale ?",
    icon: "📦",
    color: "amber",
    result: "σ_max = 0.836 MPa << σ_adm = 8.33 MPa",
    insight:
      "L'épaisseur retenue de 10 mm offre un facteur de sécurité effectif de ×9.97. Les déformations restent inférieures à 0.25 mm.",
    equations: ["P_s = m_T·g / (L·ℓ)", "FS = σ_ultime / σ_adm = 3"],
  },
  {
    id: "screw",
    number: "03",
    title: "La Vis sans fin",
    question: "Une vis Ø8mm, pas 2mm peut-elle tenir sans déformer ?",
    icon: "🔩",
    color: "yellow",
    result: "σ_vis = 22 kPa << σ_adm = 110 MPa",
    insight:
      "La contrainte axiale réelle représente 0.02% de la contrainte admissible de l'inox. Aucun risque de déformation plastique.",
    equations: ["F_ax = ma_max + μ_r·mg", "σ_vis = 4F_ax / (πd²)"],
  },
];

export const motorCalculationSteps = [
  {
    step: "i",
    title: "Accélération moyenne",
    subtitle: "Profil trapézoïdal",
    formula: "a = V²max / D_max = 0.1² / 0.36",
    result: "a ≈ 0.0278 m/s²",
    variables: [
      { name: "V_max", value: "0.1 m/s", desc: "Vitesse max souhaitée" },
      { name: "D_max", value: "0.36 m", desc: "Course maximale" },
    ],
    color: "blue",
  },
  {
    step: "ii",
    title: "Forces extérieures",
    subtitle: "Bilan des forces — axe X",
    formula: "F⃗_m + F⃗_f1 + F⃗_f2 + R⃗_v1 + R⃗_v2 + P⃗ = m·a⃗",
    result: "m·a ≈ 0.286 N",
    variables: [
      { name: "m", value: "10.3 kg", desc: "Masse tiroir chargé" },
      { name: "a", value: "0.0278 m/s²", desc: "Accélération" },
    ],
    color: "indigo",
  },
  {
    step: "iii",
    title: "Frottement (Coulomb)",
    subtitle: "Forces de glissière",
    formula: "F_f = μ·N = μ·m·g",
    result: "F_f ≈ 1.010 N",
    variables: [
      { name: "μ", value: "0.01", desc: "Coeff. frottement glissières" },
      { name: "N", value: "101.04 N", desc: "Charge normale = m·g" },
    ],
    color: "violet",
  },
  {
    step: "iv",
    title: "Force motrice totale",
    subtitle: "Somme des contributions",
    formula: "F_m = m·a + μ·m·g",
    result: "F_m ≈ 1.297 N",
    variables: [
      { name: "F_inertie", value: "0.286 N" },
      { name: "F_frottement", value: "1.010 N" },
    ],
    color: "purple",
  },
  {
    step: "v",
    title: "Couple moteur",
    subtitle: "Conversion effort → couple via vis-écrou",
    formula: "C_m = (F_m × L) / (2π·η)",
    result: "C_m ≈ 0.516 mN·m ✅",
    variables: [
      { name: "L", value: "2 mm", desc: "Pas de la vis" },
      { name: "η", value: "0.8", desc: "Rendement vis-écrou" },
    ],
    color: "pink",
    isConclusion: true,
  },
];

export const tiroirsFEM = [
  {
    id: "t1-3",
    label: "Tiroirs 1 à 3",
    dims: "700 × 460 × 80 mm",
    masse: "8.25 kg total",
    pression: "251 N/m²",
    contrainte: "0.836 MPa",
    deformation: "0.25 mm",
    admissible: "8.33 MPa",
    ratio: "10.0",
    images: {
      forces: "/images/fem_forces_t1-3.png",
      vonMises: "/images/fem_vonmises_t1-3.png",
      deformation: "/images/fem_deform_t1-3.png",
    },
  },
  {
    id: "t4",
    label: "Tiroir 4",
    dims: "700 × 460 × 140 mm",
    masse: "9.15 kg total",
    pression: "278 N/m²",
    contrainte: "0.816 MPa",
    deformation: "0.14 mm",
    admissible: "8.33 MPa",
    ratio: "9.8",
    images: {
      forces: "/images/fem_forces_t4.png",
      vonMises: "/images/fem_vonmises_t4.png",
      deformation: "/images/fem_deform_t4.png",
    },
  },
];

export const electricalPowerCalc = [
  {
    label: "Consommation unitaire moteur",
    formula: "I_moteur = 1.7 A (nominal)",
    note: "Source : fiche technique NEMA 17",
    color: "blue",
  },
  {
    label: "4 moteurs simultanés",
    formula: "I_requis = N × I_m = 4 × 1.7 = 6.8 A",
    note: "Hypothèse pire cas : tous actionnés en même temps",
    color: "indigo",
  },
  {
    label: "Marge de sécurité +25%",
    formula: "I_alim = 1.25 × 6.8 = 8.5 A",
    note: "Pics de courant au démarrage, fiabilité long terme",
    color: "violet",
  },
];

export const screwValidations = [
  {
    criteria: "Force axiale",
    required: "1.08 N",
    capacity: ">> 1.08 N",
    status: "✅ OK",
    margin: "très large",
  },
  {
    criteria: "Couple moteur",
    required: "< 1 mN·m",
    capacity: "40 mN·m (NEMA 17)",
    status: "✅ OK",
    margin: "×40",
  },
  {
    criteria: "Fréquence driver",
    required: "80 kHz calculé",
    capacity: "100 kHz max (TB6560)",
    status: "✅ OK",
    margin: "+20%",
  },
  {
    criteria: "Contrainte vis",
    required: "22 kPa",
    capacity: "110 MPa (inox)",
    status: "✅ OK",
    margin: "×5 000",
  },
];

// PAGE 2 - ÉLECTRONIQUE
export const electronicComponents = [
  {
    name: "Arduino Mega 2560",
    role: "Orchestrateur principal",
    specs: ["ATMEGA2560", "16 MHz", "256 KB SRAM"],
    pins: ["40 I/O digitales", "16 entrées analogiques"],
    why: "Suffisant pour 4 moteurs + 1 RFID + 1 caméra",
  },
  {
    name: "TB6560 Driver",
    role: "Contrôle moteur stepping",
    specs: ["Micro-stepping 1/32", "Max 3.5 A/phase", "100 kHz"],
    pins: "4 (DIR, STEP, GND, +12V)",
    why: "Overcurrent protection, stabilité de couple",
  },
  {
    name: "MFRC522 RFID",
    role: "Lecture UID badge",
    specs: ["Fréquence 13.56 MHz", "SPI 3.3V", "Portée 10 cm"],
    pins: "6 (SPI)",
    why: "Identification passive, aucune batterie badge",
  },
  {
    name: "NEMA 17 Stepper",
    role: "Actionnement moteur",
    specs: ["0.4 Nm nominal", "1.7 A/phase", "200 steps/rev"],
    pins: "4 (coils A+, A-, B+, B-)",
    why: "Rapport poids/puissance optimal, feedback via encoder optionnel",
  },
];

export const arduinoAlgorithmSteps = [
  {
    phase: "SETUP",
    description: "Initialisation des broches et du bus SPI",
    key_actions: [
      "pinMode(motor_pins[], OUTPUT)",
      "SPI.begin()",
      "initRFID()",
      "HOME_ALL_DRAWERS()",
    ],
  },
  {
    phase: "LOOP",
    description: "Boucle principale — écoute des commandes",
    key_actions: [
      "if (Serial.available()) processCommand()",
      "updateMotors() // applique profil trapézoïdal",
      "checkEndstops() // sécurité",
      "checkRFID() // lecture passive",
    ],
  },
  {
    phase: "PROCESSCOMMAND",
    description: "Parser des commandes JSON du backend",
    key_actions: [
      "cmd = {'open': drawer_id, 'time': 300}",
      "validateCommand(cmd)",
      "moveMotor(drawer_id, direction, steps)",
    ],
  },
];

// PAGE 3 - LOGICIEL
export const softwareStack = [
  {
    layer: "Frontend",
    tech: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    port: "3000",
    role: "Interface utilisateur réactive",
  },
  {
    layer: "Backend",
    tech: ["Node.js", "Express", "Prisma ORM", "PostgreSQL"],
    port: "3001",
    role: "API REST, logique métier, contrôle Arduino",
  },
  {
    layer: "AI",
    tech: ["YOLOv8n-seg", "Ollama", "ChromaDB", "RAG"],
    port: "11434 (Ollama)",
    role: "Détection objets, chatbot assisté",
  },
  {
    layer: "Hardware",
    tech: ["Arduino Mega", "USB Serial", "Stepper Motors"],
    port: "COM3 (Serial)",
    role: "Exécution des actions physiques",
  },
];

export const apiRoutes = [
  {
    method: "POST",
    endpoint: "/api/auth",
    description: "Authentification par scan badge RFID",
    body: { rfid_uid: "string" },
    response: { token: "JWT", user_id: "number" },
  },
  {
    method: "GET",
    endpoint: "/api/tools",
    description: "Liste des outils disponibles avec filtres",
    params: { category: "string?", available_only: "boolean?" },
    response: [{ id: "number", name: "string", available: "boolean" }],
  },
  {
    method: "POST",
    endpoint: "/api/borrows",
    description: "Créer un nouvel emprunt",
    body: { tool_id: "number", user_id: "number" },
    response: { borrow_id: "number", drawer_id: "number", command: "JSON" },
  },
  {
    method: "GET",
    endpoint: "/api/borrows/:id",
    description: "Historique et détails d'emprunt",
    response: {
      id: "number",
      tool: "object",
      user: "object",
      status: "string",
      timestamp: "ISO8601",
    },
  },
];

// PAGE 4 - FABRICATION
export const fabricationIterations = [
  {
    phase: "Prototype 1",
    status: "❌ Échoué",
    issue: "Jeu d'assemblage trop serré — impossibilité de montage",
    solution: "Analyse des tolérances réelles vs théoriques",
    figure: "Figure 34 (DXF original)",
  },
  {
    phase: "Prototype 2",
    status: "⚠️ Partiel",
    issue: "Jeu trop grand — vibrations lors de la fermeture",
    solution: "Recalcul Box.py avec déboggage des paramètres",
    figure: "Figure 35 (prototype avec modifications)",
  },
  {
    phase: "Version finale",
    status: "✅ Production",
    issue: "Assemblage optimisé par adhérence seule",
    solution: "Mise au point des surfaces de collage",
    figure: "Figure 37 (tiroirs finaux assemblés)",
  },
];

export const lessons = [
  {
    problem: "Défauts de parallélisme ±2mm",
    cause: "Structure mécano-soudée imprécision",
    solution: "Logement écrou avec jeu fonctionnel — indépendance géométrique",
    impact: "Guidage fiable malgré écarts",
  },
  {
    problem: "Vibrations caméra détection",
    cause: "Support initial fragile",
    solution: "Renforcement du bâti support camera",
    impact: "Stabilité optique → détection plus fiable",
  },
  {
    problem: "Baisse performances IA en conditions réelles",
    cause: "Dataset entraîné en lab, tests en FabLab conditions variables",
    solution: "Recollecte images depuis caméra cible + fond blanc polyester",
    impact: "Performance réelle = performance théorique",
  },
  {
    problem: "Écarts ±2mm structure vs attente",
    cause: "Tolérance réelle de soudure",
    solution: "Validation FEM que cela n'affecte pas le guidage",
    impact: "Accepté comme acceptable — aucune redesign",
  },
];

// NAVIGATION
export const portfolioPages = [
  {
    id: "mecanique",
    title: "Dimensionnement & Mécanique",
    slug: "/portfolio/mecanique",
    icon: "⚙️",
    description: "Calculs de moteur, FEM, contraintes",
    color: "from-orange-600 to-amber-600",
  },
  {
    id: "electronique",
    title: "Architecture Électronique",
    slug: "/portfolio/electronique",
    icon: "🔌",
    description: "Arduino, drivers, RFID, schéma",
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "logiciel",
    title: "Architecture Logicielle",
    slug: "/portfolio/logiciel",
    icon: "💻",
    description: "API REST, base de données, IA",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "fabrication",
    title: "Fabrication & Prototypage",
    slug: "/portfolio/fabrication",
    icon: "🏭",
    description: "CNC, soudure, intégration finale",
    color: "from-slate-600 to-stone-600",
  },
];
