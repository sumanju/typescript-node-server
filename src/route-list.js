  const express = require('express')
  const app     = express()

//       ROUTES LIST
const logIn = require('./routes/login')

//       MIDDLE WARE
  app.use('/',  logIn)

module.exports = app