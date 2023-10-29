import Header from 'components/Header'
import styles from './Inicio.module.css'
import Footer from 'components/Footer'
import Banner from 'components/Banner'

const Inicio = () =>{
    return(
        <>
            <Header />
            <Banner imagem="home" />
            <Footer />
        </>
    )
}

export default Inicio