const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 4000

const apiRouter = require('./apiRouter')
app.use('/api', apiRouter)

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static('./dist'))
app.use(express.static('./public'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
