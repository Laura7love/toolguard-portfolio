"use client";
import { motion } from "framer-motion";

export default function ConceptionPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-5xl font-black mb-6 uppercase">
          Conception <span className="text-[var(--tg-azur)]">& Fabrication</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold border-l-4 border-[var(--tg-marron)] pl-4">Châssis Acier S235</h2>
            <p className="text-[var(--tg-subtext)] leading-relaxed text-lg">
              Le squelette de ToolGuard est conçu pour la durabilité. Utilisation de tubes carrés 20x20mm 
              avec des coupes à 45&deg; pour une rigidité structurelle maximale.
            </p>
          </div>
          <div className="bg-[var(--tg-card)] aspect-video rounded-2xl border border-[var(--tg-border)] flex items-center justify-center italic text-[var(--tg-subtext)]">
            [Insérer Vue SolidWorks]
          </div>
        </div>
      </motion.div>
    </main>
  );
}