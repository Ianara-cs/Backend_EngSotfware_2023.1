import { Movies } from "../entities/Movies";

export interface IMoviesRepository {
    findMovies(): Promise<Movies[]>
}