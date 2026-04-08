import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { BadgeCheck,Star, X, Flag, HandCoins, UserRoundCheck, UserRoundCog, RefreshCw } from "lucide-react"

const mvv = [
    {
        icon: <BadgeCheck size={22} />,
        label: "Direccion estrategica.",
        title: "Saber hacia dónde ir",
        accent: "#3b82f6",
        modalContent: {
            intro: "Conecta vision, estrategia y acción.",
            points: [
                { title: "Planeación estratégica." },
                { title: "Hoshin Kanri." },
                { title: "Gobierno Corporativo." },
                { title: "Mejora Continua." },
                { title: "5 'S'." },

            ],
        },
    },
    {
        icon: <Flag size={22} />,
        label: "Liderazgo.",
        title: "Movilizar personas a resultados extraordinarios",
        accent: "#6366f1",
        modalContent: {
            intro: "Desarrolla un liderazgo transformador que inspire, movilice y potencie a tus equipos.",
            points: [
                { title: "Huella de líder." },
                { title: "Mandos medios accionando con impacto." },
                { title: "Supervisores que inspiran acción." },
            ],
        },
    },
    {
        icon: <HandCoins size={22} />,
        label: "Cultura organizacional.",
        title: "Como realmente se trabaja",
        accent: "#a78bfa",
        modalContent: {
            intro: "Conecta al colaborador con su propósito y rol dentro de la organización para generar compromiso y responsabilidad.",
            points: [
                { title: "Conciencia laboral." },
                { title: "Bienestar con ", desc: "NOM-035." },
                { title: "Servicio al cliente."},
            ],
        },
    },
    {
        icon: <UserRoundCog size={22} />,
        label: "Gestión de talento.",
        title: "Personas que hacen la diferencia",
        accent: "#a78bfa",
        modalContent: {
            intro: "Herramientas prácticas para atraer, formar y retener a las personas clave para el éxito de tu organización.",
            points: [
                { title: "Gestion por competencias." },
                { title: "Desarrollo de capital humano." },
                { title: "Cumplimiento legal en capacitación." },
                { title: "Formacion de instructores." },
            ],
        },
    },
    {
        icon: <UserRoundCheck size={22} />,
        label: "Excelencia operativa.",
        title: "Hacerlo bien, todo el tiempo",
        accent: "#a78bfa",
        modalContent: {
            intro: "Optimizamos procesos, estandarizamos prácticas y promovemos la mejora continua para lograr eficiencia, calidad y consistencia en la operación.",
            points: [
                { title: "Interpretacion de la norma", desc: "iso 9011" },
                { title: "Gestión de auditorías bajo la norma" , desc: "iso 19011" },
                { title: "Mejora continua." },
            ],
        },
    },
    {
        icon: <RefreshCw size={22} />,
        label: "Compilance 360°.",
        title: "Diseñmos e implementamos Sistemas Integrales de Cumplimiento, Ética y Gestión de Riesgos para proveedores Estratégicos.",
        accent: "#a78bfa",
        modalContent: {
            intro: "Alineando a estándares internaciones; que te permiten:",
            points: [
                { title: "Cumplimiento proporcional al tamaño de tu empresa." },
                { title: "Cumplir con auditorias y requerimientos de clientes." },
                { title: "Proteger la continuidad de tus contratos, sin distraer a tu equipo operativo." },
            ],
        },
    },
]

