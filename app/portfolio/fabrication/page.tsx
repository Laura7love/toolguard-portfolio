"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
// Import des composants et données
import { PortfolioSectionHeader, InfoCard } from "@/components/portfolio/PortfolioComponents"
import { fabricationIterations} from "@/lib/portfolio-data"

function HeroFabrication() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} className="relative min-h-screen bg-stone-950 flex items-center overflow-hidden px-8">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
            DU CAD AU <br />
            <span className="text-amber-500 font-mono italic">R&Eacute;EL.</span>
          </h1>
          {/* Remplacement des guillemets par &quot; et des apostrophes par &apos; */}
          <blockquote className="border-l-4 border-amber-600 pl-6 text-neutral-400 text-xl italic max-w-lg mb-8">
            &quot;Le meilleur mod&egrave;le SolidWorks ne vaut rien s&apos;il ne passe pas par la d&eacute;coupe CNC et la soudure.&quot;
          </blockquote>
          <div className="flex gap-8 text-amber-500 font-mono">
            <div><span className="block text-4xl font-bold">&plusmn;2mm</span><span className="text-xs text-stone-500 uppercase">Tol&eacute;rance M&eacute;cano-soud&eacute;e</span></div>
            <div><span className="block text-4xl font-bold">CNC</span><span className="text-xs text-stone-500 uppercase">Assemblage Adh&eacute;rence</span></div>
          </div>
        </motion.div>

        <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center text-neutral-700">Photo R&eacute;elle (Fig. 33)</div>
          <motion.div 
            style={{ width: x }}
            className="absolute inset-0 bg-neutral-800 border-r-2 border-amber-500 z-10 flex items-center justify-center text-neutral-600"
          >
            Rendu CAD
          </motion.div>
          <div className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs text-white font-mono">
            Scroll pour comparer CAD vs R&eacute;el
          </div>
        </div>
      </div>
    </section>
  )
}

function TechnicalDeepDive() {
  return (
    <section className="py-24 bg-stone-950 px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="h-48 bg-stone-900 rounded-xl border border-white/5 p-4 flex items-end">
             <div className="text-amber-500/50 font-mono text-xs italic">Figure 32: Guide de soudage</div>
          </div>
          <h3 className="text-white font-bold text-xl uppercase tracking-tight">Structure M&eacute;cano-soud&eacute;e</h3>
          <p className="text-neutral-400 text-sm">Passage par le banc de soudage pour le ch&acirc;ssis. M&eacute;trologie : &eacute;carts &le; &plusmn;2mm mesur&eacute;s.</p>
        </div>

        <div className="space-y-4">
          <div className="h-48 bg-stone-900 rounded-xl border border-white/5 p-4 flex items-end">
             <div className="text-amber-500/50 font-mono text-xs italic">Figure 34: It&eacute;rations Box.py</div>
          </div>
          <h3 className="text-white font-bold text-xl uppercase tracking-tight">Tiroirs CNC</h3>
          <p className="text-neutral-400 text-sm">Ajustement des param&egrave;tres de d&eacute;coupe pour un assemblage par adh&eacute;rence seule (sans vis).</p>
        </div>

        <div className="space-y-4">
          <div className="h-48 bg-stone-900 rounded-xl border border-white/5 p-4 flex items-end">
             <div className="text-amber-500/50 font-mono text-xs italic">Figures 38-40: Transmission</div>
          </div>
          <h3 className="text-white font-bold text-xl uppercase tracking-tight">Transmission</h3>
          <p className="text-neutral-400 text-sm">Usinage manuel des accouplements alu et d&eacute;coupe PVC pour les logements &eacute;crous.</p>
        </div>
      </div>
    </section>
  )
}

// Composant principal qui utilise TOUTES les fonctions définies
export default function FabricationPage() {
  return (
    <main className="bg-stone-950 min-h-screen">
      <HeroFabrication />
      <TechnicalDeepDive />
      
      <section className="py-24 max-w-5xl mx-auto px-8">
        <PortfolioSectionHeader 
          badge="It&eacute;rations" 
          title="Le chemin vers la production" 
          subtitle="Chaque prototype a enseign&eacute; une le&ccedil;on cruciale."
        />
        
        <div className="grid gap-6 mt-12">
          {fabricationIterations.map((it, idx) => (
            <div key={idx} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="text-amber-500 font-bold">{it.phase}</h4>
              <p className="text-neutral-300 text-sm mt-2">{it.issue}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <InfoCard 
            icon="🧠"
            title="Maturit&eacute; d&apos;ing&eacute;nieur"
            description="Savoir identifier et r&eacute;soudre les probl&egrave;mes terrain est ce qui distingue un prototype d&apos;un syst&egrave;me industriel."
            color="orange"
          />
        </div>
      </section>
    </main>
  )
}