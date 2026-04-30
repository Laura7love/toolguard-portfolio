"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader, InsightCard } from "./SectionHeader"
import { datasetStats } from "@/lib/ai-data"

function StatCounter({ value, label, icon }: { value: number; label: string; icon: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text 
                     bg-gradient-to-r from-indigo-400 to-cyan-400 mb-2">
        {value}
      </div>
      <div className="text-neutral-400 text-sm">{icon} {label}</div>
    </motion.div>
  )
}

export function DatasetSection() {
  return (
    <section className="py-24 bg-neutral-950 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Dataset · Annotation Polygon"
          title="Chaque image compte"
          subtitle="1 888 images minutieusement annotées pour couvrir la réalité du FabLab."
        />

        {/* Grid de stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 my-16">
          {datasetStats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Graphique placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-neutral-900 border border-neutral-700 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-white font-bold mb-2">Distribution des classes</h3>
          <p className="text-neutral-400 text-sm mb-6">
            ⚠️ Déséquilibre intentionnel : les tournevis sont les outils les plus fréquemment empruntés.
          </p>
          <div className="bg-neutral-800 rounded-lg p-6 h-80 flex items-center justify-center">
            <Image 
              src="/images/PR_curve.png" 
              alt="Distribution des classes - Courbe Précision-Rappel" 
              width={500} 
              height={320} 
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Callout insight */}
        <InsightCard
          icon="💡"
          title="Pourquoi la segmentation par polygones ?"
          content="Les bounding boxes rectangulaires échouent quand deux outils se chevauchent dans le tiroir. La segmentation par polygones permet à YOLO d'apprendre la forme exacte de chaque outil — critique pour distinguer un tournevis plat d'un tournevis américain posés côte à côte."
        />
      </div>
    </section>
  )
}