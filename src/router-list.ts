import express from 'express'

import auth from './routes/auth'

const app     = express()

app.use('/', auth)

export  default app
