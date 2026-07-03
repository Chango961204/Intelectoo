import { motion } from "framer-motion"

export default function ContactChannelCard({ channel, index, inView }) {
  return (
    <motion.a
      href={channel.href}
      target={channel.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative group block rounded-3xl overflow-hidden"
    >
      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${channel.accent}30, transparent)`, filter: "blur(1px)" }} />
      <div className="relative rounded-3xl p-5 flex items-center gap-4 transition-all duration-300 bg-white/90 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm hover:bg-white">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300" style={{ background: `${channel.accent}12`, border: `1px solid ${channel.accent}20`, color: channel.accent }}>
          {channel.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] font-semibold mb-1" style={{ color: channel.accent }}>
            {channel.label}
          </p>
          <p className="text-sm font-semibold truncate text-slate-900">{channel.value}</p>
          <p className="text-xs text-slate-500">{channel.desc}</p>
        </div>
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" style={{ color: channel.accent }}>
          →
        </span>
      </div>
    </motion.a>
  )
}
