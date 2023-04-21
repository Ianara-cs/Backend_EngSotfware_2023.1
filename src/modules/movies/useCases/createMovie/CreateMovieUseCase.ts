import { inject, injectable } from 'tsyringe'
import { INJECT } from '../../../../shared/container'
import { type ICreateMovie } from '../../dtos/ICreateMovie'
import { type Movie } from '../../entities/Movie'
import { IMoviesRepository } from '../../repositories/IMoviesRepository'

@injectable()
export class CreateMovieUseCase {
  constructor (
    @inject(INJECT.MOVIES_REPOSITORY)
    private readonly moviesRepository: IMoviesRepository
  ) {}

  async execute ({ description, gere, name, movieCoverImage, year }: ICreateMovie): Promise<Movie> {
    const newMovie = this.moviesRepository.create({
      description, gere, name, movieCoverImage, year
    })

    return await newMovie
  }
}
