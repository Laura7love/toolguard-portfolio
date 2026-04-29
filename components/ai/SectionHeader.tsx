"use client"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-indigo-500/10 border border-indigo-500/30 
                       text-indigo-400 text-xs font-mono mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
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

export function StatPill({ label, value }: { label: string; value: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="px-4 py-3 rounded-full bg-neutral-800/50 border border-neutral-700 
                 flex items-center gap-3"
    >
      <span className="text-xs font-mono text-neutral-400">{label}</span>
      <span className="text-lg font-black text-white">{value}</span>
    </motion.div>
  )
}

export function MetricCard({
  metric,
  value,
  description,
  color,
  trend
}: {
  metric: string
  value: string
  description: string
  color: string
  trend: string
}) {
  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400" },
    cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400" },
    teal: { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-400" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400" },
  };

  const c = colorMap[color] || colorMap.indigo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`${c.bg} ${c.border} border rounded-2xl p-6`}
    >
      <div className={`${c.text} font-mono text-xs mb-2 uppercase tracking-wider`}>
        {metric}
      </div>
      <div className="text-3xl font-black text-white mb-2">{value}</div>
      <div className="text-xs text-neutral-400 mb-2">{description}</div>
      <div className="text-xs font-semibold text-neutral-300">{trend}</div>
    </motion.div>
  )
}

export function InsightCard({
  icon,
  title,
  content
}: {
  icon: string
  title: string
  content: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl"
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl mt-1">{icon}</span>
        <div>
          <h4 className="text-amber-400 font-semibold mb-2">{title}</h4>
          <p className="text-neutral-300 text-sm leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function AnimatedCounter({
  value,
  suffix,
  className
}: {
  value: number
  suffix?: string
  className?: string
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {value}
      {suffix && <>{suffix}</>}
    </motion.span>
  )
}
