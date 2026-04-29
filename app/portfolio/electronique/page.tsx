"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { PortfolioSectionHeader, ComponentCard, TabCard, InfoCard } from "@/components/portfolio/PortfolioComponents"
import { electronicComponents, arduinoAlgorithmSteps } from "@/lib/portfolio-data"

function HeroElectronics() {
  return (
    <section className="relative min-h-screen bg-blue-950 flex items-center overflow-hidden px-8 py-24">
      {/* Grille */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Texte */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 
                         border border-blue-500/30 text-blue-400 text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Arduino · Drivers · RFID · Serial
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-6">
            Un Arduino
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              au cœur.
            </span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
            7 composants. 4 moteurs. 1 Arduino Mega 2560 qui les orchestre tous. Voici la logique électronique qui transforme les commandes backend en mouvements précis du FabLab.
          </p>

          <div className="space-y-3">
            {[
              "Communication bidirectionnelle sécurisée",
              "Profil trapézoïdal intégré pour accélération douce",
              "Détection d&apos;anomalies en temps réel",
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 text-neutral-300 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schéma placeholder */}
        <motion.div
          initial={{ opacity: 0, rotateX: -20 }}
          animate={{ opacity: 1, rotateX: 0 }}
          className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-96 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-5xl mb-4">🔌</div>
            <p className="text-neutral-500 text-sm">[Schéma électrique global]</p>
            <p className="text-neutral-600 text-xs mt-2">Figure 21 — Connexions Arduino</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ComponentsSection() {
  return (
    <section className="py-24 bg-blue-900 px-8">
      <div className="max-w-7xl mx-auto">
        <PortfolioSectionHeader
          badge="7 composants essentiels"
          title="La liste des composants — pas un tableau froid"
          subtitle="Chaque élément présenté avec son rôle, ses connexions, et pourquoi ce choix"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {electronicComponents.map((component) => (
            <ComponentCard
              key={component.name}
              name={component.name}
              role={component.role}
              specs={component.specs}
              pins={component.pins}
              why={component.why}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArduinoAlgorithmSection() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>("SETUP")

  return (
    <section className="py-24 bg-blue-950 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="Algorithme Arduino"
          title="3 phases de contrôle"
          subtitle="Setup → Loop → ProcessCommand — le cœur du système"
        />

        <div className="space-y-4">
          {arduinoAlgorithmSteps.map((step) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border border-neutral-700 rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => setExpandedPhase(
                  expandedPhase === step.phase ? null : step.phase
                )}
                className={`w-full p-6 text-left transition-all ${
                  expandedPhase === step.phase
                    ? "bg-blue-500 text-white"
                    : "bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-bold">{step.phase}</h4>
                    <p className="text-sm opacity-75 mt-1">{step.description}</p>
                  </div>
                  <span className="text-xl">
                    {expandedPhase === step.phase ? "−" : "+"}
                  </span>
                </div>
              </motion.button>

              <AnimatePresence>
                {expandedPhase === step.phase && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-0 border-t border-neutral-700 bg-neutral-900/30"
                  >
                    <div className="space-y-2 mt-4">
                      {step.key_actions.map((action, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="font-mono text-xs text-cyan-300 p-2 bg-neutral-800 rounded"
                        >
                          {action}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Callout sécurité */}
        <InfoCard
          icon="🛡️"
          title="Sécurités intégrées"
          description="Stop d'urgence global (cmd 's') · Capteurs fin de course optiques · Profil trapézoïdal (pas de à-coup) · HOME_MAX_STEPS (détection de blocage) · CLOSE_EXTRA_STEPS (marge de 8mm)"
          color="blue"
        />
      </div>
    </section>
  )
}

function RFIDSection() {
  return (
    <section className="py-24 bg-blue-900 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="Identification sans friction"
          title="Le lecteur RFID — passif et fiable"
          subtitle="Pas de batterie, pas de synchronisation, juste du SPI et de la logique"
        />

        {/* Flow diagram */}
        <div className="space-y-4 mt-12">
          {[
            { label: "Badge", desc: "Approche du lecteur MFRC522", icon: "🆔" },
            { label: "Lecteur", desc: "Détecte le champ RF du badge", icon: "📡" },
            { label: "SPI", desc: "Communication vers Arduino (CS, MOSI, MISO, SCK)", icon: "🔗" },
            { label: "Arduino", desc: "Lit UID du badge (4 bytes)", icon: "💾" },
            { label: "Serial", desc: "Envoie UID au backend en JSON", icon: "📤" },
            { label: "Backend", desc: "Authentification + logique métier", icon: "✅" },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-lg">
                {step.icon}
              </div>
              <div className="flex-1 p-4 bg-neutral-900/50 rounded-lg border border-neutral-700">
                <div className="text-white font-semibold text-sm">{step.label}</div>
                <p className="text-neutral-400 text-xs mt-1">{step.desc}</p>
              </div>
              {i < 5 && (
                <div className="text-cyan-400 text-2xl">→</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <InfoCard
          icon="💡"
          title="Responsabilités bien séparées"
          description="L&apos;Arduino lit le badge, rien de plus. Toute la logique d&apos;authentification et d&apos;autorisation est côté backend. Cela permet des mises à jour sans reprogrammer le microcontrôleur."
          color="blue"
        />
      </div>
    </section>
  )
}

export default function ElectroniquePage() {
  return (
    <main className="bg-blue-950 min-h-screen">
      <HeroElectronics />
      <ComponentsSection />
      <ArduinoAlgorithmSection />
      <RFIDSection />

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-white/5 text-center">
        <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold">
          ToolGuard · Architecture électronique complète et documentée
        </p>
      </footer>
    </main>
  )
}
