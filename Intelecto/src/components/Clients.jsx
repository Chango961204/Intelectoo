import { motion } from "framer-motion"

const logos = [
    "/logos/download.png",
    // agrega más logos aquí
]

export default function Clients() {
    const doubled = [...logos, ...logos]

    return (
        <div style={{ fontFamily: "'Sora', sans-serif" }}>

            {/* Label */}
            <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
                <span
                    className="text-xs uppercase tracking-widest font-medium"
                    style={{ color: "rgba(148,180,255,0.5)" }}
                >
                    Empresas que confían en nosotros
                </span>
                <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* Infinite scroll strip */}
            <div className="relative w-full overflow-hidden">

                {/* Fade edges */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(90deg, rgba(2,8,24,1) 0%, transparent 100%)" }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(270deg, rgba(2,8,24,1) 0%, transparent 100%)" }}
                />

                <motion.div
                    className="flex gap-16 w-max items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                >
                    {doubled.map((logo, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center"
                            style={{ minWidth: 120 }}
                        >
                            <img
                                src={logo}
                                alt={`cliente-${i}`}
                                className="h-10 w-auto object-contain transition-all duration-300"
                                style={{
                                    filter: "brightness(0) invert(1)",
                                    opacity: 0.25,
                                }}
                                onMouseEnter={e => { e.currentTarget.style.opacity = "0.7" }}
                                onMouseLeave={e => { e.currentTarget.style.opacity = "0.25" }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}