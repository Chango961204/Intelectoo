import { motion } from "framer-motion"

export default function FeatureCard({ title, description, accent = "#0e76fd", icon, onClick, label = "Ver más" }) {
  return (
    <motion.button
      type={onClick ? "button" : "submit"}
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full text-left rounded-3xl overflow-hidden bg-white/80 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.92)" }}
    >
      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${accent}25, transparent 60%)` }} />
      <div className="relative z-10 p-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5" style={{ background: `${accent}18`, border: `1px solid ${accent}30`, color: accent }}>
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-3" style={{ color: "#0f172a" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
        {onClick && (
          <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
            {label} →
          </span>
        )}
      </div>
    </motion.button>
  )
}
