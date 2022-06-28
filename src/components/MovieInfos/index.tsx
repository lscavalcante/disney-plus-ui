import styles from './styles.module.scss';

import { Movie } from "../../models/movie"
import { Button } from '../../components/Button';

interface IMovieInfosProps {
    movie: Movie | null
}

export function MovieInfos(props: IMovieInfosProps) {
    return (
        <main className={styles.box}>
            <section>
                <article>
                    <div className={styles.rating}>
                        <img src="/src/assets/images/imdb_icon.png" alt="imdb movie" />
                        <strong>{props.movie?.popularity}</strong>
                    </div>
                    <div className={styles.infos}>
                        <span>{props.movie?.genres[0]?.name} - {props.movie?.release_date}</span>
                    </div>
                    <div className={styles.overview}>
                        <h1>{props.movie?.title}</h1>
                        <p>{props.movie?.overview}</p>
                    </div>
                    <Button />
                </article>
            </section>
        </main>
    )
}