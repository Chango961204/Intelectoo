import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa"
import logo from "../assets/LogoFinal.png"

const links = [
  {
    title: "Empresa",
    items: [
      { label: "Inicio", to: "/" },
      { label: "Nosotros", to: "/nosotros" },
      { label: "Catálogo", to: "/catalogo" },
    ],
  },
  {
    title: "Servicios",
    items: [
      { label: "Consultoría", to: "/servicios" },
      { label: "Capacitación", to: "/servicios" },
      { label: "Gestión", to: "/servicios" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: "contacto@intelecto.mx", to: "/contacto", external: false },
      { label: "+52 492 126 5536", to: null },
      { label: "Zacatecas, México", to: null },
    ],
  },
]

const socials = [
  {
    icon: <FaWhatsapp size={16} />,
    href: "https://wa.me/+524921265536",
    label: "WhatsApp",
    hoverColor: "#22c55e",
  },
  {
    icon: <FaFacebookF size={16} />,
    href: "https://www.facebook.com/intelecto.zacatecas",
    label: "Facebook",
    hoverColor: "#3b82f6",
  },
  {
    icon: <FaInstagram size={16} />,
    href: "https://www.instagram.com/intelectoparati/",
    label: "Instagram",
    hoverColor: "#ec4899",
  },
  {
    icon: <FaEnvelope size={16} />,
    href: "mailto:contacto@intelecto.mx",
    label: "Email",
    hoverColor: "#f87171",
  },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <footer
      ref={ref}
      style={{
        fontFamily: "'Sora', 'DM Sans', sans-serif",
        background: "linear-gradient(180deg, #020818 0%, #030c20 100%)",
        borderTop: "1px solid rgba(148,180,255,0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient top glow */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 200,
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="footer-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(148,180,255,1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6">

        {/*Logo/tagline/socials*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="Intelecto"
                className="h-10 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
              />
              <span
                className="text-lg font-black tracking-tight"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                INTELECTO
              </span>
            </Link>
            <p
              className="mt-2 text-sm max-w-xs"
              style={{ color: "rgba(255,255,255,0.28)", lineHeight: 1.6 }}
            >
              Transformamos organizaciones e intelecto humano.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                  "--hover-color": s.hoverColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${s.hoverColor}22`
                  e.currentTarget.style.borderColor = `${s.hoverColor}44`
                  e.currentTarget.style.color = s.hoverColor
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                  e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── MIDDLE: Link columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          {links.map((col, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + ci * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "rgba(148,180,255,0.6)" }}
              >
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.items.map((item, ii) => (
                  <li key={ii}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className="text-sm"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM: Copyright + badge ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8"
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            © 2026 INTELECTO. Todos los derechos reservados.
          </p>

          {/* Decorative badge */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#3b82f6" }}
            />
            Zacatecas, México
          </div>
        </motion.div>

      </div>
    </footer>
  )
}