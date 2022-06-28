import { ImdbService } from './../../services/imdb/index';
import { Movie } from '../../models/movie';

export interface IGetMovieById {
    execute(movieId: string): Promise<Movie>
}

export class GetMovieById implements IGetMovieById {
    imdbService: ImdbService;

    constructor() {
        this.imdbService = new ImdbService();
    }

    async execute(movieId: string): Promise<Movie> {
        const movie: Movie = await this.imdbService.getMovieById(movieId);
        return movie;
    }
}