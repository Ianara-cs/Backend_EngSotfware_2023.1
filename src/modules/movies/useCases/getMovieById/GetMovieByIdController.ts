import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetMovieByIdUseCase } from "./GetMovieByIdUseCase";

export class GetMovieByIdController {
    async handle(req:Request, res:Response) {
        const {id} = req.params
        const getMovieByIdUseCase = container.resolve(GetMovieByIdUseCase)

        const movie = await getMovieByIdUseCase.execute(id)

        return res.status(200).json(movie)
    }
}