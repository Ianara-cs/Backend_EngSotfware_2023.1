import { Router } from "express";
import { GetMoviesController } from "../modules/movies/useCases/GetMoviesController";

export const moviesRoutes = Router()

const getMoviesController = new GetMoviesController()

moviesRoutes.get("/", getMoviesController.handle)