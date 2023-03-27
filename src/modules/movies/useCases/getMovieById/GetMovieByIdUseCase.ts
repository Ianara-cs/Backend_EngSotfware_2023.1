import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

@injectable()
export class GetMovieByIdUseCase {
    constructor(
        @inject(INJECT.MOVIES_REPOSITORY)
        private moviesRepository: IMoviesRepository
    ) {}

    async execute(id: string): Promise<Movie> {
        const movie = await this.moviesRepository.findById(id)

        if(!movie) {
            throw new NotFoundException("Movie not found!")
        }

        return movie
    }
}