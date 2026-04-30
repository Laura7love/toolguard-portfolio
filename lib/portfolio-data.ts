// lib/portfolio-data.ts

export interface PortfolioStat {
  label: string;
  value: string;
}

export interface PortfolioPage {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  color: 'orange' | 'blue' | 'purple' | 'amber'; 
  href: string;
  gradient: string;
  stats: PortfolioStat[];
}

export const portfolioPages: PortfolioPage[] = [
  {
    id: "meca",
    title: "Mécanique & CAO",
    slug: "mecanique",
    icon: "📐",
    description: "Dimensionnement et calculs RDM.",
    color: "orange",
    href: "/portfolio/mecanique",
    gradient: "from-orange-500/20 to-stone-900",
    stats: [{ label: "Précision", value: "±0.1mm" }, { label: "Composants", value: "12" }]
  },
  {
    id: "elec",
    title: "Électronique",
    slug: "electronique",
    icon: "⚙️",
    description: "Architecture Arduino et capteurs.",
    color: "blue",
    href: "/portfolio/electronique",
    gradient: "from-blue-500/20 to-stone-900",
    stats: [{ label: "Capteurs", value: "4" }, { label: "Tension", value: "12V" }]
  },
  {
    id: "soft",
    title: "Architecture Logicielle",
    slug: "logiciel",
    icon: "💻",
    description: "Stack MERN et interface React.",
    color: "purple",
    href: "/portfolio/logiciel",
    gradient: "from-purple-500/20 to-stone-900",
    stats: [{ label: "Stack", value: "MERN" }, { label: "Endpoints", value: "8" }]
  },
  {
    id: "fab",
    title: "Fabrication & Prototypage",
    slug: "fabrication",
    icon: "🏭",
    description: "Itérations et leçons apprises.",
    color: "amber",
    href: "/portfolio/fabrication",
    gradient: "from-amber-500/20 to-stone-900",
    stats: [{ label: "Itérations", value: "3" }, { label: "Problèmes résolus", value: "4" }]
  }
];

// Fabrication data
export interface FabricationIteration {
  phase: string;
  status: string;
  issue: string;
  solution: string;
  figure: string;
}

export interface Lesson {
  problem: string;
  cause: string;
  solution: string;
  impact: string;
}

export const fabricationIterations: FabricationIteration[] = [
  {
    phase: "🔴 Prototype 1",
    status: "❌ Échoué — Structure trop flexible",
    issue: "Les tiroirs présentaient des vibrations excessives lors de l'ouverture.",
    solution: "Renforcement par profilés aluminium et ajout de guides linéaires de précision.",
    figure: "Figure 42 — Prototype 1 vs Prototype 2"
  },
  {
    phase: "🟡 Prototype 2",
    status: "⚠️ Partiel — Problèmes d'assemblage",
    issue: "Les tolérances CNC étaient trop serrées (±0.05mm imposé, impossible à atteindre).",
    solution: "Révision des tolérances à ±0.1mm, optimisation des trajectoires d'usinage.",
    figure: "Figure 43 — Ajustement des tolérances"
  },
  {
    phase: "✅ Version finale",
    status: "✅ Production — Système opérationnel",
    issue: "Pas de problème majeur : systématisation du processus de fabrication.",
    solution: "Documentation standardisée, contrôle qualité 100% en usinage CNC.",
    figure: "Figure 44 — Système final en production"
  }
];

export const lessons: Lesson[] = [
  {
    problem: "Vibrations sur les tiroirs en ouverture",
    cause: "Structure MDF insuffisamment rigide (10mm d'épaisseur sans renfort).",
    solution: "Ajout de profilés aluminium 20×20 aux coins, guide linéaire de précision.",
    impact: "Déplacement réduit de ±5mm à ±0.5mm. Gain en fiabilité : durée de vie x10"
  },
  {
    problem: "Tolérances de fabrication CNC impossibles à atteindre",
    cause: "Conception basée sur tolérances serrées (±0.05mm) sans vérification usinage.",
    solution: "Révision des dessins d'ensemble : tolérance standard ±0.1mm réaliste et robuste.",
    impact: "Taux de réussite 100% en production. Aucune pièce de rebut."
  },
  {
    problem: "Alignement moteur-vis-écrou critiquement sensible",
    cause: "Défaut d'orthogonalité de quelques dixièmes sur la monture du moteur.",
    solution: "Brochage d'un plan de référence d'usinage + vérification au comparateur digital.",
    impact: "Répétabilité du déplacement : ±0.05mm. Charge dynamique stable."
  },
  {
    problem: "Frottement excessif lors du déplacement des tiroirs",
    cause: "Lubrification insuffisante des glissières et calcul de frottement non pris en compte.",
    solution: "Application de lubrifiant polymère PTFE + surdimentation du moteur (marge x1.5).",
    impact: "Consommation énergétique stable. Aucun blocage en 500+ cycles d'essai."
  }
];