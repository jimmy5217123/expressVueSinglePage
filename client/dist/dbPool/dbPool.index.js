require('dotenv').config()
const mysql = require('mysql')

const pool = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'may1234567',
  database: 'product'
})

// const pool = mysql.createPool({
//   host     : process.env.herokuMySqlHost,
//   user     : process.env.herokuMySqlUser,
//   password : process.env.herokuMySqlPassword,
//   database: process.env.herokuMySqlDatabase
// })

module.exports = {
  async getSetProduct () {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM set_product`, (err, rows) => {
          connection.release()
          if(err) throw reject(err)
          resolve(rows)
        })
      })
    })
  },
  async upload (bangTonName, url) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`INSERT INTO set_product VALUES (0,'${bangTonName}',130,800,21,96,0,'${url}','寶島食堂嚴選冰島鱈魚，無細刺，肉質滑嫩鮮甜，如雪花般入口即化的綿密感魚肉更富含OMEGA-3即DHA、EPA適合成長中的孩子食用。',1)`, (err, rows) => {
          connection.release()
          if(err) throw reject(err)
          resolve({
            code : 200
          })
        })
      })
    })
  },
  async getdetailShopChart (memId) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM shopping_cart INNER JOIN set_product ON  setId = cartSetId WHERE cartBelonger = '${memId}';`, (err, rows) => {
          connection.release() // return the connection to pool
          if(err) throw err
          if (rows) {
            resolve(rows)
          } else {
            resolve([])
          }
        })
      })
    })
  },
  async getHistoryOrder (memId) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM (new_order INNER JOIN set_order ON  orderId = setoBelongOrder) INNER JOIN set_product ON setOId = setId WHERE orderer = '${memId}';`, (err, rows) => {
          connection.release() // return the connection to pool
          if(err) throw err
          if (rows) {
            resolve(rows)
          } else {
            resolve([])
          }
        })
      })
    })
  },
  async insertCart (setId, num, memId) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`INSERT INTO shopping_cart VALUES (0, ${setId}, ${num}, ${memId})`, (err) => {
          connection.release() // return the connection to pool
          if(err) throw err
          resolve({
            code : 200
          })
        })
      })
    })
  },
  async updateCart (num, memId, setId) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`UPDATE  shopping_cart SET carSetAmount = '${num}' WHERE cartBelonger = '${memId}' AND cartSetId = '${setId}'`, (err) => {
          connection.release() // return the connection to pool
          if(err) throw err
          resolve({
            code : 200
          })
        })
      })
    })
  },
  async login (account, password) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM member WHERE memEmail = '${account}' AND memPsw = '${password}';`, (err, rows) => {
          connection.release() // return the connection to pool
          if(err) throw err
          resolve(rows[0])
        })
      })
    })
  }
}