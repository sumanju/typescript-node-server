import express      from 'express'
import path         from 'path'
import bodyParser   from 'body-parser'
import cors         from 'cors'
import cookieParser from 'cookie-parser'
import routeList    from './router-list'


const app = express()
      app.use(bodyParser.json())
      app.use(cors())
      app.use(routeList)
      app.use(cookieParser())
       
      app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
      })

  app.get('/watch', function (req, res) {
    res.cookie('asqwed', 'asd')
    console.log(req.headers)
    res.send(req.cookies )
  })

const port = process.env.PORT || 4000

const server = app.listen(port, () => {
  console.log('running ', port)
})
