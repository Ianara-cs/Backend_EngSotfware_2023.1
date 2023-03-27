import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

@injectable()
export class GetMovieByNameUseCase {
    constructor(
        @inject(INJECT.MOVIES_REPOSITORY)
        private moviesRepository: IMoviesRepository
    ) {}

    async execute(name: string) {
        const movie = await this.moviesRepository.findMovieByName(name)

        if(!movie) {
            throw new NotFoundException("Movie not found!")
        }

        return movie
    }
}