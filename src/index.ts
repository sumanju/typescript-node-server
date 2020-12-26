import express      from 'express'
import path         from 'path'
import bodyParser   from 'body-parser'
import cors         from 'cors'
import cookieParser from 'cookie-parser'
import routeList    from './router-list'


const app = express()
      app.use(bodyParser.json())
      app.use(cookieParser())
      app.use(cors())
      app.use(routeList)
       
      app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        )
        next()
      })

      app.use(express.static(path.join(__dirname, "./test-views")))

      app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname,'/test-views/index.html'))
      })

const port = process.env.PORT || 4000

const server = app.listen(port, () => {
  console.log('running ', port)
})
