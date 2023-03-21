"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRoutes = void 0;
const express_1 = require("express");
const GetMoviesController_1 = require("../modules/movies/useCases/GetMoviesController");
exports.moviesRoutes = (0, express_1.Router)();
const getMoviesController = new GetMoviesController_1.GetMoviesController();
exports.moviesRoutes.get("/", getMoviesController.handle);
