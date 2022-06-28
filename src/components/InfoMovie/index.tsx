import styles from './styles.module.scss';

type InfoMovieParams = {
    category?: string;
    release_date?: string;
}

export function InfoMovie(params: InfoMovieParams) {
    return (
        <div className={styles.container}>
            <span>{params.release_date}</span>
            <span>{params.category}</span>
            <span>Movie</span>
        </div>
    );
}