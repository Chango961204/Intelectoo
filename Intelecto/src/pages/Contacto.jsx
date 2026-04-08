import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa"
import { MapPin, Phone, Send } from "lucide-react"

const socials = [
    {
        icon: <FaWhatsapp size={20} />,
        label: "WhatsApp",
        value: "+52 492 126 5536",
        href: "https://wa.me/+524921265536",
        accent: "#22c55e",
        desc: "Respuesta inmediata",
    },
    {
        icon: <FaFacebookF size={20} />,
        label: "Facebook",
        value: "Intelecto Zacatecas",
        href: "https://www.facebook.com/intelecto.zacatecas",
        accent: "#3b82f6",
        desc: "Contenido adicional y noticias",
    },
    {
        icon: <FaInstagram size={20} />,
        label: "Instagram",
        value: "@intelectoparati",
        href: "https://www.instagram.com/intelectoparati/",
        accent: "#ec4899",
        desc: "Siguenos",
    },
    {
        icon: <FaEnvelope size={20} />,
        label: "Correo",
        value: "contacto@intelecto.mx",
        href: "mailto:contacto@intelecto.mx",
        accent: "#f59e0b",
        desc: "Respuesta en 24h",
    },
]

const info = [
    { icon: <MapPin size={16} />, label: "Ubicación", value: "Zacatecas, México" },
    { icon: <Phone size={16} />, label: "Teléfono", value: "+52 492 126 5536" },
    { icon: <FaEnvelope size={14} />, label: "Email", value: "contacto@intelecto.mx" },
]

function SocialCard({ s, i, inView }) {
    const [hovered, setHovered] = useState(false)
    return (
        <motion.a
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group block"
        >
            <div
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${s.accent}30, transparent)`, filter: "blur(1px)" }}
            />
            <div
                className="relative rounded-2xl p-5 flex items-center gap-4 transition-all duration-300"
                style={{
                    background: hovered ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.8)",
                    border: hovered ? `1px solid ${s.accent}30` : "1px solid rgba(148,163,184,0.25)",
                    boxShadow: hovered ? "0 20px 45px rgba(15,23,42,0.12)" : "0 18px 40px rgba(15,23,42,0.08)",
                    backdropFilter: "blur(10px)",
                }}
            >
                {/* Icon bubble */}
                <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                        background: hovered ? `${s.accent}20` : `${s.accent}12`,
                        border: `1px solid ${hovered ? s.accent + "40" : s.accent + "20"}`,
                        color: hovered ? s.accent : "#334155",
                    }}
                >
                    {s.icon}
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-widest font-medium mb-0.5" style={{ color: s.accent }}>{s.label}</p>
                    <p className="text-sm font-semibold truncate" style={{ color: "#0f172a" }}>{s.value}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>{s.desc}</p>
                </div>
                {/* Arrow */}
                <span
                    className="flex-shrink-0 text-sm transition-all duration-300"
                    style={{ color: hovered ? s.accent : "#94a3b8", transform: hovered ? "translateX(3px)" : "translateX(0)" }}
                >→</span>
            </div>
        </motion.a>
    )
}

export default function Contacto() {
    const headerRef = useRef(null)
    const socialsRef = useRef(null)
    const formRef = useRef(null)
    const socialsInView = useInView(socialsRef, { once: true, margin: "-60px" })
    const formInView = useInView(formRef, { once: true, margin: "-60px" })

    const [form, setForm] = useState({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" })
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => { setLoading(false); setSent(true) }, 1500)
    }

    const inputBase = {
        background: "rgba(255,255,255,0.8)",
        border: "1px solid rgba(148,163,184,0.28)",
        borderRadius: 12,
        color: "#0f172a",
        padding: "12px 16px",
        fontSize: "0.875rem",
        outline: "none",
        width: "100%",
        fontFamily: "inherit",
        transition: "border-color 0.3s, background 0.3s, box-shadow 0.3s",
    }

    return (
        <div
            className="relative min-h-screen text-white"
            style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f4f7fb 50%, #ffffff 100%)",
                fontFamily: "'Sora', 'DM Sans', sans-serif",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&display=swap');
        .contact-input::placeholder { color: rgba(100,116,139,0.7); }
        .contact-input:focus {
          border-color: rgba(0,180,216,0.45) !important;
          background: rgba(255,255,255,0.95) !important;
          box-shadow: 0 0 0 3px rgba(0,180,216,0.10) !important;
        }
      `}</style>

            {/* Ambient */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
                <div style={{ position: "absolute", top: "5%", right: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(0,119,182,0.09) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(60px)" }} />
                <div style={{ position: "absolute", bottom: "10%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(50px)" }} />
            </div>
            <svg className="fixed inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025, zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="ct-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00b4d8" strokeWidth="0.5" /></pattern></defs>
                <rect width="100%" height="100%" fill="url(#ct-grid)" />
            </svg>

            <div className="relative" style={{ zIndex: 2 }}>

                {/* ── HERO ── */}
                <section className="pt-40 pb-20 px-6 text-center" ref={headerRef}>
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-8">
                        <div className="h-px w-10 bg-[#00b4d8]/50" />
                        <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "#00b4d8" }}>Estamos aquí</span>
                        <div className="h-px w-10 bg-[#00b4d8]/50" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="font-black tracking-tight leading-none"
                        style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
                    >
                        <span className="text-blue-950">Hablemos de tu{" "}</span>
                        <span style={{ background: "linear-gradient(135deg, #000000, #00b4d8, #0077b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            proyecto
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="mt-6 text-lg max-w-md mx-auto font-light text-sky-900"
                    >
                        Cuéntanos lo que necesitas y te acompañamos hacia el siguiente nivel.
                    </motion.p>
                </section>

                {/*MAIN CONTENT */}
                <section className="pb-32 px-6">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">

                        {/* LEFT: Socials + info */}
                        <div className="lg:col-span-2 flex flex-col gap-8" ref={socialsRef}>

                            {/* Social cards */}
                            <div>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={socialsInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.6 }}
                                    className="text-xs uppercase tracking-widest font-medium mb-5"
                                    style={{ color: "#00b4d8" }}
                                >
                                    Canales de contacto
                                </motion.p>
                                <div className="flex flex-col gap-3">
                                    {socials.map((s, i) => (
                                        <SocialCard key={i} s={s} i={i} inView={socialsInView} />
                                    ))}
                                </div>
                            </div>

                            {/* Info card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={socialsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4, duration: 0.7 }}
                                className="rounded-2xl p-6 bg-white/80 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                            >
                                <p className="text-xs uppercase tracking-widest font-medium mb-5" style={{ color: "#00b4d8" }}>
                                    Información
                                </p>
                                <div className="flex flex-col gap-4">
                                    {info.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,180,216,0.10)", border: "1px solid rgba(0,180,216,0.18)", color: "#0077b6" }}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs" style={{ color: "#64748b" }}>{item.label}</p>
                                                <p className="text-sm font-medium" style={{ color: "#0f172a" }}>{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Availability badge */}
                                <div className="mt-6 flex items-center gap-2.5 pt-5" style={{ borderTop: "1px solid rgba(148,163,184,0.18)" }}>
                                    <motion.span
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="w-2 h-2 rounded-full flex-shrink-0"
                                        style={{ background: "#22c55e" }}
                                    />
                                    <span className="text-xs" style={{ color: "#64748b" }}>
                                        Disponibles Lun–Vie · 9:00–18:00 hrs
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        
                    </div>
                </section>

            </div>
        </div>
    )
}
