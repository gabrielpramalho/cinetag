import Header from 'components/Header'
import styles from './Inicio.module.css'
import Footer from 'components/Footer'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'

const Inicio = () =>{
    return(
        <>
            <Header />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Footer />
        </>
    )
}

export default Inicio