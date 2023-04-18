import { AppError } from '../../../../shared/errors/AppErrors'
import { MoviesRepositoryInMemory } from '../../repositories/in-memory/MoviesRepositoryInMemory'
import { CreateMovieUseCase } from './CreateMovieUseCase'

let moviesRepositoryInMemory: MoviesRepositoryInMemory
let createMovieUseCase: CreateMovieUseCase

describe('Create Movie', () => {
  beforeEach(() => {
    moviesRepositoryInMemory = new MoviesRepositoryInMemory()
    createMovieUseCase = new CreateMovieUseCase(moviesRepositoryInMemory)
  })

  it('should be able to create a new movie', async () => {
    const movie = await createMovieUseCase.execute({
      name: 'Sorria',
      description: 'Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma.',
      urlImage: '',
      gere: 'Terror',
      year: 2022
    })

    expect(movie).toHaveProperty('id')
  })

  it('should not be able to create a movie with exists name', async () => {
    await createMovieUseCase.execute({
      name: 'Eternos',
      description: 'descrição.',
      urlImage: '',
      gere: 'Ação',
      year: 2021
    })

    await expect(createMovieUseCase.execute({
      name: 'Eternos',
      description: 'descrição.',
      urlImage: '',
      gere: 'Ação',
      year: 2021
    })
    ).rejects.toEqual(new AppError('Movie already exists!'))
  })
})
