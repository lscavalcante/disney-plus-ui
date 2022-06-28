import styles from  './styles.module.scss'

type RatingParams = {
    rating? : number;
}

export function Rating(params: RatingParams) {
    return <div className={styles.container}>
        <img src="/src/assets/images/imdb_icon.png" alt="imdb movie" />
        <span>{params.rating}</span>
    </div>
}