import { MoviesRepositoryInMemory } from '../../repositories/in-memory/MoviesRepositoryInMemory'
import { GetMoviesUseCase } from './GetMoviesUseCase'

let moviesRepositoryInMemory: MoviesRepositoryInMemory
let getMoviesUseCase: GetMoviesUseCase

describe('Get Movies', () => {
  beforeEach(() => {
    moviesRepositoryInMemory = new MoviesRepositoryInMemory()
    getMoviesUseCase = new GetMoviesUseCase(moviesRepositoryInMemory)
  })

  it('should be able to get a list of movies', async () => {
    await moviesRepositoryInMemory.create({
      name: 'Sorria',
      description: 'Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma.',
      urlImage: '',
      gere: 'Terror',
      year: 2022
    })

    await moviesRepositoryInMemory.create({
      name: 'Eternos',
      description: 'descrição.',
      urlImage: '',
      gere: 'Ação',
      year: 2021
    })

    const movies = await getMoviesUseCase.execute()
    expect(movies.length).toEqual(2)
    expect(movies[0]).toHaveProperty('id')
  })
})
