import { NotFoundException } from '../../../../shared/errors/AppErrors'
import { MoviesRepositoryInMemory } from '../../repositories/in-memory/MoviesRepositoryInMemory'
import { GetMovieByIdUseCase } from './GetMovieByIdUseCase'

let moviesRepositoryInMemory: MoviesRepositoryInMemory
let getMovieByIdUseCase: GetMovieByIdUseCase

describe('Get Movie By Id', () => {
  beforeEach(() => {
    moviesRepositoryInMemory = new MoviesRepositoryInMemory()
    getMovieByIdUseCase = new GetMovieByIdUseCase(moviesRepositoryInMemory)
  })

  it('should be able to get a movie by id', async () => {
    const newMovie = await moviesRepositoryInMemory.create({
      name: 'Sorria',
      description: 'Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma.',
      movieCoverImage: '',
      gere: 'Terror',
      year: 2022
    })

    const movie = await getMovieByIdUseCase.execute(newMovie.id)

    expect(movie).toHaveProperty('id')
  })

  it('should not be able to get a movie that does not exist', async () => {
    await expect(getMovieByIdUseCase.execute('000d')).rejects
      .toEqual(new NotFoundException('Movie not found!'))
  })
})
