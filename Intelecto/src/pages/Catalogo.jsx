import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useState } from "react"

const categorias = ["Todos", "Consultoría", "Capacitación", "Gestión"]

const items = [
  { id: 1, title: "Incubación de Negocios", categoria: "Consultoría", tag: "Estrategia", accent: "#3b82f6" },
  { id: 2, title: "Liderazgo Empresarial", categoria: "Capacitación", tag: "Capital Humano", accent: "#6366f1" },
  { id: 3, title: "ISO 9001:2015", categoria: "Gestión", tag: "Certificación", accent: "#a78bfa" },
  { id: 4, title: "Desarrollo Organizacional", categoria: "Consultoría", tag: "Cultura", accent: "#3b82f6" },
  { id: 5, title: "Habilidades Directivas", categoria: "Capacitación", tag: "Formación", accent: "#6366f1" },
  { id: 6, title: "Mejora Continua", categoria: "Gestión", tag: "Procesos", accent: "#a78bfa" },
  { id: 7, title: "Planeación Estratégica", categoria: "Consultoría", tag: "Estrategia", accent: "#3b82f6" },
  { id: 8, title: "Clima Laboral", categoria: "Capacitación", tag: "Bienestar", accent: "#6366f1" },
  { id: 9, title: "Auditorías Internas", categoria: "Gestión", tag: "Calidad", accent: "#a78bfa" },
]

function CatalogCard({ item, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${item.accent}35, transparent)`, filter: "blur(1px)" }}
      />
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        {/* Image placeholder */}
        <div
          className="relative h-44 overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${item.accent}18 0%, rgba(255,255,255,0.02) 100%)` }}
        >
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }} xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id={`grid-${item.id}`} width="28" height="28" patternUnits="userSpaceOnUse"><path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(148,180,255,1)" strokeWidth="0.5" /></pattern></defs>
            <rect width="100%" height="100%" fill={`url(#grid-${item.id})`} />
          </svg>
          {/* Center orb */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 + item.id * 0.3, ease: "easeInOut" }}
              style={{ width: 80, height: 80, background: `radial-gradient(circle, ${item.accent}50 0%, transparent 70%)`, borderRadius: "50%", filter: "blur(12px)" }}
            />
          </div>
          {/* Tag */}
          <div style={{ position: "absolute", top: 14, right: 14 }}>
            <span
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ background: `${item.accent}20`, border: `1px solid ${item.accent}30`, color: item.accent }}
            >
              {item.tag}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-xs uppercase tracking-widest mb-2 font-medium" style={{ color: "rgba(148,180,255,0.45)" }}>
            {item.categoria}
          </p>
          <h3 className="font-bold leading-snug mb-4" style={{ color: "rgba(255,255,255,0.88)" }}>
            {item.title}
          </h3>
          <button
            className="group/btn inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
            style={{ color: item.accent, opacity: 0.7 }}
            onMouseEnter={e => e.currentTarget.style.opacity = "1"}
            onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}
          >
            Ver detalle
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Bottom reveal */}
        <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />
      </div>
    </motion.div>
  )
}

export default function Catalogo() {
  const [activeCategoria, setActiveCategoria] = useState("Todos")

  const filtered = activeCategoria === "Todos"
    ? items
    : items.filter(i => i.categoria === activeCategoria)

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        background: "linear-gradient(135deg, #020818 0%, #040f2a 40%, #030b1f 70%, #050a18 100%)",
        fontFamily: "'Sora', 'DM Sans', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&display=swap');`}</style>

      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div style={{ position: "absolute", top: "0%", right: "-5%", width: 600, height: 600, background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />
      </div>
      <svg className="fixed inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025, zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="cat-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(148,180,255,1)" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#cat-grid)" />
      </svg>

      <div className="relative" style={{ zIndex: 2 }}>

        {/*HERO*/}
        <section className="pt-40 pb-16 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-10" style={{ background: "rgba(148,180,255,0.5)" }} />
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "rgba(148,180,255,0.7)" }}>Explora</span>
            <div className="h-px w-10" style={{ background: "rgba(148,180,255,0.5)" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-black tracking-tight leading-none"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
          >
            Nuestro{" "}
            <span style={{ background: "linear-gradient(135deg, #60a5fa, #818cf8, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Catálogo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-lg max-w-md mx-auto font-light"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Todos nuestros programas y soluciones en un solo lugar.
          </motion.p>
        </section>

        {/*FILTER TABS*/}
        <section className="pb-14 px-6">
          <div className="max-w-6xl mx-auto flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex gap-2 p-1.5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategoria(cat)}
                  className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-300"
                  style={{ color: activeCategoria === cat ? "#fff" : "rgba(255,255,255,0.35)" }}
                >
                  {activeCategoria === cat && (
                    <motion.div
                      layoutId="cat-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/*GRID*/}
        <section className="pb-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div layout className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <CatalogCard key={item.id} item={item} i={i} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <div className="text-center py-20" style={{ color: "rgba(255,255,255,0.2)" }}>
                <p className="text-lg">No hay elementos en esta categoría</p>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  )
}