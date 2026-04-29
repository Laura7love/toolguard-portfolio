// app/intelligence/page.tsx
"use client"
import { HeroAI } from "@/components/ai/HeroAI"
import { ProblemSection } from "@/components/ai/ProblemSection"
import { MLPipeline } from "@/components/ai/MLPipeline"
import { DatasetSection } from "@/components/ai/DatasetSection"
import { TrainingResults, LiveDemo } from "@/components/ai/TechnicalResults"
import { DecisionLogic } from "@/components/ai/DecisionLogic"
import { AIStack } from "@/components/ai/AIStack"

export default function IntelligencePage() {
  return (
    <main className="bg-neutral-950 min-h-screen">
      {/* 1. Hero - L'accroche visuelle impactante */}
      <HeroAI />
      
      {/* 2. Le Problème - Pourquoi l'IA était indispensable */}
      <ProblemSection />
      
      {/* 3. Le Pipeline ML - Du pixel à la décision */}
      <MLPipeline />
      
      {/* 4. Le Dataset - Chaque image compte */}
      <DatasetSection />
      
      {/* 5. Les Résultats d'Entraînement - Les métriques */}
      <TrainingResults />
      
      {/* 6. La Logique de Décision - FC4 & FC6 */}
      <DecisionLogic />
      
      {/* 7. La Démo Live - Détection en temps réel */}
      <LiveDemo />
      
      {/* 8. Tech Stack & Perspectives */}
      <AIStack />
      
      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold">
          ToolGuard IA — YOLOv8n-seg · Production Ready
        </p>
      </footer>
    </main>
  )
}