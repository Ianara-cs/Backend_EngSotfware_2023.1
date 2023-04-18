import { v4 as uuid } from 'uuid'
import { type ICreateMovie } from '../../dtos/ICreateMovie'
import { Movie } from '../../entities/Movie'
import { type IMoviesRepository } from './../IMoviesRepository'

export class MoviesRepositoryInMemory implements IMoviesRepository {
  private readonly movies: Movie[] = []

  async findAll (): Promise<Movie[]> {
    return this.movies
  }

  async create ({ name, description, gere, urlImage, year }: ICreateMovie): Promise<Movie> {
    const movie = new Movie()
    Object.assign(movie, {
      id: uuid(), name, description, gere, url_image: urlImage, year
    })

    this.movies.push(movie)
    return movie
  }

  async findById (id: string): Promise<Movie | undefined> {
    const movie = this.movies.find(movie => movie.id === id)

    return movie
  }

  async findMovieByName (name: string): Promise<Movie | undefined> {
    const movie = this.movies.find(movie => movie.name === name)

    return movie
  }

  async deleteMovie (id: string): Promise<Movie> {
    const movieId = this.movies.findIndex(movie => movie.id === id)

    const movie = this.movies.splice(movieId, 1)

    return movie[0]
  }
}
