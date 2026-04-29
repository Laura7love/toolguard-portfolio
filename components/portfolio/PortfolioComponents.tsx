"use client"
import { motion } from "framer-motion"

export function PortfolioSectionHeader({
  badge,
  title,
  subtitle,
}: {
  badge?: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-orange-500/10 border border-orange-500/30 
                       text-orange-400 text-xs font-mono mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          {badge}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export function EquationDisplay({ equations }: { equations: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6"
    >
      <div className="text-neutral-400 text-xs font-mono mb-4 uppercase tracking-widest">
        Équations
      </div>
      <div className="space-y-3">
        {equations.map((eq, i) => (
          <div
            key={i}
            className="font-mono text-sm text-cyan-300 bg-neutral-800/50 p-3 rounded-lg"
          >
            {eq}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function ForceFlow({
  steps,
}: {
  steps: Array<{
    label: string
    formula: string
    result: string
    color: string
  }>
}) {
  const colorMap: Record<string, string> = {
    blue: "from-blue-500/20 to-blue-500/5",
    indigo: "from-indigo-500/20 to-indigo-500/5",
    violet: "from-violet-500/20 to-violet-500/5",
    purple: "from-purple-500/20 to-purple-500/5",
    pink: "from-pink-500/20 to-pink-500/5",
  }

  return (
    <div className="space-y-4">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`p-4 rounded-lg bg-gradient-to-r ${colorMap[step.color]} border border-neutral-700`}
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <div className="text-neutral-400 text-xs font-mono mb-1">
                {step.label}
              </div>
              <div className="font-mono text-sm text-cyan-300">
                {step.formula}
              </div>
            </div>
            <div className="text-right">
              <div className="text-neutral-400 text-xs mb-1">RÉSULTAT</div>
              <div className="font-mono font-bold text-white">
                {step.result}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function MetricBar({
  label,
  value,
  unit,
  max,
  color = "orange",
}: {
  label: string
  value: number
  unit: string
  max: number
  color?: string
}) {
  const percentage = (value / max) * 100
  const colorClasses: Record<string, { bar: string; text: string }> = {
    orange: { bar: "from-orange-500 to-amber-500", text: "text-orange-400" },
    blue: { bar: "from-blue-500 to-cyan-500", text: "text-blue-400" },
    emerald: { bar: "from-emerald-500 to-green-500", text: "text-emerald-400" },
  }

  const c = colorClasses[color]

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-neutral-400">{label}</span>
        <span className={`font-mono font-bold ${c.text}`}>
          {value} {unit}
        </span>
      </div>
      <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${c.bar}`}
          initial={{ width: "0%" }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function ComponentCard({
  name,
  role,
  specs,
  pins,
  why,
}: {
  name: string
  role: string
  specs: string[]
  pins: string | string[]
  why: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-neutral-900/50 border border-neutral-700 rounded-2xl p-6 hover:border-orange-500/30 transition-colors"
    >
      <h4 className="text-white font-bold text-lg mb-2">{name}</h4>
      <p className="text-orange-400 text-sm mb-4 italic">{role}</p>

      <div className="space-y-3 mb-4">
        <div>
          <div className="text-neutral-500 text-xs font-mono mb-1">SPECS</div>
          <div className="space-y-1">
            {specs.map((spec) => (
              <div key={spec} className="text-neutral-300 text-xs">
                • {spec}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-neutral-500 text-xs font-mono mb-1">
            CONNEXIONS
          </div>
          {Array.isArray(pins) ? (
            <div className="space-y-1">
              {pins.map((pin) => (
                <div key={pin} className="text-neutral-300 text-xs">
                  • {pin}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-neutral-300 text-xs">{pins}</div>
          )}
        </div>
      </div>

      <div className="p-3 bg-neutral-800/50 rounded-lg border-l-2 border-orange-500">
        <div className="text-neutral-400 text-xs mb-1">POURQUOI</div>
        <p className="text-neutral-300 text-xs leading-relaxed">{why}</p>
      </div>
    </motion.div>
  )
}

export function TabCard({
  isActive,
  onClick,
  icon,
  title,
  description,
}: {
  isActive: boolean
  onClick: () => void
  icon?: string
  title: string
  description?: string
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`p-4 rounded-xl text-left transition-all ${
        isActive
          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/50"
          : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start gap-3">
        {icon && <span className="text-xl mt-1">{icon}</span>}
        <div>
          <div className="font-semibold">{title}</div>
          {description && (
            <div className="text-xs opacity-75 mt-1">{description}</div>
          )}
        </div>
      </div>
    </motion.button>
  )
}

export function ProgressBar({
  steps,
  currentStep,
}: {
  steps: number
  currentStep: number
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: steps }).map((_, i) => (
        <motion.div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i < currentStep ? "bg-orange-500" : "bg-neutral-700"
          }`}
          style={{ width: `${100 / steps}%` }}
        />
      ))}
    </div>
  )
}

export function InfoCard({
  icon,
  title,
  description,
  color = "orange",
}: {
  icon: string
  title: string
  description: string
  color?: "orange" | "emerald" | "blue"
}) {
  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
  }

  const c = colorClasses[color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`p-6 ${c.bg} border ${c.border} rounded-2xl`}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl mt-1">{icon}</span>
        <div>
          <h4 className={`${c.text} font-bold mb-2`}>{title}</h4>
          <p className="text-neutral-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
