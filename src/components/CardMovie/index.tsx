import { BASE_URL_IMAGE } from '../../services/imdb';
import styles from './styles.module.scss';

type CardMovieParams = {
    title: string;
    category: string;
    backdrop_path: string;
    onClick: () => void
}

export function CardMovie(params: CardMovieParams) {
    return (
        <div onClick={params.onClick} className={styles.container} style={{ backgroundImage: `url('${BASE_URL_IMAGE.small}${params.backdrop_path}')` }}>
            <span>{params.category}</span>
            <span>{params.title}</span>
            <button>
                <img src="/src/assets/images/play_circle.png" alt="player circle" />
            </button>
         </div>
    )
}