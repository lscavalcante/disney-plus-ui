import { useEffect, useState } from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MovieInfos } from '../../components/MovieInfos';
import { Movie } from '../../models/movie';
import { Pagination } from '../../models/pagination/pagination';
import { BASE_URL_IMAGE } from '../../services/imdb';
import { GetMovieById } from '../../useCases/imdb/getMovieById';
import { GetSimilarMovies } from '../../useCases/imdb/getSimilarMovies';

import styles from './styles.module.scss';

export function Home() {

    const [idMovie, setIdMovie] = useState<string>('62211')
    // 674

    const [movie, setMovie] = useState<Movie | null>(null)

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getMovie();
        getSimilarMovies()
    }, [idMovie]);


    async function getMovie() {
        const _movie: Movie = await new GetMovieById().execute(idMovie);

        setMovie(_movie);
    }

    async function getSimilarMovies() {
        const _result: Pagination<Movie> = await new GetSimilarMovies().execute(idMovie);
        const _movies = _result.results;

        setMovies(_movies);
    }

    function selectMovie(movie: Movie)  {
        setIdMovie(String(movie.id));
        console.log(String(movie.id))
        console.log("clique here")
    }

    return (
        <div className={styles.box} style={{backgroundImage: `url('${BASE_URL_IMAGE.original}${movie?.backdrop_path}')`}}>
            <Header movies={movies} selectMovie={(data) => {selectMovie(data)}}/>
            <MovieInfos movie={movie} />
            <Footer/>
        </div>
    );
}