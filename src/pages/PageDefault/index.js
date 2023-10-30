import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

const PageDefault = () =>{
    return(
        <>
            <Header />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </>
    )
}   

export default PageDefault;