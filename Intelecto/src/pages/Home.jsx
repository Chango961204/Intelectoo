import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"

function AnimatedCounter({ end, duration = 1.8 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    useEffect(() => {
        if (!inView) return
        let start = 0
        const step = end / (duration * 60)
        const timer = setInterval(() => {
            start += step
            if (start >= end) { setCount(end); clearInterval(timer) }
            else setCount(Math.floor(start))
        }, 1000 / 60)
        return () => clearInterval(timer)
    }, [inView, end, duration])
    return <span ref={ref}>{count}</span>
}

function SplitReveal({ text, className, delay = 0, style }) {
    return (
        <span className={className} style={{ display: "inline-block", ...style }}>
            {text.split("").map((ch, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 60, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: delay + i * 0.03, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block", transformOrigin: "bottom" }}
                >
                    {ch === " " ? "\u00A0" : ch}
                </motion.span>
            ))}
        </span>
    )
}

function StatCard({ num, label, i }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
        >
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(0,180,216,0.15) 0%, transparent 60%, rgba(10,27,92,0.1) 100%)" }} />
            <div className="relative rounded-2xl p-8 text-center overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                style={{ border: "1px solid rgba(0,180,216,0.1)" }}>
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(0,180,216,0.02) 0%, transparent 60%)" }} />
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl transition-all duration-700"
                    style={{ background: "rgba(0,180,216,0.15)" }} />
                <h2 className="text-6xl font-black"
                    style={{ background: "linear-gradient(180deg, #0a1b5c 0%, #00b4d8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    <AnimatedCounter end={num} />+
                </h2>
                <p className="mt-3 text-sm uppercase tracking-widest font-semibold"
                    style={{ color: "#475569" }}>{label}</p>
            </div>
        </motion.div>
    )
}

const services = [
    {
        icon: "◈",
        title: "Consultoría Estratégica",
        desc: "Transformamos la visión de tu organización en resultados medibles con metodologías de clase mundial.",
    },
    {
        icon: "◇",
        title: "Capacitación Especializada",
        desc: "Programas de formación diseñados a la medida para elevar el capital humano de tu empresa.",
    },
    {
        icon: "◉",
        title: "Sistemas de Gestión",
        desc: "Diseño e implementación de sistemas que optimizan procesos y certifican excelencia operacional.",
    },
]

function ServiceCard({ s, i }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
        >
            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"
                style={{ background: "linear-gradient(135deg, rgba(0,180,216,0.15) 0%, rgba(10,27,92,0.05) 50%, transparent 100%)" }} />
            <div className="relative h-full rounded-3xl p-8 transition-all duration-500 cursor-default bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
                style={{
                    border: "1px solid rgba(0,0,0,0.05)",
                }}>
                <span className="text-4xl block mb-5" style={{ color: "#00b4d8" }}>{s.icon}</span>
                <h3 className="text-xl font-bold mb-3 tracking-tight" style={{ color: "#0a1b5c" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "#00b4d8" }}>
                    <span>Explorar</span>
                    <span>→</span>
                </div>
            </div>
        </motion.div>
    )
}

