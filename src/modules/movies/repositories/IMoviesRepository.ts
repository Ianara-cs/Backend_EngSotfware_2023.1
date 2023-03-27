import { ICreateMovie } from "../dtos/ICreateMovie";
import { Movie } from "../entities/Movie";

export interface IMoviesRepository {
    findAll(): Promise<Movie[]>
    create(data: ICreateMovie): Promise<Movie>
    findById(id: string): Promise<Movie | undefined>
    findMovieByName(name: string): Promise<Movie| undefined>
    deleteMovie(id: string): Promise<Movie>
}