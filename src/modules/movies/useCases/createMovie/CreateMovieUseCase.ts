import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { AppError } from "../../../../shared/errors/AppErrors";
import { ICreateMovie } from "../../dtos/ICreateMovie";
import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";

@injectable()
export class CreateMovieUseCase {
    constructor(
        @inject(INJECT.MOVIES_REPOSITORY)
        private moviesRepository: IMoviesRepository
    ) {}

    async execute({description, gere, name, ulr_image, year}: ICreateMovie): Promise<Movie> {
        const movie = await this.moviesRepository.findMovieByName(name)

        if (movie) {
            throw new AppError("Movie already exists!")
        }
        
        const newMovie = this.moviesRepository.create({
            description, gere, name, ulr_image, year
        })

        return newMovie
    }
}