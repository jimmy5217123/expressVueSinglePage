const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const mysql = require('mysql')
// const bodyParser = require('body-parser')
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'may1234567',
  database: 'test'
})
connection.connect(function(err) {
  if (err) {
      console.log('connecting error')
      return
  }
  console.log('db connecting success')
})

app.use(express.static('client/dist'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/dist/index.html'))
})

app.post('/getInfo', (req, res) => {
  connection.query(`SELECT * FROM info Where ACME持有狀態 = 'asdasd'`, function(err, rows, fields) {
    if (err) throw err
    res.json(rows)
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
