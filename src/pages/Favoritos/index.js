import Banner from 'components/Banner';
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo';

const Favoritos = () => {
    return(
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>

            </section>
        </>
    )
}

export default Favoritos;