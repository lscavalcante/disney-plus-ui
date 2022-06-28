import { ImdbService } from './../../services/imdb/index';
import { Movie } from '../../models/movie';
import { Pagination } from '../../models/pagination/pagination';

export interface IGetSimilarMovies {
    execute(movieId: string): Promise<Pagination<Movie>>
}

export class GetSimilarMovies implements IGetSimilarMovies {
    imdbService: ImdbService;

    constructor() {
        this.imdbService = new ImdbService();
    }

    async execute(movieId: string): Promise<Pagination<Movie>> {
        const pagination: Pagination<Movie> = await this.imdbService.getSimilarMovies(movieId);
        return pagination;
    }
}