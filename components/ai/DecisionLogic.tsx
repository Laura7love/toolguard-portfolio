// components/ai/DecisionLogic.tsx
"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "./SectionHeader"
import { decisionScenarios } from "@/lib/ai-data"

function ScenarioButton({
  scenario,
  isActive,
  onClick
}: {
  scenario: (typeof decisionScenarios)[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl transition-all ${
        isActive
          ? "bg-indigo-500 text-white"
          : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
      }`}
    >
      <div className="text-2xl mb-2">{scenario.icon}</div>
      <div className="font-semibold text-sm">{scenario.scenario}</div>
      <div className="text-xs opacity-75 mt-1">{scenario.fc}</div>
    </motion.button>
  )
}

function DecisionFlowDisplay({ scenario }: { scenario: (typeof decisionScenarios)[0] }) {
  const colorMap: Record<string, string> = {
    emerald: "border-emerald-500/30 bg-emerald-500/5",
    amber: "border-amber-500/30 bg-amber-500/5",
    red: "border-red-500/30 bg-red-500/5",
    cyan: "border-cyan-500/30 bg-cyan-500/5"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`border rounded-2xl p-8 ${colorMap[scenario.color]}`}
    >
      <h3 className="text-white font-bold text-xl mb-4">{scenario.scenario}</h3>
      <p className="text-neutral-400 text-sm mb-6">
        <strong>Déclencheur :</strong> {scenario.trigger}
      </p>

      <div className="space-y-3">
        {scenario.steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-3 items-start"
          >
            <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center 
                          text-white text-xs font-bold flex-shrink-0">
              {i + 1}
            </div>
            <p className="text-neutral-300 text-sm pt-0.5">{step}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function DecisionLogic() {
  const [activeScenario, setActiveScenario] = useState("borrow-ok")

  return (
    <section className="py-24 bg-neutral-900 px-8" id="decision-logic">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Logique de Décision · FC4 · FC6"
          title="L'IA observe. Le système décide."
          subtitle="4 scénarios couverts — de l'emprunt nominal à la détection d'anomalie."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Sélecteur de scénarios */}
          <div className="space-y-3">
            {decisionScenarios.map((s) => (
              <ScenarioButton
                key={s.id}
                scenario={s}
                isActive={activeScenario === s.id}
                onClick={() => setActiveScenario(s.id)}
              />
            ))}
          </div>

          {/* Affichage du flow animé */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <DecisionFlowDisplay
                key={activeScenario}
                scenario={decisionScenarios.find(s => s.id === activeScenario)!}
              />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}