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
app.use(express.static('./dist'))
app.use(express.static('./public'))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})

// const pool = mysql.createPool({
//   host     : '127.0.0.1',
//   user     : 'root',
//   password : 'may1234567',
//   database: 'product'
// })
const pool = mysql.createPool({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'b7cc7e172f5d6d',
  password : '70b0d6cd',
  database: 'heroku_94648fbef613f3b'
})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './dist/images/bandon_include')
    cb(null, './public/images/bandon_include')
  },
  filename: function (req, file, cb){
    cb(null, file.originalname)
  }
});
const upload = multer({storage: storage})

app.post('/upload', upload.single('imgFile'), function (req, res, next) {
  const body = req.body
  const url = './images/bandon_include/'+ req.file.filename
  pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(`INSERT INTO set_product VALUES (0,'${body.bangTonName}',130,800,21,96,0,'${url}','寶島食堂嚴選冰島鱈魚，無細刺，肉質滑嫩鮮甜，如雪花般入口即化的綿密感魚肉更富含OMEGA-3即DHA、EPA適合成長中的孩子食用。',1)`, (err, rows) => {
      connection.release() // return the connection to pool
      if(err) throw err
      // res.json(rows)
    })
  })
  res.json({
    code : 200
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
