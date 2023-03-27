import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetMovieByNameUseCase } from "./GetMovieByNameUseCase";

export class GetMovieByNameController {
    async handle(req:Request, res:Response) {
        const {name} = req.body
        const getMovieByNameUseCase = container.resolve(GetMovieByNameUseCase)

        const movie = await getMovieByNameUseCase.execute(name)

        return res.status(200).json(movie)
    }
}