import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/CreateMovieController";
import { DeleteMovieController } from "../modules/movies/useCases/deleteMovie/DeleteMovieController";
import { GetMovieByIdController } from "../modules/movies/useCases/getMovieById/GetMovieByIdController";
import { GetMovieByNameController } from "../modules/movies/useCases/getMovieByName/GetMovieByNameController";
import { GetMoviesController } from "../modules/movies/useCases/getMovies/GetMoviesController";

export const moviesRoutes = Router()

const getMoviesController = new GetMoviesController()
const createMovieController = new CreateMovieController()
const getMovieByNameController = new GetMovieByNameController()
const getMovieByIdController = new GetMovieByIdController()
const deleteMovieController = new DeleteMovieController()

moviesRoutes.post("/", createMovieController.handle)
moviesRoutes.get("/", getMoviesController.handle)
moviesRoutes.get("/name", getMovieByNameController.handle)
moviesRoutes.get("/:id", getMovieByIdController.handle)
moviesRoutes.delete("/:id", deleteMovieController.handle)