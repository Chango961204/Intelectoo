import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import PageLoader from "../components/PageLoader"
import ScrollToTop from "../components/ScrollToTop"

const Home = lazy(() => import("../pages/Home"))
const Servicios = lazy(() => import("../pages/Servicios"))
const Nosotros = lazy(() => import("../pages/Nosotros"))
const Catalogo = lazy(() => import("../pages/Catalogo"))
const Contacto = lazy(() => import("../pages/Contacto"))
const MisionVision = lazy(() => import("../pages/MisionVision"))
const Trabajo = lazy(() => import("../pages/Trabajo"))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <MainLayout>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/servicios" element={<Servicios />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/catalogo" element={<Catalogo />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/mision-vision" element={<MisionVision />} />
                        <Route path="/trabajo" element={<Trabajo />} />
                    </Routes>
                </Suspense>
            </MainLayout>
        </BrowserRouter>
    )
}