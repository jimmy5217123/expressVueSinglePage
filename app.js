const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('front/dist'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'front/dist/index.html'))
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
