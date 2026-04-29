"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { PortfolioSectionHeader, EquationDisplay, ForceFlow, MetricBar, TabCard, InfoCard } from "@/components/portfolio/PortfolioComponents"
import {
  mechanicsHeroStats,
  engineeringChallenges,
  motorCalculationSteps,
  tiroirsFEM,
  electricalPowerCalc,
  screwValidations,
} from "@/lib/portfolio-data"

function HeroMechanics() {
  return (
    <section className="relative min-h-screen bg-stone-950 flex items-center overflow-hidden px-8 py-24">
      {/* Grille animée */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Texte */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 
                         border border-orange-500/30 text-orange-400 text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Mécanique · Électrique · Simulation FEM
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-6">
            Zéro défaillance.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Calculé.
            </span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
            Chaque vis, chaque moteur, chaque épaisseur de tiroir a été dimensionné par le calcul avant d&apos;être fabriqué. Voici comment on passe d&apos;une contrainte fonctionnelle à une pièce physique validée.
          </p>

          {/* Stats pills */}
          <div className="space-y-3">
            {mechanicsHeroStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-4 py-2 bg-neutral-800/50 rounded-full border border-neutral-700 
                           flex justify-between items-center text-sm"
              >
                <span className="text-neutral-400">{stat.label}</span>
                <span className="text-orange-400 font-mono font-bold">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schéma placeholder */}
        <motion.div
          initial={{ opacity: 0, rotateY: -20 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
          className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-96 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-5xl mb-4">⚙️</div>
            <p className="text-neutral-500 text-sm">[Vue éclatée système vis-écrou]</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function EngineeringChallengesSection() {
  const [active, setActive] = useState("motor")

  return (
    <section className="py-24 bg-stone-900 px-8">
      <div className="max-w-7xl mx-auto">
        <PortfolioSectionHeader
          badge="3 problèmes de dimensionnement"
          title="Chaque pièce, une question d'ingénieur"
        />

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {engineeringChallenges.map((challenge) => (
            <TabCard
              key={challenge.id}
              isActive={active === challenge.id}
              onClick={() => setActive(challenge.id)}
              icon={challenge.icon}
              title={challenge.title}
              description={challenge.question.substring(0, 40) + "..."}
            />
          ))}
        </div>

        {/* Contenu actif */}
        <AnimatePresence mode="wait">
          {engineeringChallenges.filter(c => c.id === active).map((challenge) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Gauche */}
              <div className="space-y-6">
                <div className="text-5xl">{challenge.icon}</div>

                <div>
                  <h3 className="text-white text-2xl font-bold">{challenge.title}</h3>
                  <p className="text-orange-400 mt-2 italic text-sm">{challenge.question}</p>
                </div>

                <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                  <div className="text-xs text-orange-400 font-mono mb-1">RÉSULTAT</div>
                  <div className="text-white font-mono font-bold text-lg">{challenge.result}</div>
                </div>

                <p className="text-neutral-300 leading-relaxed text-sm">{challenge.insight}</p>
              </div>

              {/* Droite */}
              <div className="space-y-6">
                <EquationDisplay equations={challenge.equations} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

function MotorCalculationSection() {
  return (
    <section className="py-24 bg-stone-950 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="Dimensionnement moteur — Calcul complet"
          title="5 étapes. 1 moteur validé"
          subtitle="De l&apos;accélération du tiroir au couple minimal requis"
        />

        {/* Schéma forces placeholder */}
        <motion.div
          className="my-12 p-8 bg-neutral-900/50 rounded-2xl border border-neutral-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="text-neutral-400 text-sm font-mono mb-4">Figure 15 — Schéma des forces appliquées</div>
          <div className="h-64 flex items-center justify-center bg-neutral-800 rounded-lg">
            <p className="text-neutral-500">[Schéma SVG des forces]</p>
          </div>
        </motion.div>

        {/* Étapes */}
        <div className="space-y-4">
          {motorCalculationSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`p-6 rounded-2xl border transition-all ${
                step.isConclusion
                  ? "bg-orange-500/10 border-orange-500/40"
                  : "bg-neutral-900/50 border-neutral-800"
              }`}
            >
              <div className="flex items-start gap-6">
                {/* Numéro */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold 
                                bg-${step.color}-500/20 text-${step.color}-400 shrink-0`}>
                  {step.step}
                </div>

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Titre */}
                  <div>
                    <h4 className="text-white font-semibold">{step.title}</h4>
                    <p className="text-neutral-500 text-xs mt-1">{step.subtitle}</p>
                  </div>

                  {/* Formule */}
                  <div className="font-mono text-xs">
                    <div className="text-neutral-500 mb-1">FORMULE</div>
                    <div className="text-cyan-300 bg-neutral-800 p-3 rounded-lg overflow-x-auto">
                      {step.formula}
                    </div>
                  </div>

                  {/* Résultat */}
                  <div>
                    <div className="text-neutral-500 text-xs mb-1">RÉSULTAT</div>
                    <div className={`font-mono font-bold text-lg mb-2 ${
                      step.isConclusion ? "text-orange-400" : "text-white"
                    }`}>
                      {step.result}
                    </div>
                    <div className="space-y-1">
                      {step.variables.map((v) => (
                        <div key={v.name} className="text-xs text-neutral-500 font-mono">
                          <span className="text-neutral-300">{v.name}</span> = <span className="text-amber-400">{v.value}</span>
                          {v.desc && <span className="text-neutral-600"> ({v.desc})</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <InfoCard
          icon="✅"
          title="Validation : NEMA 17 — Couple nominal 40 mN·m"
          description="Le moteur sélectionné développe 40× le couple minimal requis. Cette marge garantit le déplacement des tiroirs même en cas de charge excentrée, de légère désalignement de vis, ou de variation de frottement due à l&apos;usure."
          color="emerald"
        />
      </div>
    </section>
  )
}

function FEMSection() {
  const [activeTiroir, setActiveTiroir] = useState("t1-3")
  const current = tiroirsFEM.find(t => t.id === activeTiroir)!

  return (
    <section className="py-24 bg-stone-900 px-8">
      <div className="max-w-7xl mx-auto">
        <PortfolioSectionHeader
          badge="Simulation FEM · SolidWorks · Matériau MDF"
          title="Le tiroir sous charge maximale"
          subtitle="Simulation en ouverture totale — configuration la plus défavorable"
        />

        {/* Sélecteur tiroir */}
        <div className="flex gap-3 mb-8">
          {tiroirsFEM.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTiroir(t.id)}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                activeTiroir === t.id
                  ? "bg-orange-500 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Paramètres */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Paramètres de simulation</h4>

            {[
              { label: "Dimensions", value: current.dims },
              { label: "Masse totale", value: current.masse },
              { label: "Pression surfacique", value: current.pression },
            ].map((p) => (
              <div key={p.label} className="flex justify-between p-3 bg-neutral-800/50 rounded-lg">
                <span className="text-neutral-400 text-xs">{p.label}</span>
                <span className="text-white font-mono text-xs">{p.value}</span>
              </div>
            ))}

            {/* Jauge */}
            <div className="p-4 bg-neutral-800/50 rounded-xl mt-6">
              <MetricBar
                label="Contrainte vs admissible"
                value={parseFloat(current.contrainte)}
                unit="MPa"
                max={parseFloat(current.admissible)}
                color="emerald"
              />
            </div>

            {/* Déformation */}
            <InfoCard
              icon="📏"
              title="Déformation maximale (axe Z)"
              description={`${current.deformation} — négligeable au regard des exigences fonctionnelles`}
              color="blue"
            />
          </div>

          {/* Visualisation FEM */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-900 h-96 flex items-center justify-center"
            >
              <p className="text-neutral-500 text-sm">[Simulation FEM — {current.label}]</p>
            </motion.div>
          </div>
        </div>

        {/* Conclusion */}
        <motion.div
          className="mt-12 p-8 bg-neutral-900/50 rounded-2xl border border-neutral-700 
                     grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {[
            {
              title: "Domaine élastique",
              desc: "Les deux configurations restent largement dans le domaine élastique du MDF.",
              icon: "✅"
            },
            {
              title: "Épaisseur validée",
              desc: "10 mm retenu comme épaisseur standard pour tous les tiroirs.",
              icon: "📐"
            },
            {
              title: "Marge ×9.97",
              desc: "Facteur de sécurité effectif bien au-delà du FS=3 imposé.",
              icon: "🛡️"
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ElectricalSection() {
  return (
    <section className="py-24 bg-stone-950 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="Dimensionnement électrique · 12V DC"
          title="L'alimentation ne doit jamais être le maillon faible"
        />

        {/* Cascade de calcul */}
        <div className="mt-12 space-y-6 max-w-2xl mx-auto">
          {electricalPowerCalc.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-neutral-900/50 border border-neutral-700 rounded-xl"
            >
              <div className="flex justify-between items-start gap-4 mb-3">
                <h4 className="text-white font-semibold">{step.label}</h4>
                <span className={`text-2xl font-black bg-${step.color}-500/20 text-${step.color}-400 
                                w-8 h-8 rounded-full flex items-center justify-center text-xs`}>
                  {i + 1}
                </span>
              </div>
              <div className="font-mono text-cyan-300 bg-neutral-800 p-3 rounded-lg text-sm mb-2">
                {step.formula}
              </div>
              <p className="text-neutral-400 text-xs italic">{step.note}</p>
            </motion.div>
          ))}

          {/* Résultat final */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-6 bg-orange-500/10 border-2 border-orange-500/50 rounded-xl"
          >
            <div className="text-center">
              <div className="text-orange-400 text-xs font-mono mb-2">ALIMENTATION SÉLECTIONNÉE</div>
              <div className="text-white text-3xl font-bold font-mono mb-2">12V — 10A</div>
              <div className="text-neutral-400 text-sm">Disponible au FabLab · Marge effective : +17.6%</div>
            </div>
          </motion.div>
        </div>

        {/* Tableau validations */}
        <div className="mt-12">
          <h4 className="text-white font-semibold mb-4">Validations des contraintes</h4>
          <div className="space-y-3">
            {screwValidations.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-3 p-4 bg-neutral-900/50 rounded-lg border border-neutral-700"
              >
                <div>
                  <div className="text-neutral-500 text-xs mb-1">Critère</div>
                  <div className="text-white text-sm font-semibold">{v.criteria}</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">Requis</div>
                  <div className="text-cyan-300 font-mono text-xs">{v.required}</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">Capacité</div>
                  <div className="text-amber-400 font-mono text-xs">{v.capacity}</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">Status</div>
                  <div className="text-emerald-400 text-sm font-bold">{v.status}</div>
                </div>
                <div>
                  <div className="text-neutral-500 text-xs mb-1">Marge</div>
                  <div className="text-white font-mono text-xs">{v.margin}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MecaniquerPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <HeroMechanics />
      <EngineeringChallengesSection />
      <MotorCalculationSection />
      <FEMSection />
      <ElectricalSection />

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-white/5 text-center">
        <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold">
          ToolGuard · Dimensionnement complet validé par simulation FEM
        </p>
      </footer>
    </main>
  )
}
