import Banner from 'components/Banner';
import styles from './Player.module.css'
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useState } from 'react';
import { useEffect } from 'react';


const Player = ()=>{

    const [video, setVideo] = useState()

    const param = useParams();


    useEffect( () => {
        fetch(`https://my-json-server.typicode.com/gabrielpramalho/cinetag-api/videos?id=${param.id}`)
        .then(response => response.json())
        .then(data => {
            setVideo(...data)
        })
    }, [])

    if(!video){
        return <NotFound />
    }

    return(
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                >
                </iframe>
            </section>

        </>
    )
}

export default Player;