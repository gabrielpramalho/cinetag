import styles from './Inicio.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'
import { useState } from 'react'
import { useEffect } from 'react'

const Inicio = () =>{

    const [videos, setVideos] = useState([])


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/gabrielpramalho/cinetag-api/videos')
            .then(response => response.json())
            .then(data =>{
                setVideos(data)
            })
    }, [])

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