export default function Home() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

    return (
        <div
            className="relative min-h-screen overflow-hidden text-slate-800"
            style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f4f7fb 50%, #ffffff 100%)",
                fontFamily: "'Sora', 'DM Sans', sans-serif",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');
                body { background: #ffffff; margin: 0; }
            `}</style>

            {/* Ambient blobs — brand colors ajustados para fondo claro */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
                <div style={{
                    position: "absolute", top: "-15%", left: "-5%",
                    width: 700, height: 700,
                    background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
                    borderRadius: "50%", filter: "blur(40px)",
                }} />
                <div style={{
                    position: "absolute", top: "20%", right: "-10%",
                    width: 600, height: 600,
                    background: "radial-gradient(circle, rgba(10,27,92,0.04) 0%, transparent 70%)",
                    borderRadius: "50%", filter: "blur(60px)",
                }} />
                <div style={{
                    position: "absolute", bottom: "-10%", left: "15%",
                    width: 500, height: 500,
                    background: "radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)",
                    borderRadius: "50%", filter: "blur(50px)",
                }} />
            </div>

            {/* Subtle grid */}
            <svg className="fixed inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2, zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="home-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(10,27,92,0.05)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#home-grid)" />
            </svg>

            <div className="relative" style={{ zIndex: 2 }}>

                {/* HERO */}
                <section
                    ref={heroRef}
                    className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="mb-2 flex items-center gap-3"
                    >
                        <div className="h-px w-10" style={{ background: "rgba(0,180,216,0.5)" }} />
                        <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "#00b4d8" }}>
                            Consultoría & Capacitación
                        </span>
                        <div className="h-px w-10" style={{ background: "rgba(0,180,216,0.5)" }} />
                    </motion.div>

                    <motion.div style={{ y: heroY, opacity: heroOpacity }} className="text-center">
                        <h1
                            className="font-black leading-none tracking-tighter select-none"
                            style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", perspective: "600px" }}
                        >
                            <SplitReveal
                                text="INTELECTO"
                                delay={0.3}
                                className="block"
                                style={{
                                    background: "linear-gradient(135deg, #0a1b5c 0%, #00b4d8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="mt-8 text-lg max-w-lg mx-auto font-light text-sky-900"
/*                             style={{ color: "#475569" }}
 */                        >
                            Soluciones de consultoría y formación para la
                            transformación de organizaciones e INTELECTO
                            humano.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.45, duration: 0.7 }}
                            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Link
                                to="/servicios"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide overflow-hidden text-white"
                                style={{ background: "linear-gradient(135deg, #0a1b5c, #00b4d8)", boxShadow: "0 4px 15px rgba(0, 180, 216, 0.2)" }}
                            >
                                <span className="relative z-10">Ver servicios</span>
                                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: "rgba(255,255,255,0.15)" }} />
                            </Link>
                            <Link
                                to="/contacto"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 bg-white shadow-sm"
                                style={{
                                    border: "1px solid rgba(10,27,92,0.15)",
                                    color: "#0a1b5c",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = "rgba(0,180,216,0.60)"
                                    e.currentTarget.style.background = "rgba(0,180,216,0.04)"
                                    e.currentTarget.style.color = "#00b4d8"
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "rgba(10,27,92,0.15)"
                                    e.currentTarget.style.background = "#ffffff"
                                    e.currentTarget.style.color = "#0a1b5c"
                                }}
                            >
                                Agendar consulta
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>

                {/* CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-20 w-full max-w-md mx-auto px-4"
                >
                    <div className="relative group">
                        <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-sm"
                            style={{ background: "linear-gradient(135deg, #020c1e 0%, #1e3a8a 40%, #3b82f6 70%, #93c5fd 100%)" }} />

                        <div className="relative rounded-3xl p-9 transition-all duration-500 bg-white shadow-[0_10px_40px_rgb(0,0,0,0.06)]"
                            style={{
                                border: "1px solid rgba(0,0,0,0.05)",
                            }}>

                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-7" style={{ background: "rgba(0,180,216,0.50)" }} />
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold"
                                    style={{ color: "#00b4d8" }}>
                                    Consultoría
                                </span>
                                <div className="h-px w-7" style={{ background: "rgba(0,180,216,0.50)" }} />
                            </div>

                            <h3 className="text-xl font-bold tracking-tight leading-snug mb-3"
                                style={{ color: "#0a1b5c" }}>
                                Si se identifica con alguna de estas situaciones, su organización está
                                lista para una transformación:
                            </h3>

                            <div className="h-px mb-5" style={{ background: "rgba(10,27,92,0.10)" }} />

                            {[
                                { title: "¿Sus líderes apagan incendios en lugar de construir el futuro?" },
                                { title: "¿La estrategia se queda en la oficina del director y no baja a la planta?" },
                                { title: "¿Cumple con las normas por evitar multas y no para generar valor?" },
                                { title: "¿Tiene un equipo con potencial, pero que no logra dar el salto al alto desempeño?" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 mb-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ background: "#00b4d8" }} />
                                    <p className="text-sm font-light leading-relaxed">
                                        <span className="font-medium" style={{ color: "#475569" }}>{item.title}</span>
                                    </p>
                                </div>
                            ))}

                            <div className="flex items-center justify-between mt-7">
                                <Link
                                    to="/contacto"
                                    className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-colors duration-300"
                                    style={{ color: "#0a1b5c" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#00b4d8"}
                                    onMouseLeave={e => e.currentTarget.style.color = "#0a1b5c"}
                                >
                                    Saber más
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div style={{ height: "5rem" }} />
            </div>
        </div>
    )
}