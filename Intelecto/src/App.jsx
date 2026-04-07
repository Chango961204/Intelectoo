import { useEffect, useState } from "react"
import AppRouter from "./routes/AppRouter"
import Loader from "./components/Loader"
import logo from "./assets/circle.png"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="relative min-h-screen">

      {/* FONDO */}
      <div
        className="fixed inset-0 z-0 opacity-500"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "900px",
        }}
      />

      {/* OVERLAY SUAVE (NO LO TAPES) */}
      <div className="fixed inset-0 z-0 bg-white/35 backdrop-blur-[2px]"></div>

      {/* CONTENIDO */}
      <div className="relative z-10">
        <AppRouter />
      </div>

    </div>
  )
}

export default App