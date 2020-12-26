import express from 'express'

import auth from './routes/auth'
import book from './routes/book'

const app     = express()

app.use('/', auth)
app.use('/', book)

export  default app
