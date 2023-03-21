import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../shared/container";
import { Movies } from "../entities/Movies";
import { IMoviesRepository } from "./../repositories/IMoviesRepository";

@injectable()
export class GetMoviesUseCase {
    constructor(
        @inject(INJECT.MOVIES_REPOSITORY)
        private moviesRepository: IMoviesRepository
    ) {}

    async execute(): Promise<Movies[]> {
        return this.moviesRepository.findMovies()
    }
}