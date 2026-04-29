// components/ai/MLPipeline.tsx
"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"
import { pipelineSteps } from "@/lib/ai-data"

function PipelineCard({
  step,
  index
}: {
  step: (typeof pipelineSteps)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 
                      group-hover:opacity-20 rounded-3xl blur transition-opacity`}
      />
      <div className="relative p-6 bg-neutral-800/50 border border-neutral-700/50 
                      rounded-3xl group-hover:border-neutral-600 transition-colors">
        <div className="text-4xl mb-4">{step.icon}</div>
        <div className="text-indigo-400 font-mono text-xs font-bold mb-2">{step.step}</div>
        <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
        <div className="text-[10px] text-indigo-300 font-bold mb-3 uppercase tracking-widest opacity-80">
          {step.subtitle}
        </div>
        <p className="text-neutral-400 text-xs leading-relaxed mb-4">{step.description}</p>
        <div className="flex flex-wrap gap-1">
          {step.tech.map((t) => (
            <span key={t} className="text-[9px] px-2 py-1 rounded 
                                    bg-neutral-700/50 text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function MLPipeline() {
  return (
    <section className="py-24 bg-neutral-900 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Machine Learning Pipeline"
          title="De la donnée brute à la décision"
          subtitle="5 étapes construites pour la production, pas pour un notebook."
        />

        {/* Ligne de connexion animée */}
        <div className="relative mt-16">
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r 
                       from-violet-500 via-cyan-500 to-green-500 hidden lg:block"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
            {pipelineSteps.map((step, i) => (
              <PipelineCard key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}