/*──────────────────────────────────────────
  MODAL COMPONENT
──────────────────────────────────────────*/
function MVVModal({ item, onClose }) {
    if (!item) return null

    return (
        <AnimatePresence>
            <>
                {/* Backdrop */}
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 bg-[#020c1e]/90 backdrop-blur-md"
                />

                {/* Modal Panel */}
                <motion.div
                    key="modal"
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 20 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    style={{ pointerEvents: "none" }}
                >
                    <div
                        className="relative w-full max-w-lg rounded-3xl overflow-hidden"
                        style={{
                            pointerEvents: "auto",
                            background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 50%, #eef6fb 100%)",
                            border: `1px solid ${item.accent}25`,
                            boxShadow: `0 0 80px ${item.accent}12, 0 30px 60px rgba(15, 23, 42, 0.16)`,
                        }}
                    >
                        {/* Top accent line */}
                        <div
                            className="h-px w-full"
                            style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                        />

                        {/* Ambient glow */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                            style={{ background: `radial-gradient(circle, ${item.accent}14 0%, transparent 70%)` }}
                        />

                        <div className="relative p-8 sm:p-10">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                            >
                                <X size={16} />
                            </button>

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-7">
                                <div
                                    className="flex items-center justify-center w-12 h-12 rounded-2xl flex-shrink-0"
                                    style={{
                                        background: `${item.accent}18`,
                                        border: `1px solid ${item.accent}30`,
                                        color: item.accent,
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <span
                                        className="block text-xs uppercase tracking-widest font-semibold mb-0.5"
                                        style={{ color: item.accent, opacity: 0.7 }}
                                    >
                                        {item.label}
                                    </span>
                                    <h3 className="font-black text-xl tracking-tight text-slate-900">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Intro */}
                            <p className="text-sm leading-relaxed mb-8 pb-8 text-slate-600 border-b border-slate-200">
                                {item.modalContent.intro}
                            </p>

                            {/* Points */}
                            <div className="space-y-5">
                                {item.modalContent.points.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex gap-4"
                                    >
                                        <div
                                            className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mt-0.5"
                                            style={{ background: `${item.accent}15`, color: item.accent }}
                                        >
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm mb-1 text-slate-900">
                                                {point.title}
                                            </p>
                                            {point.desc && (
                                                <p className="text-sm leading-relaxed text-slate-600">
                                                    {point.desc}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="mt-9 flex items-center justify-between">
                                <span className="text-xs text-slate-400">
                                    INTELECTO
                                </span>
                                <button
                                    onClick={onClose}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300"
                                    style={{
                                        background: `${item.accent}18`,
                                        border: `1px solid ${item.accent}30`,
                                        color: item.accent,
                                    }}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <div
                            className="h-px w-full"
                            style={{ background: `linear-gradient(90deg, transparent, ${item.accent}40, transparent)` }}
                        />
                    </div>
                </motion.div>
            </>
        </AnimatePresence>
    )
}

/*──────────────────────────────────────────
  MAIN PAGE COMPONENT
──────────────────────────────────────────*/
export default function Servicios() {
    const [activeModal, setActiveModal] = useState(null)

    const mvvRef = useRef(null)
    const mvvInView = useInView(mvvRef, { once: true, margin: "-60px" })

    return (
        <div
            className="relative min-h-screen text-white"
            style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f4f7fb 50%, #ffffff 100%)",
                fontFamily: "'Sora', 'DM Sans', sans-serif",
            }}
        >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&display=swap');`}</style>

            {/* Modal — fuera del flujo de scroll */}
            <MVVModal item={activeModal} onClose={() => setActiveModal(null)} />

            {/* Ambient blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
                <div style={{ position: "absolute", top: "5%", left: "-15%", width: 700, height: 700, background: "radial-gradient(circle, rgba(0,119,182,0.10) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />
                <div style={{ position: "absolute", bottom: "0%", right: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(50px)" }} />
            </div>

            {/* Grid pattern */}
            <svg className="fixed inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025, zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="nos-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00b4d8" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#nos-grid)" />
            </svg>

            <div className="relative" style={{ zIndex: 2 }}>

                {/*──── HERO ────*/}
                <section className="pt-40 pb-20 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 mb-8"
                    >
                        <div className="h-px w-10 bg-[#00b4d8]/50" />
                        <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "#00b4d8" }}>
                            Servicios
                        </span>
                        <div className="h-px w-10 bg-[#00b4d8]/50" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-black tracking-tight leading-none"
                        style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
                    >
                        <span className="text-blue-950">Modelo </span>
                        <span style={{ background: "linear-gradient(135deg, #000000, #00b4d8, #0077b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Intelecto
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mt-6 text-lg max-w-lg mx-auto font-light text-sky-900"
                    >
                        Integra cinco pilares estratégicos que permiten alinear
                        la dirección, fortalecer el liderazgo, desarrollar la cultura
                        organizacional, potenciar el talento y optimizar la
                        operación.
                    </motion.p>
                    <p className="mt-4 text-base max-w-2xl mx-auto font-light text-sky-900">
                        Todo el modelo se encuentra respaldado por el Sistema
                        Intelecto Compliance 360°
                        , asegurando organizaciones
                        sólidas, éticas y sostenibles.
                    </p>
                </section>

                {/*──── MISIÓN / VISIÓN / VALORES ────*/}
                <section className="py-20 px-6" ref={mvvRef}>
                    <div className="max-w-6xl mx-auto">

                        <div className="flex items-center gap-4 mb-14">
                            <div className="h-px flex-1 bg-[#00b4d8]/10" />
                            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "#00b4d8" }}>
                                Modelo intelecto
                            </span>
                            <div className="h-px flex-1 bg-[#00b4d8]/10" />
                        </div>

                        <div className="grid md:grid-cols-3 gap-5">
                            {mvv.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={mvvInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative"
                                >
                                    {/* Hover glow border */}
                                    <div
                                        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ background: `linear-gradient(135deg, ${item.accent}33, transparent)`, filter: "blur(1px)" }}
                                    />

                                    <div className="relative h-full rounded-2xl p-8 overflow-hidden flex flex-col bg-white/80 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                                        {/* Inner shine */}
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/70 via-white/30 to-transparent" />

                                        {/* Icon */}
                                        <div
                                            className="relative z-10 inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                                            style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30`, color: item.accent }}
                                        >
                                            {item.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 flex-1">
                                            <span
                                                className="text-xs uppercase tracking-widest font-semibold mb-2 block opacity-90"
                                                style={{ color: item.accent }}
                                            >
                                                {item.label}
                                            </span>
                                            <h3 className="font-bold text-lg mb-3 text-slate-900">
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Ver más button */}
                                        <button
                                            onClick={() => setActiveModal(item)}
                                            className="relative z-10 mt-7 self-start flex items-center gap-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 group/btn"
                                            style={{ color: item.accent }}
                                        >
                                            <span style={{ opacity: 0.65, transition: "opacity 0.2s" }}
                                                onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                                                onMouseLeave={e => e.currentTarget.style.opacity = "0.65"}
                                            >
                                                Ver más
                                            </span>
                                            <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1" style={{ opacity: 0.65 }}>
                                                →
                                            </span>
                                        </button>

                                        {/* Bottom accent line on hover */}
                                        <div
                                            className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                                            style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/*──── CTA ────*/}
                <section className="py-28 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2
                                className="font-black tracking-tight leading-none mb-5 text-blue-950"
                                style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
                            >
                                ¿Trabajamos{" "}
                                <span style={{ background: "linear-gradient(135deg, #000000, #00b4d8, #0077b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                                    juntos?
                                </span>
                            </h2>
                            <p className="mb-10 font-light text-sky-900">
                                Conoce todo lo que podemos hacer por tu organización.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/servicios"
                                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white"
                                    style={{
                                        background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                                        boxShadow: "0 0 24px rgba(99,102,241,0.3)",
                                    }}
                                >
                                    Ver servicios{" "}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                                <Link
                                    to="/contacto"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 border border-[#00b4d8]/15 text-blue-900/90 hover:border-[#00b4d8]/45 hover:text-blue-950 hover:bg-[#00b4d8]/5"
                                >
                                    Contáctanos
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>
        </div>
    )
}
