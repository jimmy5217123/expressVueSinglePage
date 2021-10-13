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
  async upload (bangTonName, bangTonPrice, bangTonInfo, url) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`INSERT INTO set_product VALUES (0,'${bangTonName}',${bangTonPrice},800,21,96,0,'${url}','${bangTonInfo}',1)`, (err, rows) => {
          connection.release()
          if(err) throw reject(err)
          resolve({
            code : 200
          })
        })
      })
    })
  },
  async getShopCart(memId) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`SELECT * FROM shopping_cart WHERE cartBelonger = '${memId}';`, (err, rows) => {
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
        connection.query(`SELECT * FROM (new_order INNER JOIN set_order ON  orderId = setoBelongOrder) INNER JOIN set_product ON setoName = setId WHERE orderer = '${memId}';`, (err, rows) => {
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
  async insertOrder (orderer, orderTotalPrice, orderTime, orderRemark) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`INSERT INTO new_order VALUES (0, ${orderer}, '${orderTotalPrice}', '${orderTime}', '${orderRemark}')`, (err, rows) => {
          connection.release() // return the connection to pool
          if (err) throw err
          if (rows.insertId) {
            const setArray = [{
              setoName: 1002,
              setdoPrice: 300,
              setoAmount: 3,
              setoBelongOrder: rows.insertId
            },
            {
              setoName: 1001,
              setdoPrice: 110,
              setoAmount: 1,
              setoBelongOrder: rows.insertId
            }]
            resolve(this.inserSetOrder(setArray))
          }
        })
      })
    })
  },
  async inserSetOrder(setArray, insertId) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) throw err
        for (let i = 0; i < setArray.length; i++) {
          connection.query(`INSERT INTO set_order VALUES (0, ${setArray[i].setoName}, '${setArray[i].setdoPrice}', '${setArray[i].setoAmount}', '${insertId}')`, (err, rows) => {
            // connection.release() // return the connection to pool
            if (err) throw err
          })
        }
        connection.release()
      })
      resolve({
        code : 200
      })
    })
  },
  async insertCart (setId, num, memId) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection((err, connection) => {
        if(err) throw err
        connection.query(`INSERT INTO shopping_cart VALUES (0, ${setId}, ${num}, ${memId})`, (err, rows) => {
          connection.release() // return the connection to pool
          if (err) throw err
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