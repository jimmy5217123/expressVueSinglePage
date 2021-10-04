const router = require('../apiRouter/index.routes')
const dbPool = require('../dbPool/dbPool.index')
const jwt = require('jsonwebtoken')
const test = '401d23f45f3e485cf8f963b6fd921a66acfb58bcabd941c92e7272a14375e1c5ef701bdcea7692cce8ec752c71289c2311cb3b7d2752dbc57d90b550c925d1a3'

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
      const accessToken = jwt.sign(user, test, { expiresIn: '8h' })
      res.cookie('testToken', accessToken)
      res.json(data)
    }
  }
}