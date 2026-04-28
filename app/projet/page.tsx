"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  Target, 
  PenTool, 
  ShieldCheck, 
  LayoutDashboard, 
  Cog 
} from "lucide-react";

export default function ProjetPage() {
  const images = [
    "/servante-principale.jpg",
    "/servante-mecanique.jpg",
    "/servante-electronique.jpg",
    "/servante-fablab.jpg"
  ];
  
  const [currentImage, setCurrentImage] = useState(0);

  const paginate = (direction: number) => {
    setCurrentImage((prev) => (prev + direction + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, );

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 scroll-smooth">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION 1 : CONCEPT (ID: concept) */}
        <section id="concept" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-32"
          >
            <div className="w-14 h-14 bg-[#087eaa]/10 rounded-2xl flex items-center justify-center text-[#087eaa] shadow-inner">
              <PenTool size={28} />
            </div>
            
            <h1 className="text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
              ToolGuard : <br /><span className="text-[#087eaa]">L&apos;Innovation</span>
            </h1>
            
            <p className="text-slate-600 leading-relaxed text-lg text-justify">
              Développée pour le FabLab de l&apos;EMINES, ToolGuard est une servante intelligente assurant une gestion automatisée et sécurisée du matériel industriel grâce à l&apos;intégration du modèle YOLOv8 et du RFID.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-2 rounded-xl text-emerald-600 shadow-sm">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-[11px] italic">RFID & Sécurité</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Traçabilité nominative via badge RC522.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-[#087eaa]/10 p-2 rounded-xl text-[#087eaa] shadow-sm">
                  <Target size={18} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-[11px] italic">Vision YOLOv8</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Inventaire auto (1888 images).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-amber-100 p-2 rounded-xl text-amber-600 shadow-sm">
                  <Cog size={18} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-[11px] italic">Mécatronique</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Moteurs Nema 17 & Drivers TB6560.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-2 rounded-xl text-blue-600 shadow-sm">
                  <LayoutDashboard size={18} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-[11px] italic">Dashboard Live</h4>
                  <p className="text-[11px] text-slate-500 leading-snug">Interface web de suivi Next.js.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SLIDER INTERACTIF */}
          <div className="relative h-[700px] w-full group overflow-hidden rounded-[40px] shadow-2xl border border-slate-100">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -50) paginate(1);
                  if (offset.x > 50) paginate(-1);
                }}
                className="relative h-full w-full cursor-grab active:cursor-grabbing"
              >
                <Image src={images[currentImage]} alt="Prototype" fill priority className="object-cover pointer-events-none" />
              </motion.div>
            </AnimatePresence>
            <button onClick={() => paginate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"><ChevronLeft size={24} /></button>
            <button onClick={() => paginate(1)} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight size={24} /></button>
          </div>
        </section>

        {/* SECTION 2 : FICHE TECHNIQUE (ID: technique) */}
        <section id="technique" className="mt-32 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
              Fiche <span className="text-[#087eaa]">Technique</span>
            </h2>
            <p className="text-slate-500 mt-2 font-mono text-[10px] uppercase tracking-[0.3em]">ToolGuard Spec Sheet v1.0</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* CHIFFRES CLÉS */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2 italic underline decoration-[#087eaa]">CHIFFRES CLÉS</h3>
              <div className="space-y-4">
                {[
                  { label: "Stockage", val: "4 Tiroirs automatisés" },
                  { label: "Charge Max", val: "4.50 kg (Statique)" },
                  { label: "Structure", val: "Acier S235 (Époxy)" },
                  { label: "Vision IA", val: "99.4% (YOLOv8)" },
                  { label: "Dataset", val: "1888 images" },
                  { label: "Réponse", val: "< 2 secondes" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{item.label}</span>
                    <span className="text-sm font-black text-slate-700 italic">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ÉLECTRIQUE */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-6 italic underline decoration-[#087eaa]">ÉLECTRIQUE</h3>
              <div className="space-y-4">
                {[
                  { qty: "1", name: "Arduino Mega 2560" },
                  { qty: "7", name: "Moteurs Nema 17" },
                  { qty: "1", name: "Driver 4 axes TB6560" },
                  { qty: "1", name: "Lecteur RFID RC522" },
                  { qty: "1", name: "Caméra HD" },
                  { qty: "1", name: "Alim 12V/24V" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-slate-200 pb-2">
                    <span className="text-[#087eaa] font-black font-mono text-sm w-8">x{item.qty}</span>
                    <span className="text-sm font-bold text-slate-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MÉCANIQUE */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-6 italic underline decoration-[#087eaa]">MÉCANIQUE</h3>
              <div className="space-y-4">
                {[
                  { qty: "8", name: "Glissières Télescopiques" },
                  { qty: "5", name: "Vis sans fin" },
                  { qty: "1", name: "Châssis Mécano-soudé" },
                  { qty: "4", name: "Tiroirs sur mesure" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-slate-200 pb-2">
                    <span className="text-[#087eaa] font-black font-mono text-sm w-8">x{item.qty}</span>
                    <span className="text-sm font-bold text-slate-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 : ANALYSE FONCTIONNELLE COMPLÈTE (ID: analyse) */}
        <section id="analyse" className="mt-40">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
              Analyse <span className="text-[#087eaa]">Fonctionnelle</span>
            </h2>
            <p className="text-slate-500 mt-2 font-mono text-[10px] uppercase tracking-[0.3em]">Cahier des Charges Fonctionnel Complet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                id: "FP", 
                title: "Gestion du prêt/retour", 
                desc: "Permet d'emprunter et de rendre des outils de manière autonome.",
                in: "Badge, sélection écran",
                out: "Mouvement tiroir, MAJ BDD"
              },
              { 
                id: "FC1", 
                title: "Identification NFC", 
                desc: "Vérification de l'identité de l'utilisateur via badge RFID.",
                in: "Badge RFID",
                out: "Validation utilisateur"
              },
              { 
                id: "FC2", 
                title: "Interface Tactile", 
                desc: "Permet à l'utilisateur de choisir l'outil sur l'écran.",
                in: "Commande écran",
                out: "Signal vers contrôle"
              },
              { 
                id: "FC3", 
                title: "Mécanisme Tiroir", 
                desc: "Actionnement physique de l'ouverture du bon tiroir.",
                in: "Signal sélection",
                out: "Mouvement moteur"
              },
              { 
                id: "FC4", 
                title: "Vérification IA", 
                desc: "Contrôle visuel (YOLOv8) de la présence de l'outil.",
                in: "Image caméra",
                out: "Validation stock"
              },
              { 
                id: "FC5", 
                title: "Traçabilité", 
                desc: "Enregistrement de chaque mouvement dans la base de données.",
                in: "Données système",
                out: "Historique / Logs"
              },
              { 
                id: "FC6", 
                title: "Gestion des Anomalies", 
                desc: "Alerte en cas d'erreur, d'outil manquant ou de retard.",
                in: "Données historiques",
                out: "Notifications"
              },
              { 
                id: "FC7", 
                title: "Stats & Analytics", 
                desc: "Analyse des fréquences d'utilisation du matériel.",
                in: "Données enregistrées",
                out: "Rapports & Tableaux"
              },
              { 
                id: "FC8", 
                title: "Interface Admin", 
                desc: "Contrôle global du système pour l'administrateur.",
                in: "Commandes admin",
                out: "Gestion système"
              }
            ].map((func, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.01 }}
                className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-[#087eaa]/30 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[#087eaa] font-black text-[10px] font-mono bg-[#087eaa]/5 px-3 py-1 rounded-full">
                    {func.id}
                  </span>
                  <h4 className="text-slate-900 font-black uppercase text-xs italic tracking-tight">{func.title}</h4>
                </div>
                
                <p className="text-slate-500 text-[11px] mb-6 leading-relaxed">
                  {func.desc}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Entrée</span>
                    <span className="text-[9px] font-bold text-slate-600 uppercase">{func.in}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Sortie</span>
                    <span className="text-[9px] font-bold text-[#087eaa] uppercase">{func.out}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}