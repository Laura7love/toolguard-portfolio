"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { portfolioPages } from "@/lib/portfolio-data"

function HeroPortfolio() {
  return (
    <section className="relative min-h-screen bg-stone-950 flex items-center overflow-hidden px-8 py-24">
      {/* Grille animée */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(249,115,22,0.2) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 
                     border border-orange-500/30 text-orange-400 text-xs font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Portfolio technique complet
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-7xl md:text-8xl font-black text-white leading-none mb-6"
        >
          ToolGuard
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
            Système complet
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          De la mécanique de précision à l&apos;IA de détection, en passant par l&apos;électronique et le logiciel. 
          Voici comment un projet FabLab se déploie sur tous les étages d&apos;ingénierie.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {[
            "Mécanique · CAO · FEM",
            "Électronique · Arduino",
            "Logiciel · React + Node",
            "IA · YOLOv8 · Segmentation",
          ].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-300 text-xs font-mono">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Statistiques */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Sections", value: "20+" },
            { label: "Composants électroniques", value: "7" },
            { label: "Lignes de code", value: "2000+" },
            { label: "Précision", value: "±0.1mm" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-orange-400 font-mono font-bold text-xl">{stat.value}</div>
              <div className="text-neutral-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

function PortfolioGrid() {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-stone-900 to-stone-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Les 4 piliers du projet
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Chaque discipline d&apos;ingénierie déploie sa complexité. Voici le détail complet de chacune.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolioPages.map((page, i) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group h-80"
            >
              <Link href={page.href}>
                <div className={`relative w-full h-full rounded-2xl border border-neutral-700 
                               overflow-hidden cursor-pointer transition-all duration-300
                               hover:border-${page.color}-500/50 hover:shadow-2xl
                               bg-gradient-to-br ${page.gradient}`}>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 z-10" />

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-between p-8">
                    {/* Icon */}
                    <div className={`text-6xl group-hover:scale-125 transition-transform duration-300`}>
                      {page.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2">{page.title}</h3>
                      <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                        {page.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        <span className={`text-${page.color}-400`}>Explorer</span>
                        <span className="text-lg">→</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 text-xs">
                      {page.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className={`text-${page.color}-400 font-bold`}>{stat.value}</div>
                          <div className="text-neutral-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Background shine effect */}
                  <motion.div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                      backgroundSize: "200% 200%",
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className="py-24 px-8 bg-stone-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-white mb-4">
            Le parcours du projet
          </h2>
          <p className="text-neutral-400">
            De l&apos;idée au système opérationnel
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              icon: "📐",
              title: "Phase 1 : Conception mécanique",
              desc: "CAO SolidWorks, simulations FEM, dimensionnement moteur et électrique",
              pages: ["Mécanique"],
            },
            {
              icon: "⚙️",
              title: "Phase 2 : Architecture électronique",
              desc: "Sélection composants, schéma électrique, prototypage Arduino",
              pages: ["Électronique"],
            },
            {
              icon: "💻",
              title: "Phase 3 : Développement logiciel",
              desc: "Stack React/Node, base de données, API REST, intégration IA",
              pages: ["Logiciel"],
            },
            {
              icon: "🏭",
              title: "Phase 4 : Fabrication et mise en production",
              desc: "Usinage CNC, soudure, assemblage, tests et déploiement",
              pages: ["Fabrication"],
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6 p-6 bg-neutral-900/50 rounded-xl border border-neutral-700 hover:border-orange-500/30 transition-colors"
            >
              <div className="text-3xl flex-shrink-0">{phase.icon}</div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-lg mb-1">{phase.title}</h4>
                <p className="text-neutral-400 text-sm mb-3">{phase.desc}</p>
                <div className="flex gap-2">
                  {phase.pages.map((page) => (
                    <span key={page} className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full font-mono">
                      {page}
                    </span>
                  ))}
                </div>
              </div>
              {i < 3 && (
                <div className="text-orange-400 text-2xl flex-shrink-0">↓</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-black text-white">
            Plongez dans chaque discipline
          </h2>
          <p className="text-neutral-400 text-lg">
            Chaque page du portfolio est un guide complet : formules, schémas, code, 
            leçons apprises. Pas de buzzwords. Juste de l&apos;ingénierie rigoureuse.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <Link href="/portfolio/mecanique" className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
              Commencer par la Mécanique →
            </Link>
            <a href="#" className="px-8 py-3 border border-neutral-700 text-white font-bold rounded-lg hover:border-white transition-colors">
              Voir sur GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function PortfolioPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <HeroPortfolio />
      <PortfolioGrid />
      <TimelineSection />
      <CTASection />

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-white/5 text-center">
        <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold">
          ToolGuard · Portfolio technique complet
        </p>
      </footer>
    </main>
  )
}
