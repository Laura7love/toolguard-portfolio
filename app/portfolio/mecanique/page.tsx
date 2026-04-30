"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import Image from 'next/image'
// --- DONNÉES TECHNIQUES ---
const challenges = [
  {
    id: "motor",
    number: "01",
    title: "Le Moteur",
    question: "Quel couple minimal pour déplacer un tiroir de 10.3 kg ?",
    result: "C_m \\approx 0.516 \\text{ mN}\\cdot\\text{m}",
    insight: "Le moteur NEMA 17 sélectionné développe 40.8 mN·m, soit 40× le couple requis. Cette marge garantit une fiabilité totale face à l'usure des glissières.",
    equations: ["F_m = m \\cdot a + \\mu \\cdot m \\cdot g", "C_m = \\frac{F_m \\cdot L}{2\\pi \\cdot \\eta}"],
  },
  {
    id: "drawer",
    number: "02",
    title: "Le Tiroir MDF",
    question: "Quelle résistance pour 4.5 kg d'outils en porte-à-faux ?",
    result: "\\sigma_{max} = 0.836 \\text{ MPa} < \\sigma_{adm} = 8.33 \\text{ MPa}",
    insight: "L'épaisseur de 10 mm offre un facteur de sécurité de 9.97. Les déformations restent inférieures à 0.25 mm en ouverture totale.",
    equations: ["P_s = \\frac{m_T \\cdot g}{L \\cdot \\ell}", "FS = \\frac{\\sigma_{ultime}}{\\sigma_{adm}} = 3"],
  }
];

const calculationSteps = [
  {
    step: "i",
    title: "Accélération",
    formula: "a = \\frac{V_{max}^2}{D_{max}} = \\frac{0.1^2}{0.36}",
    result: "a \\approx 0.0278 \\text{ m/s}^2",
    variables: [{ n: "V_{max}", v: "0.1 m/s" }, { n: "D_{max}", v: "0.36 m" }]
  },
  {
    step: "ii",
    title: "Bilan des Forces",
    formula: "\\sum \\vec{F}_{ext} = m \\cdot \\vec{a}",
    result: "F_{inertie} \\approx 0.286 \\text{ N}",
    variables: [{ n: "m", v: "10.3 kg" }]
  },
  {
    step: "iii",
    title: "Frottement",
    formula: "F_f = \\mu \\cdot m \\cdot g",
    result: "F_f \\approx 1.010 \\text{ N}",
    variables: [{ n: "\\mu", v: "0.01 (glissière)" }]
  },
  {
    step: "iv",
    title: "Couple Final",
    formula: "C_m = \\frac{(F_{in} + F_{fr}) \\cdot L}{2\\pi \\cdot \\eta}",
    result: "C_m \\approx 0.516 \\text{ mN}\\cdot\\text{m}",
    isConclusion: true
  }
];

// --- COMPOSANTS INTERNES ---

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string; // Le point d'interrogation signifie qu'il est optionnel
}

function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="text-orange-500 font-mono text-xs uppercase tracking-[0.3em] font-bold">{badge}</span>
      <h2 className="text-4xl font-black text-white mt-4 italic uppercase italic">{title}</h2>
      {subtitle && <p className="text-neutral-500 mt-2 text-lg">{subtitle}</p>}
    </div>
  );
}

// --- PAGE PRINCIPALE ---

