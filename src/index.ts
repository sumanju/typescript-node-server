import express      from 'express'

const app = express()

app.get("/", (req, res) => {
  res.send("hell")
})

const port = process.env.PORT || 5500

const server = app.listen(port, () => {
  console.log('running ', port)
})
