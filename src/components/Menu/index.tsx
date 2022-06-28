import { CardMovie } from '../../components/CardMovie';
import { Movie } from '../../models/movie';
import { BASE_URL_IMAGE } from '../../services/imdb';
import styles from './styles.module.scss';

interface IMenuProps {
    isOpen: boolean;
    movies: Movie[]
    selectMovie: (movie: Movie) => void
}

export function Menu(props: IMenuProps) {
    return (
        <aside className={`${styles.box} ${props.isOpen ? styles.active : ''}`}>
            <nav>
                <h2>Movies</h2>
                <ul className={styles.movies}>
                    {props.movies.map((data) => {
                        return <li key={data.id}>
                            <CardMovie category={String(data?.id)} title={data.title} onClick={() => props.selectMovie(data)} backdrop_path={`${BASE_URL_IMAGE.small}${data?.backdrop_path}`} />
                        </li>
                    })}
                </ul>
            </nav>
        </aside>
    );
}