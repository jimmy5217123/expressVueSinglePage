const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const port = process.env.PORT || 4000
const mysql = require('mysql')
app.use(express.json()) // Express v4.16.0 and higher No more body-parser use this
app.use(express.urlencoded({
  extended: true
}))

// const connection = mysql.createConnection({
//   host     : 'us-cdbr-east-04.cleardb.com',
//   user     : 'b7cc7e172f5d6d',
//   password : '70b0d6cd',
//   database: 'heroku_94648fbef613f3b'
// })
// connection.connect(function(err) {
//   if (err) {
//       console.log('connecting error')
//       return
//   }
//   console.log('db connecting success')
// })
const pool = mysql.createPool({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'b7cc7e172f5d6d',
  password : '70b0d6cd',
  database: 'heroku_94648fbef613f3b'
})

app.use(express.static('./dist'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './dist/images')
  },
  filename: function (req, file, cb){
    cb(null, file.originalname)
  }
});
const upload = multer({storage: storage});

app.post('/upload', upload.single('file'), function (req, res, next) {
  const url = '/images/'+ req.file.filename
    res.json({
      code : 200,
      data : url
    })
})

app.post('/getSetProduct', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query('SELECT * FROM set_product', (err, rows) => {
      connection.release() // return the connection to pool
      if(err) throw err
      res.json(rows)
    })
  })
})

app.post('/getSingleProduct', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(`SELECT * FROM single_product`, (err, rows) => {
        connection.release(); // return the connection to pool
        if(err) throw err;
        res.json(rows)
    })
  })
})

app.post('/getOtherProduct', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(`SELECT * FROM other_product`, (err, rows) => {
      connection.release(); // return the connection to pool
      if(err) throw err;
      res.json(rows)
    })
  })
})

app.post('/joinTest', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(`SELECT * FROM member INNER JOIN single_order ON single_order.soBelongOrder = member.memId WHERE memId = '1000';`, (err, rows) => {
      connection.release(); // return the connection to pool
      if(err) throw err;
      res.json(rows)
    })
  })
})

app.post('/login', (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(`SELECT * FROM member WHERE memEmail = '${req.body.account}' AND memPsw = '${req.body.password}';`, (err, rows) => {
      connection.release() // return the connection to pool
      if(err) throw err
      res.json(rows)
    })
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
