import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Perfil } from "../pages/Perfil"
import { MoviePreview } from "../pages/MoviePreview"


export function AppRoute() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/moviepreview/:id" element={<MoviePreview />} />
        </Routes>
    )
}