import Header from 'components/Header'
import styles from './Inicio.module.css'
import Footer from 'components/Footer'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import videos from 'json/db.json'
import Card from 'components/Card'

const Inicio = () =>{
    return(
        <>
            <Header />
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>

            <section className={styles.container}>
                {
                    videos.map(video => <Card key={video.id} {...video}/>)
                }
            </section>

            <Footer />
        </>
    )
}

export default Inicio