"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader, MetricCard, InsightCard } from "./SectionHeader"
import { trainingMetrics } from "@/lib/ai-data"

export function TrainingResults() {
  return (
    <section className="py-24 bg-neutral-950 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Training Results · YOLOv8n-seg · 100 epochs"
          title="Les métriques ne mentent pas"
          subtitle="mAP@50: 95.6% — mAP@50-95: 91.8% · Sélectionné après comparaison de 4 architectures YOLO."
        />

        {/* Grille des métriques clés */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
          {trainingMetrics.map((metric) => (
            <MetricCard key={metric.metric} {...metric} />
          ))}
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          
          {/* F1 Curve */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 overflow-hidden"
          >
            <h3 className="text-white font-semibold mb-2">F1-Confidence Curve</h3>
            <p className="text-neutral-400 text-xs mb-4">
              Seuil optimal — équilibre précision/rappel
            </p>
            <div className="bg-black/30 rounded-lg p-4 h-80 flex items-center justify-center">
              <Image 
                src="/images/F1_curve.png" 
                alt="F1 Curve" 
                width={400} 
                height={300} 
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* PR Curve */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 overflow-hidden"
          >
            <h3 className="text-white font-semibold mb-2">Precision-Recall Curve</h3>
            <p className="text-neutral-400 text-xs mb-4">
              AP par classe — validée sur le split de test
            </p>
            <div className="bg-black/30 rounded-lg p-4 h-80 flex items-center justify-center">
              <Image 
                src="/images/PR_curve.png" 
                alt="PR Curve" 
                width={400} 
                height={300} 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Callout : écart terrain */}
        <InsightCard
          icon="⚠️"
          title="Écart terrain identifié — et résolu"
          content="Les métriques notebook étaient excellentes. En conditions réelles avec la caméra Logitech (résolution réduite, bruit optique), les performances ont chuté. Solution : recollecte des images directement depuis la caméra cible, fond blanc polyester, espacement physique des outils augmenté. C'est ce genre d'itération qui distingue un projet de production d'un projet académique."
        />
      </div>
    </section>
  )
}

export function LiveDemo() {
  return (
    <section className="py-24 bg-neutral-900 px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-black text-white uppercase italic">Démonstration Live</h2>
      </div>
      <div className="max-w-5xl mx-auto rounded-[40px] overflow-hidden border border-white/10 bg-black shadow-2xl">
        <div className="bg-neutral-800 px-6 py-3 flex gap-2 items-center">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest ml-4">Inference_Live_Test.py</span>
          <div className="ml-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-mono">LIVE</span>
          </div>
        </div>
        <Image 
          src="/images/realtime_test.png" 
          alt="Live Demo" 
          width={800} 
          height={600} 
          className="w-full opacity-90" 
        />
        
        {/* Stats bar */}
        <div className="grid grid-cols-4 divide-x divide-neutral-700 bg-neutral-800">
          {[
            { label: "FPS", value: "23" },
            { label: "Objets détectés", value: "4" },
            { label: "Confidence moy.", value: "93.2%" },
            { label: "Latence", value: "43ms" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-4 text-center">
              <div className="text-white font-mono font-bold text-xl">
                {stat.value}
              </div>
              <div className="text-neutral-500 text-xs mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-neutral-500 text-sm text-center mt-6">
        Détection de la main de l&apos;utilisateur intégrée comme classe #21 — 
        permet d&apos;anticiper les tentatives d&apos;emprunt non déclarées 
        et de générer des alertes administrateur en temps réel.
      </p>
    </section>
  )
}