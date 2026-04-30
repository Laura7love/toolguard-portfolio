"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioPages } from "@/lib/portfolio-data"
import type { PortfolioStat } from "@/lib/portfolio-data"
import { Zap, CreditCard, ShieldCheck, Link as LinkIcon } from "lucide-react"
import 'katex/dist/katex.min.css'
import {BlockMath } from 'react-katex'

// --- DONNÉES TECHNIQUES ---
const pinMapping = [
  { pin: 1, signal: "CLK_X", color: "bg-red-500", desc: "Signal d'horloge (Pas)" },
  { pin: 2, signal: "CW_X", color: "bg-blue-500", desc: "Direction" },
  { pin: 14, signal: "EN_X", color: "bg-emerald-500", desc: "Activation Driver" },
  { pin: "...", signal: "GND", color: "bg-zinc-700", desc: "Masse commune" }
];

const safetyLayers = [
  { t: "Logicielle", d: "HOME_MAX_STEPS : Détection automatique des blocages mécaniques." },
  { t: "Matérielle", d: "Capteurs fin de course AOKI : Arrêt physique instantané." },
  { t: "Physique", d: "Profil d'accélération : < 0.05 m/s² pour préserver les roulements." },
  { t: "Protocole", d: "Commande 's' prioritaire : Stop global immédiat via buffer Serial." }
];

export default function ElectroniquePage() {
  const data = portfolioPages.find(p => p.id === "elec");
  const [activeTab, setActiveTab] = useState("hardware");

  if (!data) return null;

  return (
    <main className="bg-stone-950 min-h-screen text-white selection:bg-blue-500/30 pb-20">
      
      {/* HEADER HERO */}
      <header className="max-w-7xl mx-auto pt-24 px-8 mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] font-bold">
            7 composants · 4 moteurs · 1 Arduino Mega
          </span>
          <h1 className="text-[8vw] font-black uppercase italic text-white leading-none mt-4">
            {data.title.split(' ')[0]} <span className="text-blue-500">{data.title.split(' ')[1]}</span>
          </h1>
          <p className="text-2xl text-neutral-500 mt-6 max-w-3xl leading-relaxed">
            &quot;Un Arduino au cœur. Des décisions à 50ms.&quot;
          </p>
        </motion.div>
      </header>

      {/* STATS RAPIDES */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {data.stats.map((stat: PortfolioStat) => (
          <div key={stat.label} className="bg-blue-500/5 border border-blue-500/20 p-10 rounded-[40px] hover:bg-blue-500/10 transition-colors">
            <div className="text-5xl font-black text-blue-400 mb-2">{stat.value}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* SECTION INTERACTIVE : LE CÂBLE DB25 & MAPPING */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-neutral-900/30 p-12 rounded-[50px] border border-white/5">
          <div>
            <LinkIcon className="text-blue-500 w-10 h-10 mb-6" />
            <h2 className="text-4xl font-black text-white mb-6 uppercase italic">Le Câble DB25</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Souvent ignoré, le connecteur DB25 est le nerf de la guerre. Il centralise les signaux de commande vers les drivers TB6560 pour une gestion propre des 4 axes.
            </p>
            <div className="space-y-3">
              {pinMapping.map((m, i) => (
                <div key={i} className="flex items-center gap-4 group border-b border-white/5 pb-2">
                  <div className={`w-2 h-2 rounded-full ${m.color}`} />
                  <span className="font-mono text-xs text-zinc-500 w-16">PIN {m.pin}</span>
                  <span className="font-mono text-xs text-white uppercase tracking-widest">{m.signal}</span>
                  <span className="text-[10px] text-zinc-600 italic ml-auto">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-black rounded-3xl border border-white/10 flex items-center justify-center text-zinc-700 font-mono text-sm p-8 text-center">
            [ Figure 22 : Visualisation du brochage DB25-Driver ]
          </div>
        </div>
      </section>

      {/* SECTION : ALGORITHME & CODE */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="flex gap-8 mb-12">
          <button onClick={() => setActiveTab("hardware")} className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeTab === "hardware" ? "border-blue-500 text-white" : "border-transparent text-neutral-500"}`}>Architecture</button>
          <button onClick={() => setActiveTab("code")} className={`text-xs font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeTab === "code" ? "border-blue-500 text-white" : "border-transparent text-neutral-500"}`}>Logique Arduino</button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "hardware" ? (
            <motion.div key="hw" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900/50 p-10 rounded-[40px] border border-white/5">
                <CreditCard className="text-blue-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">RFID : Identification sans friction</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Le lecteur RC522 communique via SPI. L&apos;Arduino lit l&apos;UID pur et le transmet au backend. 
                  <strong> La sécurité est applicative :</strong> l&apos;Arduino ne stocke aucune base de données d&apos;accès.
                </p>
              </div>
              <div className="bg-neutral-900/50 p-10 rounded-[40px] border border-white/5">
                <Zap className="text-blue-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">Drivers TB6560</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Conversion des signaux TTL en courants de phase de 1.7A. Hachage à 80kHz pour un mouvement fluide et silencieux des tiroirs.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div key="sw" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-black p-10 rounded-[40px] border border-blue-500/20 font-mono text-blue-400 text-sm overflow-x-auto">
              <div className="mb-6 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-zinc-500">{"// trapezoidal_accel_routine.ino"}</span>              </div>
              <pre>
{`void moveStepper(int steps, bool direction) {
  for (int i = 0; i < steps; i++) {
    // Profil d'accélération trapézoïdal
    int delayTime = calculateDelay(i, steps); 
    digitalWrite(STEP_PIN, HIGH);
    delayMicroseconds(delayTime);
    digitalWrite(STEP_PIN, LOW);
    delayMicroseconds(delayTime);
  }
}`}
              </pre>
              <div className="mt-8 p-4 bg-blue-500/5 rounded-xl">
                 <BlockMath math="v(t) = v_0 + a \cdot t \quad \text{(Rampe d'accélération)}" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* SECTION SAFETY */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-12">
          <ShieldCheck className="w-8 h-8 text-blue-500" />
          <h2 className="text-4xl font-black text-white uppercase italic">Sécurités Intégrées</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyLayers.map((layer, i) => (
            <div key={i} className="p-8 bg-neutral-900/40 rounded-3xl border-l-4 border-blue-500">
              <h4 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">{layer.t}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{layer.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}