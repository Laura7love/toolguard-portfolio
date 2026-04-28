'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-10 h-16 bg-slate-950/94 backdrop-blur border-b border-blue-500/20">
      <Link href="/" className="flex items-center gap-2 font-rajdhani font-bold text-xl">
        <svg className="w-8 h-8" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="17" cy="17" r="15.5" stroke="#2472C8" strokeWidth="1.4" fill="none" />
          <rect x="8" y="10" width="18" height="5.5" rx="2" fill="#1B5EA8" />
          <rect x="8" y="17.5" width="18" height="6.5" rx="2" fill="#1B5EA8" />
          <rect x="12" y="9" width="10" height="3" rx="1.5" fill="#2472C8" />
          <circle cx="17" cy="20.8" r="2.4" fill="#3B8DE0" />
          <circle cx="17" cy="20.8" r="1.1" fill="#060E1A" />
        </svg>
        <span className="text-slate-100">TOOL</span>
        <span className="text-blue-400">GUARD</span>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-0 list-none">
        <li><a href="#overview" className="block px-3 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 transition">Projet</a></li>
        <li><a href="#how" className="block px-3 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 transition">Fonctionnement</a></li>
        <li><a href="#technique" className="block px-3 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 transition">Technique</a></li>
        <li><a href="#ai" className="block px-3 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 transition">IA</a></li>
        <li><a href="#interface" className="block px-3 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 transition">Interface</a></li>
        <li><a href="#robot" className="block px-3 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 transition">Robot</a></li>
        <li><a href="#team" className="block px-3 py-1 text-sm font-medium text-slate-400 hover:text-slate-100 transition">Équipe</a></li>
        <li><a href="#team" className="block px-3 py-1 bg-blue-700 text-slate-100 rounded font-semibold hover:bg-blue-600 transition">Promo 2027</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="hidden flex-col gap-1 cursor-pointer lg:hidden"
      >
        <span className="block w-6 h-0.5 bg-slate-400 rounded"></span>
        <span className="block w-6 h-0.5 bg-slate-400 rounded"></span>
        <span className="block w-6 h-0.5 bg-slate-400 rounded"></span>
      </button>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-950/98 border-b border-blue-500/20 p-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            <li><a href="#overview" className="text-slate-400 hover:text-slate-100">Projet</a></li>
            <li><a href="#how" className="text-slate-400 hover:text-slate-100">Fonctionnement</a></li>
            <li><a href="#technique" className="text-slate-400 hover:text-slate-100">Technique</a></li>
            <li><a href="#ai" className="text-slate-400 hover:text-slate-100">IA</a></li>
            <li><a href="#interface" className="text-slate-400 hover:text-slate-100">Interface</a></li>
            <li><a href="#robot" className="text-slate-400 hover:text-slate-100">Robot</a></li>
            <li><a href="#team" className="text-slate-400 hover:text-slate-100">Équipe</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
