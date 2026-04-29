"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioPages } from "@/lib/portfolio-data"
// On importe les types avec des noms différents des fonctions
import type { PortfolioPage as ProjectData, PortfolioStat } from "@/lib/portfolio-data"

export default function PortfolioHub() {
  const colorMap: Record<string, string> = {
    orange: "hover:border-orange-500/50 text-orange-400 bg-orange-500",
    blue: "hover:border-blue-500/50 text-blue-400 bg-blue-500",
    purple: "hover:border-purple-500/50 text-purple-400 bg-purple-500",
    amber: "hover:border-amber-500/50 text-amber-400 bg-amber-400",
  };

  return (
    <main className="bg-stone-950 min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative z-10 text-center max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10vw] md:text-[8vw] font-black uppercase italic leading-none mb-8"
          >
            ToolGuard <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Portfolio</span>
          </motion.h1>
        </div>
      </section>

      {/* Grille des Piliers */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioPages.map((page: ProjectData) => ( // On utilise ProjectData ici
            <Link href={page.href} key={page.id} className="group">
              <motion.div 
                whileHover={{ y: -10 }}
                className={`relative h-[500px] rounded-[50px] border border-white/5 bg-gradient-to-br ${page.gradient} p-12 flex flex-col justify-between transition-all duration-500 ${colorMap[page.color]?.split(' ')[0]}`}
              >
                <div className="text-8xl group-hover:scale-110 transition-transform duration-500">{page.icon}</div>
                <div>
                  <h3 className="text-5xl font-black italic uppercase leading-none mb-6">{page.title}</h3>
                  <div className="flex gap-8 border-t border-white/10 pt-8">
                    {page.stats.map((stat: PortfolioStat) => (
                      <div key={stat.label}>
                        <div className={`text-2xl font-black ${colorMap[page.color]?.split(' ')[1]}`}>{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}