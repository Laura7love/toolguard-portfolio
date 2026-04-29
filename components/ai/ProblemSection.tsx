"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"
import { problems } from "@/lib/ai-data"

export function ProblemSection() {
  return (
    <section className="py-24 bg-neutral-900 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Le Problème"
          title="Sans IA, le système est aveugle"
          subtitle="Trois défauts critiques d'un système manuel que la vision par IA résout."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                   style={{
                     backgroundImage: problem.color === 'red'
                       ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                       : problem.color === 'orange'
                         ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                         : 'linear-gradient(135deg, #8b5cf6, #6366f1)'
                   }}
              />
              
              <div className="relative p-6 bg-neutral-800/50 border border-neutral-700 rounded-2xl 
                            hover:border-neutral-600 transition-colors">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-white font-bold text-lg mb-3">{problem.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
