// components/ai/HeroAI.tsx
"use client"
import { motion } from "framer-motion"
import { StatPill, AnimatedCounter } from "./SectionHeader"
import { heroStats } from "@/lib/ai-data"

export function HeroAI() {
  return (
    <section className="relative min-h-screen flex items-center bg-neutral-950 overflow-hidden">
      {/* Grille animée en arrière-plan */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow effects */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-indigo-500/10 border border-indigo-500/30 
                     text-indigo-400 text-xs font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          YOLOv8n-seg · Inférence temps réel · mAP@50: 95.6%
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Voir ce que
          <br />
          <span className="text-transparent bg-clip-text 
                           bg-gradient-to-r from-indigo-400 to-cyan-400">
            l&apos;œil manque.
          </span>
          <br />
          <span className="text-white">
            En <AnimatedCounter value={47} suffix="ms" />
          </span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-lg md:text-xl text-neutral-300 mt-6 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Comment nous avons entraîné une IA à surveiller 21 classes d&apos;outils en temps réel — 
          et à détecter chaque anomalie avant qu&apos;elle ne coûte.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          className="flex flex-wrap gap-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {heroStats.map((stat) => (
            <StatPill 
              key={stat.label} 
              label={stat.label} 
              value={`${stat.value}${stat.suffix}`}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <a href="#dataset" className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                                        bg-indigo-500 hover:bg-indigo-600 text-white font-semibold
                                        transition-colors">
            Découvrir le pipeline
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}