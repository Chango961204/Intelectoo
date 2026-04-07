import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function MainLayout({ children }) {
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