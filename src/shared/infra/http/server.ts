import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import { errorMiddleware } from '../../errors/errorMiddleware'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(errorMiddleware)

app.listen(4000, () => { console.log('Running server!') })
