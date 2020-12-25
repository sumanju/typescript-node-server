import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// const routeList     = require('./route-list')
// import socket from 'socket.io'
// const conn          = require('./src/db-connection/mysql-db')

const app = express()
      app.use(bodyParser.json())
      app.use(cors())
      // app.use(routeList)
      app.use(cookieParser())

      app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
      })

const port = process.env.PORT || 5000

const server = app.listen(port, () => {
  console.log('running ', port)
})

// const io   = socket(server)

// io.sockets.on('connection', (socket) => {
//   socket.on('mesg', (data) => {
//     socket.emit('event', {})
//   })
// })