"use client"
import { motion } from "framer-motion"
import { PortfolioSectionHeader, InfoCard } from "@/components/portfolio/PortfolioComponents"
import { fabricationIterations, lessons } from "@/lib/portfolio-data"

function HeroFabrication() {
  return (
    <section className="relative min-h-screen bg-stone-950 flex items-center overflow-hidden px-8 py-24">
      {/* Grille */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(120,113,108,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(120,113,108,0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Texte */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600/20 
                         border border-amber-600/40 text-amber-500 text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            CNC · Soudure · Prototypage itératif
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-6">
            De la feuille
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              au FabLab.
            </span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
            Le meilleur modèle CAD ne vaut rien s&apos;il ne passe pas par la découpe CNC et la soudure. Voici comment nous avons itéré vers la production, problème après problème.
          </p>

          <div className="flex gap-6">
            {[
              { label: "Itérations", value: "3" },
              { label: "Problèmes résolus", value: "4" },
              { label: "Tolérances CNC", value: "±0.1mm" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-amber-400 font-mono font-bold text-2xl">{stat.value}</div>
                <div className="text-neutral-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before/After visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 text-center h-80 flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">📐</div>
            <div className="text-neutral-400 text-sm">SolidWorks</div>
            <p className="text-neutral-600 text-xs mt-2">Parfait sur l&apos;écran</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 text-center h-80 flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">🏭</div>
            <div className="text-neutral-400 text-sm">Réalité physique</div>
            <p className="text-neutral-600 text-xs mt-2">±2mm d&apos;écarts acceptés</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function IterationsSection() {
  return (
    <section className="py-24 bg-stone-900 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="3 itérations"
          title="Le chemin de la production"
          subtitle="Chaque prototype a enseigné quelque chose"
        />

        <div className="space-y-6 mt-12">
          {fabricationIterations.map((iteration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`relative p-8 rounded-2xl border-2 ${
                iteration.status.includes("✅")
                  ? "bg-emerald-500/10 border-emerald-500/50"
                  : iteration.status.includes("⚠️")
                    ? "bg-amber-500/10 border-amber-500/50"
                    : "bg-red-500/10 border-red-500/50"
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="text-3xl mt-1">{iteration.status.split(" ")[0]}</div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-1">{iteration.phase}</h4>
                  <p className="text-neutral-400 text-sm mb-3">{iteration.status}</p>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-neutral-500">Problem:</span>
                      <p className="text-neutral-300">{iteration.issue}</p>
                    </div>
                    <div>
                      <span className="text-neutral-500">Solution:</span>
                      <p className="text-neutral-300">{iteration.solution}</p>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-neutral-500 font-mono">{iteration.figure}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LessonsSection() {
  return (
    <section className="py-24 bg-stone-950 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="Ce qu&apos;on a appris — souvent ignoré en portfolio"
          title="Les vrais problèmes terrain"
          subtitle="La différence entre un projet académique et un système en production"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {lessons.map((lesson, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 hover:border-amber-500/30 transition-colors"
            >
              <div className="space-y-3">
                <div>
                  <div className="text-amber-400 font-semibold text-sm mb-1">Problème</div>
                  <p className="text-neutral-300 text-sm">{lesson.problem}</p>
                </div>

                <div className="border-t border-neutral-700 pt-3">
                  <div className="text-neutral-500 font-semibold text-xs mb-1 uppercase">Cause</div>
                  <p className="text-neutral-400 text-xs">{lesson.cause}</p>
                </div>

                <div className="border-t border-neutral-700 pt-3">
                  <div className="text-emerald-400 font-semibold text-xs mb-1 uppercase">Solution</div>
                  <p className="text-neutral-400 text-xs">{lesson.solution}</p>
                </div>

                <div className="border-t border-neutral-700 pt-3">
                  <div className="text-cyan-400 font-semibold text-xs mb-1 uppercase">Impact</div>
                  <p className="text-neutral-300 text-xs italic">{lesson.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <InfoCard
          icon="🧠"
          title="Maturité d&apos;ingénieur"
          description="Savoir identifier, documenter et résoudre les problèmes terrain — c&apos;est ça qui distingue un prototype dans un garage d&apos;un système en production. ToolGuard n&apos;a pas échappé à ces itérations."
          color="orange"
        />
      </div>
    </section>
  )
}

function CompletionSection() {
  return (
    <section className="py-24 bg-stone-900 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="État final"
          title="Le système complet"
          subtitle="Structure soudée · Tiroirs assemblés · Électronique intégrée · IA en production"
        />

        <motion.div
          className="mt-12 p-8 bg-neutral-900/50 border border-neutral-700 rounded-2xl text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="text-6xl mb-4">🤖</div>
          <h3 className="text-white text-2xl font-bold mb-3">ToolGuard en production</h3>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            Structure mécano-soudée testée. 4 tiroirs CNC assemblés. Arduino Mega avec drivers TB6560. Caméra Logitech montée. Modèle YOLOv8n-seg déployé. Backend Node.js et PostgreSQL prêts. Interface React 19 responsive. Le système est opérationnel et en cours de testing au FabLab.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Mécanique ✅",
              "Électronique ✅",
              "Logiciel ✅",
              "IA ✅",
              "Fabrication ✅",
            ].map((item) => (
              <span key={item} className="px-4 py-2 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function FabricationPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <HeroFabrication />
      <IterationsSection />
      <LessonsSection />
      <CompletionSection />

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-white/5 text-center">
        <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold">
          ToolGuard · Système complet de la conception à la production
        </p>
      </footer>
    </main>
  )
}
