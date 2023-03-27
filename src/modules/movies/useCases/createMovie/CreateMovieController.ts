import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
    async handle(req: Request, res: Response) {
        const {description, name, gere, year, ulr_image} = req.body

        const createMovieUseCase = container.resolve(CreateMovieUseCase)

        const movie =  await createMovieUseCase.execute({description, gere, name, ulr_image, year})

        return res.status(201).json(movie)
    }
}