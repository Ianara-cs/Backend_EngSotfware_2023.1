import { v4 as uuid } from 'uuid'
import { type ICreateMovie } from '../../dtos/ICreateMovie'
import { Movie } from '../../entities/Movie'
import { type IMoviesRepository } from './../IMoviesRepository'

export class MoviesRepositoryInMemory implements IMoviesRepository {
  private readonly movies: Movie[] = []

  async findAll (): Promise<Movie[]> {
    return this.movies
  }

  async create ({ name, description, gere, year }: ICreateMovie): Promise<Movie> {
    const movie = new Movie()
    Object.assign(movie, {
      id: uuid(), name, description, gere, year
    })

    this.movies.push(movie)
    return movie
  }

  async findById (id: string): Promise<Movie | null> {
    const movie = this.movies.find(movie => movie.id === id)

    if (movie === undefined) {
      return null
    }

    return movie
  }

  async findMoviesByName (name: string): Promise<Movie[]> {
    const movie = this.movies.filter(movie => movie.name === name)

    return movie
  }

  async deleteMovie (id: string): Promise<Movie> {
    const movieId = this.movies.findIndex(movie => movie.id === id)

    const movie = this.movies.splice(movieId, 1)

    return movie[0]
  }

  async updateMovieCover (id: string, fileUrl: string, fileName: string): Promise<Movie> {
    const movieId = this.movies.findIndex(movie => movie.id === id)
    this.movies[movieId].movieCoverUrl = fileUrl
    this.movies[movieId].movieCoverImage = fileName

    return this.movies[movieId]
  }
}
