import Header from "components/Header"
import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import Footer from 'components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "components/Container"
import FavoritosProvider from "contextos/Favoritos"
import Player from "pages/Player"
import NotFound from "pages/NotFound"

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}/>
                        <Route path="/favoritos" element={<Favoritos />}/>
                        <Route path="/:id" element={<Player />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes 
