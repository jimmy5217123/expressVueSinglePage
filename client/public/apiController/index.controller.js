require('dotenv').config()
const router = require('../apiRouter/index.routes')
const dbPool = require('../dbPool/dbPool.index')
const jwt = require('jsonwebtoken')

module.exports = {
  async getSetProduct (req, res) {
    const data = await dbPool.getSetProduct()
    res.json(data)
  },
  async upload (req, res) {
    const body = req.body
    const url = './images/bandon_include/'+ req.file.filename
    const uploadData = await dbPool.upload(body.bangTonName, url)
    res.json(uploadData)
  },
  async getShopCart (req, res) {
    const body = req.body
    const data = await dbPool.getShopCart(body.memId)
    res.json(data)
  },
  async getdetailShopChart (req, res) {
    const body = req.body
    const data = await dbPool.getdetailShopChart(body.memId)
    res.json(data)
  },
  async getHistoryOrder (req, res) {
    const body = req.body
    const data = await dbPool.getHistoryOrder(body.memId)
    res.json(data)
  },
  async insertCart (req, res) {
    const body = req.body
    const data = await dbPool.insertCart(body.setId, body.num, body.memId)
    res.json(data)
  },
  async updateCart (req, res) {
    const body = req.body
    const data = await dbPool.updateCart(body.num, body.memId, body.setId)
    res.json(data)
  },
  async login (req, res) {
    const body = req.body
    const data = await dbPool.login(body.account, body.password)
    if (data) {
      const user = {
        account: req.body.account
      }
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '8h' })
      res.cookie('testToken', accessToken)
      res.json(data)
    }
  }
}