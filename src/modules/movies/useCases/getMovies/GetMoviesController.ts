import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { GetMoviesUseCase } from './GetMoviesUseCase'

export class GetMoviesController {
  async handle (req: Request, res: Response): Promise<Response> {
    const getMoviesUseCase = container.resolve(GetMoviesUseCase)

    const movies = await getMoviesUseCase.execute()

    return res.json(movies)
  }
}
