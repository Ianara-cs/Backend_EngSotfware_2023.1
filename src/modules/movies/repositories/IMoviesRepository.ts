import { type ICreateMovie } from '../dtos/ICreateMovie'
import { type Movie } from '../entities/Movie'

export interface IMoviesRepository {
  findAll: () => Promise<Movie[]>
  create: (data: ICreateMovie) => Promise<Movie>
  findById: (id: string) => Promise<Movie | null>
  findMoviesByName: (name: string) => Promise<Movie[]>
  deleteMovie: (id: string) => Promise<Movie>
  updateMovieCover: (id: string, fileUrl: string, fileName: string) => Promise<Movie>
}
