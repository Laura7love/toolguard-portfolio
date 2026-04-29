"use client"
import { motion } from "framer-motion"

export function HeroAI() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-neutral-950 overflow-hidden pt-20">
      <motion.div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" /> YOLOv8n-seg · mAP : 99.4%
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase italic">L&apos;Intelligence <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Artificielle</span></h1>
      </div>
    </section>
  )
}

export function MLPipeline() {
  const steps = [
    { title: "Collecte", tech: "Logitech C920", desc: "Captures réelles au FabLab." },
    { title: "Annotation", tech: "Roboflow", desc: "Segmentation par polygones." },
    { title: "Training", tech: "YOLOv8n-seg", desc: "Équilibre vitesse/précision." },
    { title: "Inférence", tech: "Python/Serial", desc: "Décision temps réel." }
  ];
  return (
    <section className="py-20 bg-neutral-900 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-neutral-800 rounded-3xl border border-neutral-700 text-center">
            <h3 className="text-white font-bold mb-2">{step.title}</h3>
            <div className="text-[10px] text-indigo-400 font-bold mb-2 uppercase">{step.tech}</div>
            <p className="text-neutral-400 text-xs leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}