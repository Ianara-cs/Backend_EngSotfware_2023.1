import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import { router } from './routes'
import { errorMiddleware } from './shared/errors/errorMiddleware'

const app = express()

app.use(express.json())

app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(errorMiddleware)

app.listen(4000, () => { console.log('Running server!') })
