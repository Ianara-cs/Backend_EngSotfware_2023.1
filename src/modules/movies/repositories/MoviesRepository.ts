import { dataMovies } from "../../../shared/database/data";
import { Movies } from "../entities/Movies";
import { IMoviesRepository } from "./IMoviesRepository";

export class MoviesRepository implements IMoviesRepository {
    private movies: Movies[] = dataMovies

    async findMovies(): Promise<Movies[]> {
        return this.movies
    }
}