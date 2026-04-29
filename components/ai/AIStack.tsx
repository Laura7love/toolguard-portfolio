"use client"
import { motion } from "framer-motion"
import { SectionHeader } from "./SectionHeader"
import { techStack, perspectives } from "@/lib/ai-data"

export function AIStack() {
  return (
    <section className="py-24 bg-neutral-950 px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Tech Stack · Perspectives"
          title="Au-delà du modèle"
          subtitle="L'écosystème complet d'un système IA en production."
        />

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 hover:border-neutral-600 transition-colors"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-white font-bold mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-neutral-400 text-xs flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Perspectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-teal-500/10 border border-indigo-500/20 rounded-2xl p-8"
        >
          <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            Perspectives futures
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {perspectives.map((perspective, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 text-neutral-300 text-sm"
              >
                <span className="text-indigo-400 font-bold">✓</span>
                {perspective}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
