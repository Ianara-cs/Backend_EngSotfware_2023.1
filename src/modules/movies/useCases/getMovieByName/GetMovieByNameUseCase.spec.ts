import { MoviesRepositoryInMemory } from '../../repositories/in-memory/MoviesRepositoryInMemory'
import { GetMovieByNameUseCase } from './GetMovieByNameUseCase'

let moviesRepositoryInMemory: MoviesRepositoryInMemory
let getMovieByNameUseCase: GetMovieByNameUseCase

describe('Get Movie By Name', () => {
  beforeEach(() => {
    moviesRepositoryInMemory = new MoviesRepositoryInMemory()
    getMovieByNameUseCase = new GetMovieByNameUseCase(moviesRepositoryInMemory)
  })

  it('should be able to get a movie by name', async () => {
    const newMovie = await moviesRepositoryInMemory.create({
      name: 'Sorria',
      description: 'Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma.',
      movieCoverImage: '',
      gere: 'Terror',
      year: 2022
    })

    const movies = await getMovieByNameUseCase.execute(newMovie.name)
    expect(movies.length).toEqual(1)
    expect(movies[0]).toHaveProperty('id')
  })
})
