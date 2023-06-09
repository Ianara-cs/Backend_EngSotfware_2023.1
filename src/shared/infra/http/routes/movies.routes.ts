import { Router } from 'express'
import multer from 'multer'
import { CreateMovieController } from '../../../../modules/movies/useCases/createMovie/CreateMovieController'
import { GetMovieByIdController } from '../../../../modules/movies/useCases/getMovieById/GetMovieByIdController'
import { GetMovieByNameController } from '../../../../modules/movies/useCases/getMovieByName/GetMovieByNameController'
import { GetMoviesController } from '../../../../modules/movies/useCases/getMovies/GetMoviesController'
import { UpdateMovieCoverController } from '../../../../modules/movies/useCases/uploadMovieCoverImage/UploadMovieCoverImageController'
import uploadConfig from './../../../../config/upload'

export const moviesRoutes = Router()

const uploadImg = multer(uploadConfig)

const getMoviesController = new GetMoviesController()
const createMovieController = new CreateMovieController()
const getMovieByNameController = new GetMovieByNameController()
const getMovieByIdController = new GetMovieByIdController()
const updateMovieCoverController = new UpdateMovieCoverController()
// const deleteMovieController = new DeleteMovieController()

moviesRoutes.post('/', createMovieController.handle)
moviesRoutes.get('/', getMoviesController.handle)
moviesRoutes.get('/name', getMovieByNameController.handle)
moviesRoutes.get('/:id', getMovieByIdController.handle)
moviesRoutes.put('/:id', uploadImg.single('movieCoverImage'), updateMovieCoverController.handle)
// moviesRoutes.delete("/:id", deleteMovieController.handle)
