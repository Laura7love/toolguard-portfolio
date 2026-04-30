"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { portfolioPages } from "@/lib/portfolio-data"
import { 
  Database, 
  Globe, 
  Terminal, 
  Server, 
  Cpu, 
  Camera, 
  Search, 
  MessageSquare,
  ShieldCheck,
  Zap
} from "lucide-react"

// --- DONNÉES TECHNIQUES ---
const stackLayers = [
  { id: "front", title: "Frontend", tech: "React / TS / Tailwind", icon: Globe, color: "text-blue-400", bg: "bg-blue-400/10" },
  { id: "back", title: "Backend / API", tech: "Node.js / Express", icon: Server, color: "text-purple-400", bg: "bg-purple-400/10" },
  { id: "orm", title: "ORM / Persistence", tech: "Prisma / PostgreSQL", icon: Database, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { id: "hardware", title: "Hardware Bridge", tech: "Serial / USB / Arduino", icon: Cpu, color: "text-orange-400", bg: "bg-orange-400/10" },
  { id: "vision", title: "Computer Vision", tech: "YOLOv8 / OpenCV", icon: Camera, color: "text-red-400", bg: "bg-red-400/10" }
];

const apiRoutes = [
  { method: "POST", path: "/api/auth", desc: "Scan badge → JWT Token", logic: "Vérification UID RFID + Droits" },
  { method: "GET", path: "/api/tools", desc: "Catalogue + Filtres", logic: "Prisma findMany() avec filtres" },
  { method: "POST", path: "/api/borrows", desc: "Emprunt + Commande", logic: "Mise à jour BDD + Signal Arduino" },
  { method: "GET", path: "/api/analytics", desc: "Stats d'utilisation", logic: "Agrégation de données PostgreSQL" }
];

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[10px] font-mono uppercase tracking-widest rounded-md">
    {children}
  </span>
);

export default function LogicielPage() {
  const data = portfolioPages.find(p => p.id === "soft");
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  if (!data) return null;

  return (
    <main className="bg-[#050505] min-h-screen text-zinc-300 selection:bg-purple-500/30 font-sans pb-32">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-24 px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <Badge>Full-Stack MERN + IoT</Badge>
            <h1 className="text-7xl lg:text-8xl font-black text-white leading-[0.85] mt-6 mb-8 uppercase italic">
              Software <br /><span className="text-purple-500 font-mono">Architecture</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-lg leading-relaxed border-l-2 border-purple-500/50 pl-6">
              Architecturer l&apos;intelligence industrielle pour garantir une traçabilité totale entre l&apos;opérateur et le matériel.
            </p>
          </motion.div>

          <div className="relative space-y-4">
            {stackLayers.map((layer, idx) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onHoverStart={() => setActiveLayer(layer.id)}
                className={`group relative p-6 rounded-2xl border transition-all cursor-crosshair ${
                  activeLayer === layer.id ? 'bg-zinc-900 border-purple-500/50' : 'bg-zinc-900/40 border-white/5'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`p-3 rounded-xl ${layer.bg} ${layer.color}`}>
                    <layer.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{layer.title}</h3>
                    <p className="text-zinc-500 text-sm font-mono">{layer.tech}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: API ROUTES */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Terminal className="text-purple-500 w-8 h-8" />
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Endpoints API Scellés</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {apiRoutes.map((route, i) => (
              <div key={i} className="group p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className={`font-mono font-bold text-xs px-3 py-1 rounded ${
                    route.method === "POST" ? "bg-emerald-500/10 text-emerald-400" : "bg-blue-500/10 text-blue-400"
                  }`}>
                    {route.method}
                  </span>
                  <div>
                    <code className="text-zinc-200 text-sm">{route.path}</code>
                    <p className="text-zinc-500 text-xs mt-1">{route.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block text-[10px] font-mono text-zinc-600 uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full italic">
                  {route.logic}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-600/5 rounded-[2.5rem] border border-purple-500/20 p-8 flex flex-col justify-center text-center">
            <ShieldCheck className="w-12 h-12 text-purple-500 mx-auto mb-6" />
            <h4 className="text-white font-bold mb-2 uppercase italic text-xs tracking-widest">Sécurité JWT</h4>
            <p className="text-zinc-500 text-sm italic">
              Validation par token asymétrique garantissant l&apos;intégrité des commandes mécaniques.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: RAG PIPELINE */}
      <section className="py-32 px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-square bg-black rounded-[3rem] border border-white/10 p-12 overflow-hidden flex flex-col justify-center group">
              <div className="absolute inset-0 bg-purple-500/5 blur-3xl group-hover:bg-purple-500/10 transition-all" />
              <div className="relative space-y-8">
                {[
                  { icon: Search, label: "Semantic Search (ChromaDB)" },
                  { icon: MessageSquare, label: "Context Retrieval (PostgreSQL)" },
                  { icon: Cpu, label: "LLM Inference (Ollama)" },
                  { icon: Zap, label: "SSE Streaming (Real-time UI)" }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-purple-500 border border-white/5">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 h-px bg-zinc-800" />
                    <span className="text-xs font-mono text-zinc-400">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge>Intelligence Artificielle</Badge>
              <h2 className="text-4xl font-black text-white mt-6 mb-8 uppercase italic">
                Pipeline RAG <br /><span className="text-purple-500 font-mono">Augmenté</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 italic">
                Mise en place d&apos;une architecture de Recherche Augmentée par Génération (RAG) avec ChromaDB pour une documentation technique interactive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CODE SNIPPET */}
      <section className="py-32 px-8 max-w-5xl mx-auto">
        <div className="bg-black rounded-[3rem] p-12 border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
            <Database className="w-32 h-32 text-purple-500" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
             Core Access Logic
          </h3>
          
          <div className="font-mono text-sm md:text-base leading-relaxed text-zinc-400 overflow-x-auto">
            <span className="text-neutral-500 italic">{"// Vérification RFID & Ouverture Cabinet"}</span><br/>
            <span className="text-purple-500">async function</span> <span className="text-blue-400">handleToolAccess</span>(uidRFID: string) {"{"}<br/>
            &nbsp;&nbsp;<span className="text-purple-500">const</span> user = <span className="text-purple-500">await</span> prisma.user.findUnique({"{"} <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;where: {"{ rfid: uidRFID }"} <br/>
            &nbsp;&nbsp;{"}"});<br/><br/>
            &nbsp;&nbsp;<span className="text-purple-500">if</span> (!user || !user.isAuthorized) <span className="text-purple-500">return</span> <span className="text-orange-400">&quot;Access Denied&quot;</span>;<br/><br/>
            &nbsp;&nbsp;<span className="text-neutral-500 italic">{"// Signal à l'Arduino via le pont Serial"}</span><br/>
            &nbsp;&nbsp;arduinoBridge.send(<span className="text-orange-400">&quot;OPEN_DRAWER_1&quot;</span>);<br/>
            &nbsp;&nbsp;<span className="text-purple-500">return</span> <span className="text-emerald-400">&quot;Access Granted&quot;</span>;<br/>
            {"}"}
          </div>
        </div>
      </section>
    </main>
  );
}