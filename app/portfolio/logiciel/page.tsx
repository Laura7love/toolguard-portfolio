"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { PortfolioSectionHeader, TabCard, InfoCard } from "@/components/portfolio/PortfolioComponents"
import { softwareStack, apiRoutes } from "@/lib/portfolio-data"

function HeroSoftware() {
  return (
    <section className="relative min-h-screen bg-purple-950 flex items-center overflow-hidden px-8 py-24">
      {/* Grille */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Texte */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 
                         border border-purple-500/30 text-purple-400 text-xs font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            React · Node.js · PostgreSQL · YOLOv8
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white leading-none mb-6">
            De l&apos;intention
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              à l&apos;action.
            </span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
            4 couches logicielles orchestrées : frontend réactif, backend décisif, base de données fiable, et IA qui voit. Chacune doit faire sa part sans dépendre des caprice de l&apos;autre.
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-neutral-700">
            {[
              { label: "Routes API", value: "4" },
              { label: "Modèles Prisma", value: "8" },
              { label: "Endpoints", value: "16+" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-purple-400 font-mono font-bold text-2xl">{stat.value}</div>
                <div className="text-neutral-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture stack placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {[
            { layer: "React", desc: "Frontend" },
            { layer: "Express", desc: "Backend" },
            { layer: "PostgreSQL", desc: "Database" },
            { layer: "Arduino", desc: "Hardware" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-neutral-900/50 border border-neutral-700 rounded-lg"
            >
              <div className="font-mono text-sm text-purple-400">{item.layer}</div>
              <div className="text-neutral-500 text-xs mt-1">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StackSection() {
  return (
    <section className="py-24 bg-purple-900 px-8">
      <div className="max-w-7xl mx-auto">
        <PortfolioSectionHeader
          badge="La pile logicielle"
          title="4 couches, 4 responsabilités"
          subtitle="Chacune fait son travail, toutes communiquent via interfaces claires"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {softwareStack.map((layer, i) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-bold text-lg">{layer.layer}</h3>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-mono rounded">
                  :{layer.port}
                </span>
              </div>

              <p className="text-neutral-400 text-sm mb-4">{layer.role}</p>

              <div className="space-y-2">
                {layer.tech.map((tech) => (
                  <div key={tech} className="inline-block px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300 mr-2 mb-2">
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Diagramme flux */}
        <motion.div
          className="mt-12 p-8 bg-neutral-900/50 border border-neutral-700 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="text-neutral-400 text-sm font-mono mb-4">Architecture des flux</div>
          <div className="space-y-2 font-mono text-xs text-cyan-300">
            <div>React (3000) ←→ HTTP/REST ←→ Express (3001)</div>
            <div>Express (3001) ←→ Prisma ORM ←→ PostgreSQL</div>
            <div>Express (3001) ←→ Serial/USB ←→ Arduino (COM3)</div>
            <div>Arduino ←→ Camera ←→ YOLOv8 (CPU)</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function APISection() {
  const [expandedRoute, setExpandedRoute] = useState<number | null>(0)

  return (
    <section className="py-24 bg-purple-950 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="API REST · 4 routes principales"
          title="Documentation vivante"
          subtitle="Les chemins critiques du système"
        />

        <div className="space-y-4 mt-12">
          {apiRoutes.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-neutral-700 rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => setExpandedRoute(expandedRoute === i ? null : i)}
                className={`w-full p-6 text-left transition-all flex items-center justify-between ${
                  expandedRoute === i
                    ? "bg-purple-500 text-white"
                    : "bg-neutral-900/50 text-neutral-300 hover:bg-neutral-800"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded text-xs font-bold ${
                      route.method === "POST" ? "bg-emerald-500/30 text-emerald-400" :
                      route.method === "GET" ? "bg-blue-500/30 text-blue-400" :
                      "bg-orange-500/30 text-orange-400"
                    }`}>
                      {route.method}
                    </span>
                    <span className="font-mono font-bold">{route.endpoint}</span>
                  </div>
                  <p className="text-sm opacity-75 mt-2">{route.description}</p>
                </div>
                <span className="text-xl">{expandedRoute === i ? "−" : "+"}</span>
              </motion.button>

              <AnimatePresence>
                {expandedRoute === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 pt-0 border-t border-neutral-700 bg-neutral-900/30"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      {route.body && (
                        <div>
                          <div className="text-purple-400 font-semibold text-sm mb-2">Request Body</div>
                          <div className="font-mono text-xs text-neutral-400 bg-neutral-800 p-3 rounded overflow-x-auto">
                            {JSON.stringify(route.body, null, 2)}
                          </div>
                        </div>
                      )}

                      {route.params && (
                        <div>
                          <div className="text-purple-400 font-semibold text-sm mb-2">Paramètres</div>
                          <div className="font-mono text-xs text-neutral-400 bg-neutral-800 p-3 rounded overflow-x-auto">
                            {JSON.stringify(route.params, null, 2)}
                          </div>
                        </div>
                      )}

                      <div>
                        <div className="text-cyan-400 font-semibold text-sm mb-2">Response</div>
                        <div className="font-mono text-xs text-neutral-400 bg-neutral-800 p-3 rounded overflow-x-auto">
                          {typeof route.response === "string"
                            ? route.response
                            : JSON.stringify(route.response, null, 2)
                          }
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChatbotSection() {
  return (
    <section className="py-24 bg-purple-900 px-8">
      <div className="max-w-5xl mx-auto">
        <PortfolioSectionHeader
          badge="Chatbot assisté — RAG Pipeline"
          title="Assistance par IA contextuelle"
          subtitle="Query → Retrieval → Generation — en streaming live"
        />

        <div className="mt-12 space-y-4">
          {[
            {
              step: "1",
              title: "Query",
              desc: "L&apos;utilisateur pose une question via le chatbot",
            },
            {
              step: "2",
              title: "ChromaDB",
              desc: "Recherche sémantique dans la base de documents embarqués",
            },
            {
              step: "3",
              title: "Ollama",
              desc: "LLM locale (Llama 2) génère la réponse avec contexte",
            },
            {
              step: "4",
              title: "SSE Streaming",
              desc: "Réponse streamée live au frontend (token par token)",
            },
          ].map((phase) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 font-bold text-purple-400">
                {phase.step}
              </div>
              <div className="flex-1 p-4 bg-neutral-900/50 rounded-lg border border-neutral-700">
                <div className="text-white font-semibold text-sm">{phase.title}</div>
                <p className="text-neutral-400 text-xs mt-1">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <InfoCard
          icon="🤖"
          title="Chatbot sur CPU uniquement"
          description="Pas de dépendance cloud. Le chatbot tourne localement sur la Mini PC du FabLab. Respecte la confidentialité, augmente la résilience du système."
          color="blue"
        />
      </div>
    </section>
  )
}

export default function LogicielPage() {
  return (
    <main className="bg-purple-950 min-h-screen">
      <HeroSoftware />
      <StackSection />
      <APISection />
      <ChatbotSection />

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-white/5 text-center">
        <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold">
          ToolGuard · Architecture logicielle scalable et documentée
        </p>
      </footer>
    </main>
  )
}