export default function MecaniquePage() {
  const [activeChallenge, setActiveChallenge] = useState("motor");

  return (
    <main className="bg-stone-950 min-h-screen text-white selection:bg-orange-500/30">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono mb-8 uppercase tracking-widest">
              Mécanique · Simulation FEM · RDM
            </div>
            <h1 className="text-7xl md:text-8xl font-black leading-[0.85] mb-8 italic uppercase tracking-tighter">
              Zéro <br /><span className="text-orange-500">Défaillance</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-lg font-light leading-relaxed border-l border-white/10 pl-6">
              Chaque composant de ToolGuard a été dimensionné par le calcul pour garantir une précision industrielle et une durabilité maximale.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-12">
              <div className="px-6 py-3 bg-neutral-900 rounded-2xl border border-white/5">
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Marge Sécurité</div>
                <div className="text-orange-500 font-mono font-bold text-xl"><InlineMath math="\times 9.97" /></div>
              </div>
              <div className="px-6 py-3 bg-neutral-900 rounded-2xl border border-white/5">
                <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Précision Axe</div>
                <div className="text-white font-mono font-bold text-xl"><InlineMath math="\pm 0.25 \text{ mm}" /></div>
              </div>
            </div>
          </motion.div>

          {/* Carte Vis-Écrou Interactive */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem]">
             <h3 className="text-orange-500 font-bold uppercase text-xs mb-6 tracking-widest italic">Modèle de Transmission</h3>
             <div className="aspect-video bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center text-zinc-600 font-mono text-sm">
                [Visualisation 3D du système Vis-Écrou]
             </div>
             <div className="mt-6 p-4 bg-orange-500/5 rounded-xl border-l-4 border-orange-500">
                <BlockMath math="C_{total} = (J_{charge} \cdot \alpha) + C_{friction}" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DÉFIS D'INGÉNIERIE (Tabs) */}
      <section className="py-24 px-8 bg-stone-900/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Challenges" title="Problèmes & Résolutions" />
          
          <div className="flex gap-4 mb-12">
            {challenges.map((c) => (
              <button 
                key={c.id} 
                onClick={() => setActiveChallenge(c.id)}
                className={`px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all ${activeChallenge === c.id ? "bg-orange-500 text-black shadow-lg shadow-orange-500/20" : "bg-neutral-800 text-zinc-500 hover:text-white"}`}
              >
                {c.number}. {c.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {challenges.filter(c => c.id === activeChallenge).map((c) => (
              <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-orange-400 italic text-xl">&quot;{c.question}&quot;</p>
                  <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                    <div className="text-[10px] text-zinc-500 uppercase font-black mb-3 tracking-widest">Résultat Calculé</div>
                    <div className="text-3xl font-mono text-white"><InlineMath math={c.result} /></div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed text-lg">{c.insight}</p>
                </div>
                <div className="space-y-4">
                  {c.equations.map((eq, i) => (
                    <div key={i} className="p-6 bg-neutral-900 rounded-2xl border border-white/5 flex items-center justify-center">
                      <BlockMath math={eq} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 3: MOTOR CALCULATION (Deep Dive) */}
      <section className="py-24 px-8 max-w-5xl mx-auto">
        <SectionHeader badge="Deep Dive" title="Dimensionnement Moteur" subtitle="Le parcours de 5 étapes pour valider le couple nominal." />
        
        <div className="space-y-4">
          {calculationSteps.map((step, idx) => (
            <motion.div 
              key={idx} 
              whileInView={{ opacity: 1, x: 0 }} 
              initial={{ opacity: 0, x: -20 }}
              className={`p-8 rounded-[2rem] border transition-all ${step.isConclusion ? "bg-orange-500/10 border-orange-500/40 shadow-xl shadow-orange-500/5" : "bg-neutral-900/40 border-white/5"}`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-black flex items-center justify-center font-black text-xl shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-zinc-500 uppercase font-black text-[10px] tracking-[0.2em] mb-2">{step.title}</h4>
                  <div className="text-xl text-white"><BlockMath math={step.formula} /></div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Résultat</div>
                  <div className={`text-2xl font-mono font-bold ${step.isConclusion ? "text-orange-500" : "text-white"}`}>
                    <InlineMath math={step.result} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FEM VALIDATION */}
      <section className="py-24 px-8 bg-stone-900/30">
        <div className="max-w-7xl mx-auto border border-white/5 rounded-[3rem] p-12 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader badge="Simulation SolidWorks" title="Validation RDM" />
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-zinc-500 uppercase text-xs font-bold">Contrainte de Von Mises</span>
                  <span className="text-2xl font-mono"><InlineMath math="0.836 \text{ MPa}" /></span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-zinc-500 uppercase text-xs font-bold">Limite Élastique (MDF)</span>
                  <span className="text-2xl font-mono text-emerald-500"><InlineMath math="8.33 \text{ MPa}" /></span>
                </div>
                <div className="pt-6">
                  <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: "10%" }} 
                      transition={{ duration: 1.5 }}
                      className="h-full bg-emerald-500" 
                    />
                  </div>
                  <p className="text-[10px] text-zinc-500 mt-3 uppercase font-bold tracking-widest">Utilisation de la capacité : 10.03%</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image 
  src="/images/fem-simulation.png" 
  alt="Simulation FEM ToolGuard" 
  width={800} // Ajuste selon tes besoins
  height={500}
  className="relative rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}