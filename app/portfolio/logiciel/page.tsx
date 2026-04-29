"use client"
import { motion } from "framer-motion"
import { portfolioPages } from "@/lib/portfolio-data"

export default function LogicielPage() {
  const data = portfolioPages.find(p => p.id === "soft");
  if (!data) return null;

  return (
    <main className="bg-stone-950 min-h-screen text-white p-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto">
        <header className="mb-20">
          <h1 className="text-8xl font-black uppercase italic text-purple-500 mb-4">{data.title}</h1>
          <p className="text-2xl text-neutral-500 font-light max-w-3xl">Architecturer l&apos;intelligence industrielle pour une traçabilité totale.</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Bento Grid Technique */}
          <div className="lg:col-span-2 bg-neutral-900/50 p-10 rounded-[50px] border border-white/5">
            <h3 className="text-purple-400 font-mono mb-6">{`// Full-Stack MERN + IoT`}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Next.js", "Node.js", "MongoDB", "Arduino", "Socket.io", "OpenCV", "Tailwind", "Python"].map(t => (
                <div key={t} className="px-4 py-2 bg-black/40 rounded-xl text-xs text-center border border-white/5">{t}</div>
              ))}
            </div>
          </div>
          
          <div className="bg-purple-500/10 p-10 rounded-[50px] border border-purple-500/20 flex flex-col justify-between">
             <div className="text-5xl font-black italic">8</div>
             <div className="text-sm uppercase tracking-[0.3em] text-purple-400">Endpoints API sécurisés</div>
          </div>
        </div>

        {/* Section Code & Logique */}
        <div className="bg-black rounded-3xl p-8 border border-white/5 font-mono text-sm leading-relaxed overflow-x-auto shadow-2xl">
          <div className="flex gap-2 mb-4"><div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-500"/><div className="w-3 h-3 rounded-full bg-green-500"/></div>
          <span className="text-neutral-500">{`// Auth & Scan Logic`}</span><br/>
          <span className="text-purple-400">const</span> handleToolAccess = <span className="text-blue-400">async</span> (uid) =&gt; &#123;<br/>
          &nbsp;&nbsp;<span className="text-purple-400">const</span> user = <span className="text-purple-400">await</span> User.findOne(&#123; rfid: uid &#125;);<br/>
          &nbsp;&nbsp;<span className="text-purple-400">if</span> (!user.isAuthorized) <span className="text-blue-400">throw new</span> Error(<span className="text-orange-400">&apos;Access Denied&apos;</span>);<br/>
          &nbsp;&nbsp;cabinet.open();<br/>
          &#125;
        </div>
      </motion.div>
    </main>
  );
}