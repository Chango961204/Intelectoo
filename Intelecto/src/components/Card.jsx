import { motion } from "framer-motion"

export default function Card({ title, description, icon }) {
  const items = Array.isArray(description) ? description : [description]

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {/* Glow border on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(99,102,241,0.2), transparent)",
          filter: "blur(1px)",
        }}
      />

      <div
        className="relative h-full rounded-2xl p-7 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Inner shine */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
          }}
        />

        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at top right, rgba(59,130,246,0.15), transparent 70%)",
          }}
        />

        {/* Icon */}
        <div
          className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            color: "#60a5fa",
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          className="relative z-10 font-bold text-lg leading-snug mb-4"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {title}
        </h3>

        {/* Description list */}
        <ul className="relative z-10 flex flex-col gap-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "#3b82f6", opacity: 0.7 }}
              />
              <span
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Bottom line reveal */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
          style={{ background: "linear-gradient(90deg, #3b82f6, #6366f1, transparent)" }}
        />
      </div>
    </motion.div>
  )
}