"use client"
import Link from "next/link"
import Image from "next/image"
import { Heart, Cpu } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-white/5 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Colonne 1: Branding ToolGuard uniquement */}
        <div className="col-span-1">
          <div className="mb-6">
            <Image
              src="/emineslogo.png" 
              alt="EMINES Logo" 
              width={48}
              height={48}
              className="h-12 w-auto mb-4"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="text-amber-500" size={24} />
            <span className="text-white font-bold tracking-tighter text-xl uppercase">ToolGuard</span>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Système intelligent de gestion d&apos;outillage industriel développé à l&apos;EMINES.
          </p>
        </div>

        {/* Colonne 2: Navigation */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><Link href="/" className="hover:text-amber-500 transition-colors">Accueil</Link></li>
            <li><Link href="/portfolio/fabrication" className="hover:text-amber-500 transition-colors">Fabrication</Link></li>
            <li><Link href="/intelligence" className="hover:text-amber-500 transition-colors">Intelligence Artificielle</Link></li>
          </ul>
        </div>

        {/* Colonne 3: Contact */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact</h4>
          <p className="text-sm text-neutral-400 mb-6">
            Benguerir, UM6P.
          </p>
          <a 
            href="https://www.instagram.com/toolguard.2026/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm"
          >
            <Heart size={16} className="text-amber-500" />
            @toolguard.2026
          </a>
        </div>
      </div>

      {/* Barre de copyright ToolGuard */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-600 text-[10px] font-mono tracking-widest uppercase">
          © 2026 TOOLGUARD. ALL RIGHTS RESERVED.
        </p>
        <p className="text-stone-600 text-[10px] uppercase tracking-widest">
          Built with Next.js & Passion pour l&apos;Optimisation Industrielle.
        </p>
      </div>
    </footer>
  )
}