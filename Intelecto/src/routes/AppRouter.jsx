import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

import Home from "../pages/Home"
import Servicios from "../pages/Servicios"
import Nosotros from "../pages/Nosotros"
import Catalogo from "../pages/Catalogo"
import Contacto from "../pages/Contacto"
import MisionVision from "../pages/MisionVision"
import Trabajo from "../pages/Trabajo"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicios" element={<Servicios />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/mision-vision" element={<MisionVision />} />
                    <Route path="/trabajo" element={<Trabajo />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}