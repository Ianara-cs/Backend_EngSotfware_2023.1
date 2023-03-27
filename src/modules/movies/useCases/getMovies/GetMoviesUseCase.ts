import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

@injectable()
export class GetMoviesUseCase {
    constructor(
        @inject(INJECT.MOVIES_REPOSITORY)
        private moviesRepository: IMoviesRepository
    ) {}

    async execute(): Promise<Movie[]> {
        return this.moviesRepository.findAll()
    }
}