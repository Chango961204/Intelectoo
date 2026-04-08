import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Target, Eye, Star, X } from "lucide-react";

const mvv = [
    {
        icon: <Target size={22} />,
        label: "Misión",
        title: "A través del modelo intelecto de transformación organizacional",
        accent: "#0077b6",
        modalContent: {
            intro: "Nuestra misión es el corazón de todo lo que hacemos.",
            points: [
                { title: "Desarrollamos organizaciones extraordinarias alineando estrategia, liderazgo y cultura, mediante soluciones de alto impacto e implementación real, integrando un enfoque de Compliance 360° que garantiza sostenibilidad, integridad y resultados." },
            ],
        },
    },
    {
        icon: <Eye size={22} />,
        label: "Visión",
        title: "Ser el referente en México en transformación organizacional",
        accent: "#00b4d8",
        modalContent: {
            intro: "Visualizamos un México empresarial más competitivo y humano.",
            points: [
                { title: "Sólidas, éticas y de alto desempeño mediante un modelo propio de intervención e impacto comprobable" },
            ],
        },
    },
    {
        icon: <Star size={22} />,
        label: "Valores",
        title: "Lo que nos define",
        accent: "#0096c7",
        modalContent: {
            intro: "Nuestros valores no son un cartel en la pared, son decisiones diarias.",
            points: [
                { title: "Excelencia profesional", desc: "Diseñamos e implementamos soluciones con alto nivel técnico y estratégico." },
                { title: "Integridad organizacional", desc: "Actuamos con ética, promoviendo culturas basadas en cumplimiento y responsabilidad." },
                { title: "Transformación consciente", desc: "Impulsamos cambios profundos en las personas y en la organización." },
                { title: "Enfoque en resultados", desc: "Trabajamos para generar impacto real y medible en las organizaciones." },
            ],
        },
    },
];

function MVVModal({ item, onClose }) {
    return (
        <AnimatePresence>
            {item && (
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

                    {/* Modal Content */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.92, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 20 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
                    >
                        <div
                            className="relative w-full max-w-lg rounded-3xl overflow-hidden pointer-events-auto bg-gradient-to-br from-white via-[#f8fbff] to-[#eef6fb]"
                            style={{
                                border: `1px solid ${item.accent}25`,
                                boxShadow: `0 0 80px ${item.accent}12, 0 30px 60px rgba(15, 23, 42, 0.16)`,
                            }}
                        >
                            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
                            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: `radial-gradient(circle, ${item.accent}14 0%, transparent 70%)` }} />

                            <div className="relative p-8 sm:p-10">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 bg-white border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                                >
                                    <X size={16} />
                                </button>

                                <div className="flex items-center gap-4 mb-7">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-2xl flex-shrink-0"
                                        style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}35`, color: item.accent  }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest font-semibold mb-0.5 opacity-75" style={{ color: item.accent }}>
                                            {item.label}
                                        </span>
                                        <h3 className="font-black text-xl tracking-tight text-slate-900">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed mb-8 pb-8 text-slate-600 border-b border-slate-200">
                                    {item.modalContent.intro}
                                </p>

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

                                <div className="mt-9 flex items-center justify-between">
                                    <span className="text-xs text-slate-400">INTELECTO</span>
                                    <button
                                        onClick={onClose}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 hover:brightness-125"
                                        style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30`, color: item.accent }}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>

                            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}40, transparent)` }} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default function Nosotros() {
    const [activeModal, setActiveModal] = useState(null);
    const mvvRef = useRef(null);
    const mvvInView = useInView(mvvRef, { once: true, margin: "-60px" });

    return (
        <div
            className="relative min-h-screen text-white"
            style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f4f7fb 50%, #ffffff 100%)",
                fontFamily: "'Sora', 'DM Sans', sans-serif",
            }}
        >
            <MVVModal item={activeModal} onClose={() => setActiveModal(null)} />

            {/* Ambient blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[5%] -left-[15%] w-[700px] h-[700px] rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(0,119,182,0.10) 0%, transparent 70%)" }} />
                <div className="absolute bottom-0 -right-[10%] w-[500px] h-[500px] rounded-full blur-[50px]" style={{ background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)" }} />
            </div>

            {/* Subtle grid */}
            <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.025] z-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="nos-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00b4d8" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#nos-grid)" />
            </svg>

            <div className="relative z-10">
                {/* HERO */}
                <section className="pt-40 pb-20 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 mb-8"
                    >
                        <div className="h-px w-10 bg-[#00b4d8]/50" />
                        <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "#00b4d8" }}>
                            Quiénes somos
                        </span>
                        <div className="h-px w-10 bg-[#00b4d8]/50" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-black tracking-tight leading-none text-[clamp(2.8rem,8vw,6rem)]"
                    >
                        <span className="text-blue-950" >
                        Sobre{" "}
                            </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-black via-[#00b4d8] to-[#0077b6]">
                            Nosotros
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="mt-6 text-lg max-w-lg mx-auto font-light text-sky-900"
                    >
                        Somos los Arquitectos de la Transformación Organizacional.
                    </motion.p>
                </section>

                {/* MISIÓN / VISIÓN / VALORES */}
                <section className="py-20 px-6" ref={mvvRef}>
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-4 mb-14">
                            <div className="h-px flex-1 bg-[#00b4d8]/10" />
                            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: "#00b4d8" }}>
                                Contigo Hacemos la Diferencia
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
                                    <div
                                        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"
                                        style={{ background: `linear-gradient(135deg, ${item.accent}30, transparent)` }}
                                    />

                                    <div className="relative h-full rounded-2xl p-8 overflow-hidden flex flex-col bg-white/80 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/70 via-white/30 to-transparent" />

                                        <div
                                            className="relative z-10 inline-flex items-center justify-center w-11 h-11 rounded-xl mb-5"
                                            style={{ background: `${item.accent}18`, border: `1px solid ${item.accent}30`, color: item.accent }}
                                        >
                                            {item.icon}
                                        </div>

                                        <div className="relative z-10 flex-1">
                                            <span className="text-xs uppercase tracking-widest font-semibold mb-2 block opacity-90" style={{ color: item.accent }}>
                                                {item.label}
                                            </span>
                                            <h3 className="font-bold text-lg mb-3 text-slate-900">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <button
                                            onClick={() => setActiveModal(item)}
                                            className="relative z-10 mt-7 self-start flex items-center gap-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 group/btn"
                                            style={{ color: item.accent }}
                                        >
                                            <span className="opacity-65 group-hover/btn:opacity-100 transition-opacity">Ver más</span>
                                            <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 opacity-65">→</span>
                                        </button>

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

                {/* CTA */}
                <section className="py-28 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="font-black tracking-tight leading-none mb-5 text-[clamp(1.8rem,5vw,3rem)]">
                                <span className="text-blue-950">
                                ¿Trabajamos{" "}
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-black via-[#00b4d8] to-[#0077b6]">
                                    juntos?
                                </span>
                            </h2>
                            <p className="mb-10 font-light text-white/35">
                                Conoce todo lo que podemos hacer por tu organización.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/servicios"
                                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white shadow-[0_0_24px_rgba(0,119,182,0.30)] bg-gradient-to-br from-[#023e8a] to-[#0077b6] hover:brightness-110 transition-all"
                                >
                                    Ver servicios <span className="group-hover:translate-x-1 transition-transform">→</span>
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
    );
}
