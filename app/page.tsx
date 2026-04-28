"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Settings, Database, ShieldCheck, Menu } from "lucide-react";
export default function ToolGuardLanding() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const stats = [
    { label: "Précision IA", value: "99.4%", Icon: Cpu, color: "text-[#087eaa]" },
    { label: "Dataset YOLO", value: "1888", Icon: Database, color: "text-[#087eaa]" },
    { label: "Acier Châssis", value: "S235", Icon: Settings, color: "text-[#6c3b1a]" },
    { label: "Sécurité RFID", value: "Active", Icon: ShieldCheck, color: "text-[#6c3b1a]" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f172a] text-[#f1f5f9]">
      {/* 1. VIDÉO D'ARRIÈRE-PLAN */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      >
        <source src="/background-3d.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-grainy pointer-events-none z-10 opacity-5" />
      
      {/* 2. HEADER */}
      <header className="fixed top-0 w-full border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo-toolguard2.png" 
              alt="ToolGuard Logo"
              width={165}
              height={60}
              priority
              className="w-auto h-10 object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="/conception" className="hover:text-[#087eaa] transition-colors italic">Conception</a>
            <a href="/intelligence" className="hover:text-[#087eaa] transition-colors italic">Intelligence</a>
            <a href="/equipe" className="hover:text-[#087eaa] transition-colors italic">Équipe</a>
          </nav>

          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center pt-24 z-20">
        <motion.div 
          className="max-w-5xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-8 border border-[#087eaa]/30 rounded-full bg-[#087eaa]/10 text-[#087eaa] text-[10px] font-black tracking-[0.4em] uppercase"
          >
            Team ToolGuard • Promotion 2027 • EMINES
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.8] text-white uppercase italic">
            TOOL<span className="text-[#087eaa]">GUARD</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            La servante d&apos;outils intelligente. <br />
            Précision <span className="text-white font-bold italic">IA</span>, robustesse <span className="text-[#6c3b1a] font-bold italic">S235</span>.
          </p>

          <div className="flex flex-col items-center gap-6">
            <motion.a
              href="/projet"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#087eaa] text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-[#087eaa]/20"
            >
              Découvrir le projet
            </motion.a>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400"
            >
              <span>++ Made with passion ++ </span>
              <span className="text-[#087eaa]">Team ToolGuard</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. DASHBOARD DE STATS */}
      <section className="relative z-30 px-6 pb-24 -mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              {...fadeUp} 
              transition={{ delay: i * 0.1 }}
              className="bg-[#1e293b]/40 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-2xl text-center group hover:border-[#087eaa]/50 transition-all"
            >
              <stat.Icon className={`w-6 h-6 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-black mt-2 text-white italic">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}