import { container } from 'tsyringe'
import { type IMoviesRepository } from '../../modules/movies/repositories/IMoviesRepository'
import { MoviesRepository } from '../../modules/movies/repositories/MoviesRepository'

export enum INJECT {
  MOVIES_REPOSITORY = 'MOVIES_REPOSITORY'
}

container.registerSingleton<IMoviesRepository>(
  INJECT.MOVIES_REPOSITORY,
  MoviesRepository
)
