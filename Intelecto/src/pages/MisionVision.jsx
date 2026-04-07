import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Eye, Compass, Heart, Shield, Zap } from "lucide-react"

const valores = [
    { icon: <Heart size={18} />, title: "Compromiso", text: "Nos involucramos con la realidad de cada cliente, adaptando soluciones genuinas a sus necesidades." },
    { icon: <Shield size={18} />, title: "Integridad", text: "Actuamos con transparencia y honestidad en cada etapa del proceso, sin importar las circunstancias." },
    { icon: <Zap size={18} />, title: "Excelencia", text: "Buscamos superar expectativas en cada proyecto, entregando resultados que marcan diferencia." },
    { icon: <Compass size={18} />, title: "Innovación", text: "Adoptamos nuevas metodologías y herramientas para ofrecer soluciones a la vanguardia." },
]

export default function MisionVision() {
    const mvRef = useRef(null)
    const valRef = useRef(null)
    const mvInView = useInView(mvRef, { once: true, margin: "-60px" })
    const valInView = useInView(valRef, { once: true, margin: "-60px" })

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
                <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />
            </div>
            <svg className="fixed inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025, zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="mv-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(148,180,255,1)" strokeWidth="0.5" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#mv-grid)" />
            </svg>

            <div className="relative" style={{ zIndex: 2 }}>

                {/*HERO*/}
                <section className="pt-40 pb-20 px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-8">
                        <div className="h-px w-10" style={{ background: "rgba(148,180,255,0.5)" }} />
                        <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "rgba(148,180,255,0.7)" }}>Nuestra esencia</span>
                        <div className="h-px w-10" style={{ background: "rgba(148,180,255,0.5)" }} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-black tracking-tight leading-none"
                        style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
                    >
                        Misión &{" "}
                        <span style={{ background: "linear-gradient(135deg, #60a5fa, #818cf8, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Visión
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="mt-6 text-lg max-w-md mx-auto font-light"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                        El propósito que guía cada decisión y cada proyecto que emprendemos.
                    </motion.p>
                </section>

                {/*MISIÓN & VISIÓN*/}
                <section className="pb-20 px-6" ref={mvRef}>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

                        {/* MISIÓN */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={mvInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative"
                        >
                            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.35), transparent)", filter: "blur(2px)" }} />
                            <div className="relative rounded-3xl p-10 h-full overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <div className="absolute top-0 right-0 w-40 h-40" style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.08), transparent 70%)", pointerEvents: "none" }} />
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa" }}>
                                    <Target size={26} />
                                </div>
                                <span className="text-xs uppercase tracking-widest font-semibold block mb-3" style={{ color: "rgba(96,165,250,0.6)" }}>Misión</span>
                                <h2 className="font-black text-2xl mb-5 leading-tight" style={{ color: "rgba(255,255,255,0.92)" }}>
                                    Transformar organizaciones e intelecto humano
                                </h2>
                                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                                    Diseñamos, desarrollamos e implementamos sistemas de gestión y programas de capacitación que potencian el capital humano, mejoran la eficiencia operacional y generan resultados sostenibles en cada organización que acompaña nuestro equipo.
                                </p>
                                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: "linear-gradient(90deg, #3b82f6, transparent)" }} />
                            </div>
                        </motion.div>

                        {/* VISIÓN */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={mvInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="group relative"
                        >
                            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.3), transparent)", filter: "blur(2px)" }} />
                            <div className="relative rounded-3xl p-10 h-full overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <div className="absolute top-0 right-0 w-40 h-40" style={{ background: "radial-gradient(circle at top right, rgba(167,139,250,0.08), transparent 70%)", pointerEvents: "none" }} />
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8" style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", color: "#a78bfa" }}>
                                    <Eye size={26} />
                                </div>
                                <span className="text-xs uppercase tracking-widest font-semibold block mb-3" style={{ color: "rgba(167,139,250,0.6)" }}>Visión</span>
                                <h2 className="font-black text-2xl mb-5 leading-tight" style={{ color: "rgba(255,255,255,0.92)" }}>
                                    Ser el referente de consultoría en México
                                </h2>
                                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                                    Convertirnos en la firma de consultoría y capacitación empresarial más reconocida de México, impulsando el crecimiento sostenible de cientos de organizaciones y siendo el aliado estratégico número uno de los líderes empresariales del país.
                                </p>
                                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: "linear-gradient(90deg, #a78bfa, transparent)" }} />
                            </div>
                        </motion.div>

                    </div>
                </section>

                {/*VALORES*/}
                <section className="py-16 px-6" ref={valRef}>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-14">
                            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "rgba(255,255,255,0.2)" }}>Valores que nos guían</span>
                            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {valores.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={valInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className="group flex gap-5 p-6 rounded-2xl transition-all duration-300"
                                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.2)" }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)" }}
                                >
                                    <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", color: "#818cf8" }}>
                                        {v.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1.5" style={{ color: "rgba(255,255,255,0.85)" }}>{v.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{v.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/*BOTTOM SPACER*/}
                <div className="pb-20" />

            </div>
        </div>
    )
}