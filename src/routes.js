import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Player from "pages/Player"
import NotFound from "pages/NotFound"
import PageDefault from "pages/PageDefault"

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageDefault />}>
                    <Route index element={<Inicio />}/>
                    <Route path="favoritos" element={<Favoritos />}/>
                    <Route path=":id" element={<Player />}/>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes 
