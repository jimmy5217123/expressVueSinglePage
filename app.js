const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4000
const mysql = require('mysql')
app.use(express.json()) // Express v4.16.0 and higher No more body-parser use this
app.use(express.urlencoded({
  extended: true
}))

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'may1234567',
  database: 'product'
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

app.post('/getSetProduct', (req, res) => {
  connection.query(`SELECT * FROM set_product`, function(err, rows, fields) {
    if (err) throw err
    res.json(rows)
  })
})

app.post('/getSingleProduct', (req, res) => {
  connection.query(`SELECT * FROM single_product`, function(err, rows, fields) {
    if (err) throw err
    res.json(rows)
  })
})

app.post('/getOtherProduct', (req, res) => {
  connection.query(`SELECT * FROM other_product`, function(err, rows, fields) {
    if (err) throw err
    res.json(rows)
  })
})

app.post('/joinTest', (req, res) => {
  connection.query(`SELECT * FROM member INNER JOIN single_order ON single_order.soBelongOrder = member.memId WHERE memId = '1000';`, function(err, rows, fields) {
    if (err) throw err
    res.json(rows)
  })
})

app.post('/login', (req, res) => {
  connection.query(`SELECT * FROM product.member WHERE memEmail = '${req.body.account}' AND memPsw = '${req.body.password}';`, function(err, rows, fields) {
    if (err) throw err
    res.json(rows)
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
