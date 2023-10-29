import { useFavoritoContext } from 'contextos/Favoritos'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'

const Card = ({ id, titulo, capa }) => {

    const {favorito, adicionarFavorito} = useFavoritoContext();
    const isFavorito = favorito.some(fav => fav.id === id)


    const iconFavorite = isFavorito ? iconeDesfavoritar : iconeFavoritar

    return(
        <div className={styles.container}>
            <img 
                src={capa}
                alt={titulo}
                className={styles.capa}  
            />
            <h2>{titulo}</h2>
            <img 
                src={iconFavorite}
                alt='Favoritar Filme'
                className={styles.favoritar}
                onClick={ () => { adicionarFavorito({ id, titulo, capa }) }}
            />
        </div>
    )
}

export default Card;