require('dotenv').config()
// const mysql = require('mysql')
const mysql = require('promise-mysql')


// const getDbConnection = async () => {
//   return await mysql.createConnection({
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : 'may1234567',
//     database: 'product'
//   })
// }
// const pool = mysql.createPool({
//   host     : '127.0.0.1',
//   user     : 'root',
//   password : 'may1234567',
//   database: 'product'
// })

const getDbConnection = async () => {
  return await mysql.createConnection({
    host     : process.env.herokuMySqlHost,
    user     : process.env.herokuMySqlUser,
    password : process.env.herokuMySqlPassword,
    database: process.env.herokuMySqlDatabase
  })
}
const pool = mysql.createPool({
  host     : process.env.herokuMySqlHost,
  user     : process.env.herokuMySqlUser,
  password : process.env.herokuMySqlPassword,
  database: process.env.herokuMySqlDatabase
})

module.exports = {
  async getSetProduct() {
    const db = await getDbConnection()
    const setProduct = await db.query(`SELECT * FROM set_product`)
    await db.end()
    return setProduct
  },
  async upload(bangTonName, bangTonPrice, bangTonInfo, url) {
    const db = await getDbConnection()
    const upload = await db.query(`INSERT INTO set_product VALUES (0,'${bangTonName}',${bangTonPrice},800,21,96,0,'${url}','${bangTonInfo}',1)`).catch(err => console.log(err))
    return {
      code: 200
    }
  },
  async getShopCart(memId) {
    const db = await getDbConnection()
    const shopCart = await db.query(`SELECT * FROM shopping_cart WHERE cartBelonger = '${memId}'`)

    let res = []
    if (shopCart.length) {
      res = shopCart
    }

    await db.end()
    return res
  },
  async getdetailShopChart(memId) {
    const db = await getDbConnection()
    const detailShopCart = await db.query(`SELECT * FROM shopping_cart INNER JOIN set_product ON  setId = cartSetId WHERE cartBelonger = '${memId}'`)

    let res = []
    if (detailShopCart.length) {
      res = detailShopCart
    }
    
    await db.end()
    return res
  },
  async getHistoryOrder(memId) {
    const db = await getDbConnection()
    const historyOrder = await db.query(`SELECT * FROM (new_order INNER JOIN set_order ON  orderId = setoBelongOrder) INNER JOIN set_product ON setoName = setId WHERE orderer = '${memId}'`)

    let res = []
    if (historyOrder.length) {
      res = historyOrder
    }
    
    await db.end()
    return res
  },
  async insertOrder(orderer, orderTotalPrice, orderTime, orderRemark, shopCartArray) {
    const db = await getDbConnection()
    const insertOrder = await db.query(`INSERT INTO new_order VALUES (0, ${orderer}, ${orderTotalPrice}, '${orderTime}', '${orderRemark}')`)

    if (insertOrder.insertId) {
      await db.end()
      this.inserSetOrder(shopCartArray, insertOrder.insertId)
    } else {
      await db.end()
      return {
        code: 500
      }
    }
  },
  async inserSetOrder(setArray, insertId) {
    const db = await getDbConnection()
    for (let i = 0; i < setArray.length; i++) {
      await db.query(`INSERT INTO set_order VALUES (0, ${setArray[i].setId}, '${setArray[i].setPrice}', '${setArray[i].carSetAmount}', '${insertId}')`)
    }
    await db.end()
    return {
      code: 200
    }
  },
  async insertCart(setId, num, memId) {
    const db = await getDbConnection()
    const insertCart = await db.query(`INSERT INTO shopping_cart VALUES (0, ${setId}, ${num}, ${memId})`).catch(err => console.log(err))
    if (insertCart.insertId) {
      return {
        code: 200
      }
    }
  },
  async updateCart(num, memId, setId) {
    const db = await getDbConnection()
    const updateCart = await db.query(`UPDATE  shopping_cart SET carSetAmount = '${num}' WHERE cartBelonger = '${memId}' AND cartSetId = '${setId}'`).catch(err => console.log(err))
    return {
      code: 200
    }
  },
  async login(account, password) {
    const db = await getDbConnection()
    const login = await db.query(`SELECT * FROM member WHERE memEmail = '${account}' AND memPsw = '${password}'`)
    if (login.length) {
      return login[0]
    } else {
      return {
        code: 500
      }
    }
  }
}