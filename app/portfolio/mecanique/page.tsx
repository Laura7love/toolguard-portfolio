"use client"
import { motion } from "framer-motion"
import { portfolioPages } from "@/lib/portfolio-data"
import type { PortfolioStat } from "@/lib/portfolio-data"

export default function MecaniquePage() {
  const data = portfolioPages.find(p => p.id === "meca");
  if (!data) return null;

  return (
    <main className="bg-stone-950 min-h-screen text-white">
      <section className="relative min-h-screen flex items-center px-8 border-b border-white/5">
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-8xl font-black leading-[0.9] mb-8 italic uppercase italic">
              Zéro <br /><span className="text-orange-500">Défaillance</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
              {data.description}
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 p-10 rounded-[40px]">
              <h3 className="text-orange-500 font-bold uppercase text-sm mb-6 tracking-widest italic">Dimensionnement & Physique</h3>
              <div className="space-y-4 font-mono text-sm text-neutral-400">
                <p className="p-4 bg-black/40 rounded-xl border-l-2 border-orange-500">C_total = (J_charge * α) + C_friction</p>
                <p className="p-4 bg-black/40 rounded-xl border-l-2 border-orange-500">Validation RDM : Facteur de sécurité 2.5</p>
              </div>
            </div>
            <div className="flex gap-4">
              {data.stats.map((stat: PortfolioStat) => (
                <div key={stat.label} className="flex-1 bg-orange-500 p-8 rounded-[30px] text-black text-center">
                  <div className="text-4xl font-black">{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black italic uppercase mb-12 text-orange-500">Leçons du terrain</h2>
        <div className="space-y-12">
          <div className="pl-8 border-l border-white/10">
            <h4 className="text-xl font-bold mb-4 uppercase italic">Défauts de parallélisme</h4>
            <p className="text-neutral-400">Résolution : Logement d&apos;écrou avec jeu fonctionnel pour absorber les écarts de ±2mm de la structure.</p>
          </div>
          <div className="pl-8 border-l border-white/10">
            <h4 className="text-xl font-bold mb-4 uppercase italic">Vibrations Caméra</h4>
            <p className="text-neutral-400">Résolution : Renforcement du support en aluminium et ajout d&apos;amortisseurs polymères.</p>
          </div>
        </div>
      </section>
    </main>
  );
}