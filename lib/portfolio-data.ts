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
  }
];