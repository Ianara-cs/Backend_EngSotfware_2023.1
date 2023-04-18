import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { CreateMovieUseCase } from './CreateMovieUseCase'

export class CreateMovieController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { description, name, gere, year, urlImage } = req.body

    const createMovieUseCase = container.resolve(CreateMovieUseCase)

    const movie = await createMovieUseCase.execute({ description, gere, name, urlImage, year })

    return res.status(201).json(movie)
  }
}
