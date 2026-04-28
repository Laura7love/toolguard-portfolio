"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Eye, Database, Zap, BarChart3, Scan } from "lucide-react";
import Image from "next/image";

export default function IntelligencePage() {
  const statsIA = [
    { label: "Précision (mAP)", val: "99.4%", icon: <Zap size={20} />, color: "text-amber-500" },
    { label: "Dataset", val: "1888 Images", icon: <Database size={20} />, color: "text-blue-500" },
    { label: "Vitesse", val: "30ms / image", icon: <BrainCircuit size={20} />, color: "text-emerald-500" },
    { label: "Classes", val: "12 outils", icon: <BarChart3 size={20} />, color: "text-[#087eaa]" },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 bg-[#087eaa]/10 rounded-3xl flex items-center justify-center text-[#087eaa] mb-8 shadow-inner">
              <Scan size={32} />
            </div>
            <h1 className="text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-6">
              Vision <br /><span className="text-[#087eaa]">Artificielle</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed text-justify">
              Le cœur technologique de ToolGuard repose sur un modèle de détection d&apos;objets <strong>YOLOv8</strong> optimisé pour l&apos;inventaire. Ce système permet une reconnaissance instantanée pour automatiser la gestion du matériel au FabLab.
            </p>
          </motion.div>
        </section>

        {/* GRILLE DE STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {statsIA.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-[35px] hover:shadow-xl hover:bg-white transition-all group"
            >
              <div className={`${stat.color} mb-4 transition-transform group-hover:scale-110`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-slate-900 italic">{stat.val}</div>
              <div className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* SECTION TECHNIQUE : DATASET & TRAINING */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
              Le Dataset : <span className="text-[#087eaa]">La Clé de la Précision</span>
            </h2>
            <div className="space-y-6 text-slate-600">
              <p className="leading-relaxed">
                Pour atteindre une précision de <strong>99.4%</strong>, nous avons constitué un dataset de <strong>1888 images</strong> annotées.
              </p>
              <ul className="space-y-4">
                {[
                  "Annotation rigoureuse des classes d&apos;outils.",
                  "Augmentation de données pour la robustesse en milieu industriel.",
                  "Inférence en temps réel pour validation immédiate (FC4)."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-sm font-bold italic">
                    <span className="w-1.5 h-1.5 bg-[#087eaa] rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full rounded-[50px] overflow-hidden shadow-2xl border-8 border-slate-50">
            <Image 
              src="/ai-detection-view.jpg" 
              alt="YOLOv8 Detection Interface" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* LOGIQUE DE DÉCISION BASÉE SUR LE CDCF */}
        <div className="bg-slate-900 rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black mb-8 uppercase italic tracking-tighter">Flux de <span className="text-[#087eaa]">Décision IA</span></h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                L&apos;IA assure la fonction <strong>FC4 (Vérification par caméra)</strong> en contrôlant la présence ou l&apos;absence d&apos;un outil après chaque mouvement.
              </p>
              <div className="inline-block px-6 py-3 border border-[#087eaa] rounded-full text-[#087eaa] text-[10px] font-black uppercase tracking-widest">
                Validation Automatique : FC4, FC5 & FC6
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { step: "01", title: "Acquisition", text: "Image caméra (Entrée FC4)" },
                { step: "02", title: "Inférence", text: "Modèle YOLOv8 (Traitement)" },
                { step: "03", title: "Validation", text: "Sortie : Validation retour/emprunt" },
              ].map((step, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-6">
                  <span className="text-2xl font-black text-[#087eaa] italic">{step.step}</span>
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-widest">{step.title}</h4>
                    <p className="text-slate-400 text-[11px]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}