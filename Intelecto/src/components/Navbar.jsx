import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/lettering.png"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Cierra el menú al cambiar de ruta
    useEffect(() => setOpen(false), [location.pathname])

    const links = [
        { to: "/", label: "Inicio" },
        { to: "/nosotros", label: "Nosotros" },
        { to: "/servicios", label: "Servicios" },
        { to: "/trabajo", label: "Trabajo" },
        { to: "/catalogo", label: "Catálogo" },
        { to: "/contacto", label: "Contacto" },
    ]

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
        .nav-font { font-family: 'Sora', sans-serif; }
      `}</style>

            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="nav-font fixed w-full z-50"
                style={{
                    top: 0,
                    transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
            >
                {/* Barra principal */}
                <div
                    style={{
                        margin: scrolled ? "0" : "16px 24px",
                        borderRadius: scrolled ? "0" : "20px",
                        background: scrolled
                            ? "rgba(2,8,24,0.92)"
                            : "rgba(4,15,42,0.55)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: scrolled
                            ? "none"
                            : "1px solid rgba(148,180,255,0.12)",
                        borderBottom: "1px solid rgba(148,180,255,0.08)",
                        boxShadow: scrolled
                            ? "0 1px 0 rgba(148,180,255,0.07), 0 8px 32px rgba(0,0,0,0.4)"
                            : "0 4px 24px rgba(0,0,0,0.3)",
                        transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
                    }}
                >
                    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3.5">

                        {/* LOGO */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <img
                                src={logo}
                                alt="Intelecto"
                                className="h-9 w-auto object-contain"
                                style={{ filter: "brightness(0) invert(1)", opacity: 0.92 }}
                            />
                        </Link>

                        {/* DESKTOP LINKS */}
                        <div className="hidden md:flex items-center gap-1">
                            {links.map((link, i) => {
                                const isActive = location.pathname === link.to
                                return (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        className="relative px-4 py-2 text-sm font-medium rounded-lg group transition-colors duration-300"
                                        style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.5)" }}
                                    >
                                        {/* Hover/active bg */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 rounded-lg"
                                                style={{
                                                    background: "rgba(255,255,255,0.06)",
                                                    border: "1px solid rgba(255,255,255,0.08)",
                                                }}
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                            {link.label}
                                        </span>
                                        {/* Dot indicator activo */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-dot"
                                                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400"
                                            />
                                        )}
                                    </Link>
                                )
                            })}
                        </div>

                        {/* CTA DESKTOP */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                to="/contacto"
                                className="relative overflow-hidden px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105 duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                                    boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                                }}
                            >
                                <span className="relative z-10">Agendar consulta</span>
                                {/* Shimmer */}
                                <div
                                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                                    }}
                                />
                            </Link>
                        </div>

                        {/* MOBILE BTN */}
                        <button
                            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200"
                            style={{ color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)" }}
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={open ? "x" : "menu"}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {open ? <X size={18} /> : <Menu size={18} />}
                                </motion.div>
                            </AnimatePresence>
                        </button>

                    </div>
                </div>

                {/* MOBILE MENU */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                margin: "4px 24px 0",
                                borderRadius: "16px",
                                background: "rgba(4,15,42,0.96)",
                                backdropFilter: "blur(24px)",
                                WebkitBackdropFilter: "blur(24px)",
                                border: "1px solid rgba(148,180,255,0.1)",
                                overflow: "hidden",
                            }}
                        >
                            <div className="p-4 flex flex-col gap-1">
                                {links.map((link, i) => {
                                    const isActive = location.pathname === link.to
                                    return (
                                        <motion.div
                                            key={link.to}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06, duration: 0.35 }}
                                        >
                                            <Link
                                                to={link.to}
                                                onClick={() => setOpen(false)}
                                                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                                                style={{
                                                    color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                                                    background: isActive ? "rgba(255,255,255,0.07)" : "transparent",
                                                }}
                                            >
                                                <span>{link.label}</span>
                                                {isActive && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                )}
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                                <div className="mt-2 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                    <Link
                                        to="/contacto"
                                        onClick={() => setOpen(false)}
                                        className="block text-center py-3 rounded-xl text-sm font-semibold text-white"
                                        style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                                    >
                                        Agendar consulta
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    )
}