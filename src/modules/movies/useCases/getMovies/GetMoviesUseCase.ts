import { inject, injectable } from 'tsyringe'
import { INJECT } from '../../../../shared/container'
import { type Movie } from '../../entities/Movie'
import { IMoviesRepository } from '../../repositories/IMoviesRepository'

@injectable()
export class GetMoviesUseCase {
  constructor (
    @inject(INJECT.MOVIES_REPOSITORY)
    private readonly moviesRepository: IMoviesRepository
  ) {}

  async execute (): Promise<Movie[]> {
    return await this.moviesRepository.findAll()
  }
}
