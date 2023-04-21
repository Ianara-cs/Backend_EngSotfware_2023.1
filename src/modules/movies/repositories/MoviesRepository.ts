import { prisma } from '../../../shared/infra/prisma/prismaClient'
import { type ICreateMovie } from '../dtos/ICreateMovie'
import { type Movie } from '../entities/Movie'
import { type IMoviesRepository } from './IMoviesRepository'

export class MoviesRepository implements IMoviesRepository {
  async findAll (): Promise<Movie[]> {
    const movies = await prisma.movie.findMany()

    return movies
  }

  async create ({ name, description, gere, movieCoverImage, year }: ICreateMovie): Promise<Movie> {
    const movie = await prisma.movie.create({
      data: {
        name, description, gere, movieCoverImage, year
      }
    })

    return movie
  }

  async findById (id: string): Promise<Movie | null> {
    const movie = await prisma.movie.findUnique({
      where: { id }
    })

    return movie
  }

  async findMoviesByName (name: string): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      where: { name: { startsWith: name } }
    })

    return movies
  }

  async deleteMovie (id: string): Promise<Movie> {
    const movie = await prisma.movie.delete({
      where: { id }
    })

    return movie
  }
}
