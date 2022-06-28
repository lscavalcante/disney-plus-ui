import api from '../../infra/http';
import { Movie } from '../../models/movie';
import { Pagination } from '../../models/pagination/pagination';


const API_KEY = '03c4e3dc470296959d6bf68804146538'

const API_LANGUAGE = 'pt-br'

export const BASE_URL_IMAGE = {
    original: 'https://image.tmdb.org/t/p/original',
    small: 'https://image.tmdb.org/t/p/w500'
}

export interface IImdbService {
    getMovieById(movieId: string): Promise<Movie>
    getSimilarMovies(movieId: string): Promise<Pagination<Movie>>
}

export class ImdbService implements IImdbService {

    constructor() {
    }

    async getSimilarMovies(movieId: string): Promise<Pagination<Movie>> {


        try {
            const result = await api.get<Pagination<Movie>>(`3/movie/${movieId}/similar?api_key=${API_KEY}&language=${API_LANGUAGE}`);

            return result.data
        } catch (error) {
            throw new Error(String(error));
        }
    }

    async getMovieById(movieId: string): Promise<Movie> {
        try {
            const result = await api.get<Movie>(`3/movie/${movieId}?api_key=${API_KEY}&language=${API_LANGUAGE}`);
            console.log('result 2 here !!!');
            // console.log(result2);
            return result.data
        } catch (error) {
            throw new Error(String(error));
        }
    }
}