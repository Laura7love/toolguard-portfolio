"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioPages } from "@/lib/portfolio-data"
import type { PortfolioPage, PortfolioStat } from "@/lib/portfolio-data"

const HeroStats = [
  { label: "Sections", value: "20+" },
  { label: "Composants", value: "7" },
  { label: "Code", value: "2000+" },
  { label: "Précision", value: "±0.1mm" },
];

export default function PortfolioPage() {
  // Mapping des classes Tailwind pour éviter les erreurs de compilation dynamique
  const colorMap: Record<string, string> = {
    orange: "hover:border-orange-500/50 text-orange-400 bg-orange-400",
    blue: "hover:border-blue-500/50 text-blue-400 bg-blue-400",
    purple: "hover:border-purple-500/50 text-purple-400 bg-purple-400",
    amber: "hover:border-amber-500/50 text-amber-400 bg-amber-400",
  };

  return (
    <main className="bg-stone-950 min-h-screen text-white">
      {/* --- SECTION HERO --- */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-8">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-block px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-[10px] font-bold uppercase tracking-widest"
          >
            Engineering Showcase
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase italic mb-6 leading-none"
          >
            ToolGuard <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
              Technical Hub
            </span>
          </motion.h1>
          
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
            Documentation détaillée de l&apos;ingénierie derrière le système ToolGuard. 
            De la simulation mécanique au déploiement logiciel.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {HeroStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-mono font-bold text-orange-500">{s.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION GRILLE DES PILIERS --- */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioPages.map((page: PortfolioPage) => (
            <Link href={page.href} key={page.id}>
              <motion.div 
                whileHover={{ y: -8 }}
                className={`relative group h-80 rounded-[40px] border border-white/5 overflow-hidden bg-gradient-to-br ${page.gradient} p-8 flex flex-col justify-between transition-all ${colorMap[page.color].split(' ')[0]}`}
              >
                <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                    {page.icon}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 uppercase italic">{page.title}</h3>
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-2">{page.description}</p>
                  
                  <div className="flex gap-6">
                    {page.stats.map((stat: PortfolioStat) => (
                      <div key={stat.label}>
                        <div className={`text-sm font-bold ${colorMap[page.color].split(' ')[1]}`}>
                          {stat.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-tighter text-neutral-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Badge Interactif au survol */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                   <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase text-black ${colorMap[page.color].split(' ')[2]}`}>
                     Dossier Technique →
                   </div>
                </div>

                {/* Effet de brillance en arrière-plan */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* --- FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-neutral-600 text-[10px] uppercase tracking-[0.5em] font-medium">
          Jelyne Laura Wafo Wendzi — EMINES UM6P — 2026
        </p>
      </footer>
    </main>
  )
}