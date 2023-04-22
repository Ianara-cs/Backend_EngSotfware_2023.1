import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { UploadMovieCoverImageUseCase } from './UploadMovieCoverImageUseCase'

export class UpdateMovieCoverController {
  async handle (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const movieCover = req.file?.filename

    const uploadMovieCoverImageUseCase = container.resolve(UploadMovieCoverImageUseCase)
    await uploadMovieCoverImageUseCase.execute(id, movieCover as string)

    return res.status(201).send()
  }
}
