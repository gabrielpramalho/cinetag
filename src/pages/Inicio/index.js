import styles from './Inicio.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import videos from 'json/db.json'
import Card from 'components/Card'

const Inicio = () =>{
    return(
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>

            <section className={styles.container}>
                {
                    videos.map(video => <Card key={video.id} {...video}/>)
                }
            </section>

        </>
    )
}

export default Inicio