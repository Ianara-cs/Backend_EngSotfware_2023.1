import { inject, injectable } from 'tsyringe'
import { INJECT } from '../../../../shared/container'
import { type Movie } from '../../entities/Movie'
import { IMoviesRepository } from '../../repositories/IMoviesRepository'

@injectable()
export class GetMovieByNameUseCase {
  constructor (
    @inject(INJECT.MOVIES_REPOSITORY)
    private readonly moviesRepository: IMoviesRepository
  ) {}

  async execute (name: string): Promise<Movie[]> {
    const movies = await this.moviesRepository.findMoviesByName(name)

    return movies
  }
}
