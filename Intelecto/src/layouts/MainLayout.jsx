import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

export default function MainLayout({ children }) {
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-1"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  )
}