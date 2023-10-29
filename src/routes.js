import Header from "components/Header"
import Favoritos from "pages/Favoritos"
import Inicio from "pages/Inicio"
import Footer from 'components/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "components/Container"

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Container>

                <Routes>
                    <Route path="/" element={<Inicio />}/>
                    <Route path="/favoritos" element={<Favoritos />}/>
                </Routes>
                
            </Container>
            <Footer />

        </BrowserRouter>
    )
}

export default AppRoutes 
