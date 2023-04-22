import { inject, injectable } from 'tsyringe'
import { INJECT } from '../../../../shared/container'
import { NotFoundException } from '../../../../shared/errors/AppErrors'
import { INJECTS_PROVIDER } from '../../../../shared/providers'
import { IStorageProvider } from '../../../../shared/providers/StorageProvider/IStorageProvider'
import { type Movie } from '../../entities/Movie'
import { IMoviesRepository } from '../../repositories/IMoviesRepository'

@injectable()
export class UploadMovieCoverImageUseCase {
  constructor (
    @inject(INJECT.MOVIES_REPOSITORY)
    private readonly movieRepository: IMoviesRepository,
    @inject(INJECTS_PROVIDER.STORAGE)
    private readonly storageProvide: IStorageProvider
  ) {}

  async execute (movieId: string, file: string): Promise<Movie> {
    const movie = await this.movieRepository.findById(movieId)

    if (!movie) {
      throw new NotFoundException('Movie not found!')
    }

    if (movie.movieCoverImage) {
      await this.storageProvide.delete(movie.movieCoverImage, 'movieCover')
    }

    const fileUrl = await this.storageProvide.save(file, 'movieCover')

    const movieCover = await this.movieRepository.updateMovieCover(movieId, fileUrl, file)

    return movieCover
  }
}
