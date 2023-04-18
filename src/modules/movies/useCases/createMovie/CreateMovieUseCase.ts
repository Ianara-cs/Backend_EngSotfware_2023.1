import { inject, injectable } from 'tsyringe'
import { INJECT } from '../../../../shared/container'
import { AppError } from '../../../../shared/errors/AppErrors'
import { type ICreateMovie } from '../../dtos/ICreateMovie'
import { type Movie } from '../../entities/Movie'
import { IMoviesRepository } from '../../repositories/IMoviesRepository'

@injectable()
export class CreateMovieUseCase {
  constructor (
    @inject(INJECT.MOVIES_REPOSITORY)
    private readonly moviesRepository: IMoviesRepository
  ) {}

  async execute ({ description, gere, name, urlImage, year }: ICreateMovie): Promise<Movie> {
    const movie = await this.moviesRepository.findMovieByName(name)

    if (movie) {
      throw new AppError('Movie already exists!')
    }

    const newMovie = this.moviesRepository.create({
      description, gere, name, urlImage, year
    })

    return await newMovie
  }
}
