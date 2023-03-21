import { Router } from "express";
import { moviesRoutes } from "./movies.routes";

export const router = Router()

router.use("/movies", moviesRoutes)