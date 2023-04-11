import { NotFoundException } from "../../../../shared/errors/AppErrors"
import { MoviesRepositoryInMemory } from "../../repositories/in-memory/MoviesRepositoryInMemory"
import { GetMovieByNameUseCase } from "./GetMovieByNameUseCase"

let moviesRepositoryInMemory: MoviesRepositoryInMemory
let getMovieByNameUseCase: GetMovieByNameUseCase

describe("Get Movie By Name", () => {
    beforeEach(() => {
        moviesRepositoryInMemory = new MoviesRepositoryInMemory
        getMovieByNameUseCase = new GetMovieByNameUseCase(moviesRepositoryInMemory)
    })

    it("should be able to get a movie by name", async() => {
        const newMovie = await moviesRepositoryInMemory.create({
            name: "Sorria",
	        description: "Após um paciente cometer um suicídio brutal em sua frente, a psiquiatra Rose é perseguida por uma entidade maligna que muda de forma.",
	        url_image: "",
	        gere: "Terror",
	        year: 2022  
        })

        const movie = await getMovieByNameUseCase.execute(newMovie.name)
        expect(movie).toHaveProperty("id")
    })

    it("should not be able to get a movie if the name does not exist", async() => {
        await expect(getMovieByNameUseCase.execute("000")).rejects
        .toEqual(new NotFoundException("Movie not found!"))
    })
})