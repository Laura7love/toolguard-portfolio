"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projectSections = [
    { name: "Concept & Innovation", href: "/projet#concept" },
    { name: "Fiche Technique", href: "/projet#technique" },
    { name: "Analyse Fonctionnelle", href: "/projet#analyse" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-black text-2xl italic tracking-tighter text-slate-900 group">
          TOOL<span className="text-[#087eaa] group-hover:text-slate-700 transition-colors">GUARD</span>
        </Link>
        
        {/* NAVIGATION DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-[11px] uppercase tracking-[0.2em] font-black text-slate-400 hover:text-[#087eaa] transition-colors">
            Accueil
          </Link>
          
          {/* DROPDOWN PROJET */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-black text-slate-900 hover:text-[#087eaa] transition-all py-4">
              Projet <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden p-2 mt-[-5px]"
                >
                  {projectSections.map((section) => (
                    <Link 
                      key={section.href} 
                      href={section.href}
                      className="block px-4 py-3 text-[10px] uppercase tracking-widest font-black text-slate-500 hover:bg-[#087eaa]/5 hover:text-[#087eaa] rounded-xl transition-all"
                    >
                      {section.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/intelligence" className="text-[11px] uppercase tracking-[0.2em] font-black text-slate-400 hover:text-[#087eaa] transition-colors">
            Intelligence
          </Link>

          <Link href="/equipe" className="text-[11px] uppercase tracking-[0.2em] font-black text-slate-400 hover:text-[#087eaa] transition-colors">
            Équipe
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <Link href="/" className="text-xs font-black uppercase tracking-widest text-slate-400" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
              <Link href="/projet" className="text-xs font-black uppercase tracking-widest text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Projet</Link>
              <Link href="/intelligence" className="text-xs font-black uppercase tracking-widest text-slate-400" onClick={() => setIsMobileMenuOpen(false)}>Intelligence</Link>
              <Link href="/equipe" className="text-xs font-black uppercase tracking-widest text-slate-400" onClick={() => setIsMobileMenuOpen(false)}>Équipe</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}