import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import AnimatedCounter from "../components/AnimatedCounter"
import Clients from "../components/Clients"
import { Link } from "react-router-dom"

/*fondo estrellado animado*/
function ParticleCanvas() {
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        let animId
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener("resize", resize)

        const particles = Array.from({ length: 90 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.4 + 0.3,
            dx: (Math.random() - 0.5) * 0.35,
            dy: (Math.random() - 0.5) * 0.35,
            alpha: Math.random() * 0.6 + 0.2,
        }))

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((p) => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(148,180,255,${p.alpha})`
                ctx.fill()
                p.x += p.dx
                p.y += p.dy
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1
            })
            animId = requestAnimationFrame(draw)
        }
        draw()
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener("resize", resize)
        }
    }, [])
    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    )
}

/*anima cada letra en hero*/
function SplitReveal({ text, className, delay = 0 }) {
    return (
        <span className={className} style={{ display: "inline-block" }}>
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

/*STAT CARD*/
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
            {/* Glow border */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-400/40 via-transparent to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl p-8 text-center overflow-hidden">
                {/* Inner shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all duration-700" />
                <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-300">
                    <AnimatedCounter end={num} />+
                </h2>
                <p className="mt-3 text-sm uppercase tracking-widest text-blue-300/70 font-medium">{label}</p>
            </div>
        </motion.div>
    )
}

/*SERVICE CARD */
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
            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-transparent blur-sm" />
            <div className="relative h-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/8 hover:border-blue-400/30 rounded-3xl p-8 transition-all duration-500 cursor-default">
                <span className="text-4xl text-blue-400 block mb-5">{s.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-blue-400 text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explorar</span>
                    <span>→</span>
                </div>
            </div>
        </motion.div>
    )
}

/*MAIN COMPONENT*/
export default function Home() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

    return (
        <div
            className="relative min-h-screen text-white overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #020818 0%, #040f2a 40%, #030b1f 70%, #050a18 100%)",
                fontFamily: "'Sora', 'DM Sans', sans-serif",
            }}
        >
            {/* Google Fonts */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;1,300&display=swap');
        body { background: #020818; }
        .text-gradient-blue {
          background: linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .noise::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
          border-radius: inherit;
        }
        .line-clamp { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; }
      `}</style>

            <ParticleCanvas />

            <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
                <div style={{
                    position: "absolute", top: "-20%", left: "-10%",
                    width: 700, height: 700,
                    background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
                    borderRadius: "50%", filter: "blur(40px)",
                }} />
                <div style={{
                    position: "absolute", top: "30%", right: "-15%",
                    width: 600, height: 600,
                    background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
                    borderRadius: "50%", filter: "blur(60px)",
                }} />
                <div style={{
                    position: "absolute", bottom: "-10%", left: "20%",
                    width: 500, height: 500,
                    background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
                    borderRadius: "50%", filter: "blur(50px)",
                }} />
            </div>

            <div className="relative" style={{ zIndex: 2 }}>

                {/*HERO*/}
                <section
                    ref={heroRef}
                    className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20"
                >
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="mb-2 flex items-center gap-3"
                    >
                        <div className="h-px w-10 bg-blue-400/60" />
                        <span className="text-xs uppercase tracking-[0.3em] text-blue-400/80 font-medium">
                            Consultoría & Capacitación
                        </span>
                        <div className="h-px w-10 bg-blue-400/60" />
                    </motion.div>

                    {/* Main headline */}
                    <motion.div style={{ y: heroY, opacity: heroOpacity }} className="text-center">
                        <h1
                            className="font-black leading-none tracking-tighter select-none"
                            style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)", perspective: "600px" }}
                        >
                            <SplitReveal text="INTELECTO" className="block text-white" delay={0.3} />

                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="mt-8 text-white/40 text-lg max-w-lg mx-auto leading-relaxed font-light"
                        >
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
                                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide overflow-hidden"
                                style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                            >
                                <span className="relative z-10">Ver servicios</span>
                                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                            <Link
                                to="/contacto"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide border border-white/15 hover:border-blue-400/50 hover:bg-white/5 transition-all duration-300 text-white/70 hover:text-white"
                            >
                                Agendar consulta
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
                {/*CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-20 w-full max-w-md mx-auto"
                >
                    <div className="relative group">
                        {/* Glow hover */}
                        <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-indigo-500/25 via-blue-500/10 to-transparent blur-sm" />

                        <div className="relative bg-white/[0.05] hover:bg-white/[0.06] border border-white/10 hover:border-indigo-400/30 rounded-3xl p-9 transition-all duration-500">

                            {/* Eyebrow */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px w-7 bg-blue-400/50" />
                                <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400/70 font-medium">
                                    Consultoría
                                </span>
                                <div className="h-px w-7 bg-blue-400/50" />
                            </div>



                            <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-3">
                                Si se identifica con alguna de estas situaciones, su organización está
                                lista para una transformación:
                            </h3>

                            <div className="h-px bg-white/8 mb-5" />

                            {[
                                { title: "¿Sus líderes apagan incendios en lugar de construir el futuro?" },
                                { title: "¿La estrategia se queda en la oficina del director y no baja a la planta?" },
                                { title: "¿Cumple con las normas por evitar multas y no para generar valor?" },
                                { title: "¿Tiene un equipo con potencial, pero que no logra dar el salto al alto desempeño?" },
                            ].map((item, i) => (

                                <div key={i} className="flex items-start gap-3 mb-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400/70 flex-shrink-0" />
                                    <p className="text-sm text-white/45 font-light leading-relaxed">
                                        <span className="text-white/75 font-medium">{item.title}</span>{" "}
                                        {item.body}
                                    </p>
                                </div>
                            ))}

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-7">

                                <Link
                                    to="/contacto"
                                    className="group/btn flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300/80 hover:text-blue-200 font-semibold transition-colors duration-300"
                                >
                                    Saber más
                                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    )
}