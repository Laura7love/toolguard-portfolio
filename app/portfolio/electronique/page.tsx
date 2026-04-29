"use client"
import { portfolioPages } from "@/lib/portfolio-data"
import type { PortfolioStat } from "@/lib/portfolio-data"

export default function ElectroniquePage() {
  const data = portfolioPages.find(p => p.id === "elec");
  if (!data) return null;

  return (
    <main className="bg-stone-950 min-h-screen text-white p-12">
      <header className="max-w-7xl mx-auto mb-20">
        <h1 className="text-[8vw] font-black uppercase italic text-blue-500 leading-none">{data.title}</h1>
        <p className="text-2xl text-neutral-500 mt-6 max-w-3xl">{data.description}</p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.stats.map((stat: PortfolioStat) => (
          <div key={stat.label} className="bg-blue-500/10 border border-blue-500/20 p-10 rounded-[40px]">
            <div className="text-5xl font-black text-blue-400 mb-2">{stat.value}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-bold">{stat.label}</div>
          </div>
        ))}
      </div>

      <section className="max-w-4xl mx-auto mt-32 bg-neutral-900/50 p-12 rounded-[50px] border border-white/5">
        <h2 className="text-2xl font-bold mb-8 italic uppercase text-blue-400">Architecture Arduino Mega</h2>
        <ul className="space-y-6 text-neutral-300 text-lg">
          <li>• Lecteur RFID RC522 pour l&apos;authentification des opérateurs.</li>
          <li>• Pilotage PWM pour le contrôle précis des servomoteurs.</li>
          <li>• Gestion d&apos;énergie double tension (12V puissance / 5V logique).</li>
        </ul>
      </section>
    </main>
  );
}