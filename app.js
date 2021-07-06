const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const mysql = require('mysql')

app.use(express.static('client/dist'))

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'may1234567',
  database: 'world'
})
connection.connect(function(err) {
  if (err) {
      console.log('connecting error')
      return
  }
  console.log('connecting success')
})

// connection.query(`SELECT * FROM city where CountryCode = 'AFG'`, function(err, rows, fields) {
//   if (err) throw err
//   console.log(rows)
// })

// connection.end()

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/dist/index.html'))
})

app.post('/test', (req, res) => {
  connection.query(`SELECT * FROM city where CountryCode = 'AFG'`, function(err, rows, fields) {
    if (err) throw err
    res.json(rows)
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
