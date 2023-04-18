import { inject, injectable } from 'tsyringe'
import { INJECT } from '../../../../shared/container'
import { NotFoundException } from '../../../../shared/errors/AppErrors'
import { type Movie } from '../../entities/Movie'
import { IMoviesRepository } from '../../repositories/IMoviesRepository'

@injectable()
export class GetMovieByNameUseCase {
  constructor (
    @inject(INJECT.MOVIES_REPOSITORY)
    private readonly moviesRepository: IMoviesRepository
  ) {}

  async execute (name: string): Promise<Movie> {
    const movie = await this.moviesRepository.findMovieByName(name)

    if (!movie) {
      throw new NotFoundException('Movie not found!')
    }

    return movie
  }
}
