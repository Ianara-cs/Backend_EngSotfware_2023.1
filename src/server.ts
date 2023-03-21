import express from 'express'
import "reflect-metadata"
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(4000, () => console.log("Running server!"))