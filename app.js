const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('client/dist'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/dist/index.html'))
})

app.post('/test', (req, res) => {
  res.json({
    aaa: '3'
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
