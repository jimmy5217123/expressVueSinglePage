const express = require('express')
const router = express.Router()
const { getSetProduct, upload, getdetailShopChart, insertOrder, getHistoryOrder, getShopCart, insertCart, updateCart, login } = require('../apiController/index.controller')
router.use(express.json())
const multer = require('multer')
const authenticateToken = require('../middlewares/authenticateToken')

const storage = multer.diskStorage ({
  destination: function (req, file, cb) {
    cb(null, './dist/images/bandon_include')
    cb(null, './public/images/bandon_include')
  },
    filename: function (req, file, cb){
    cb(null, file.originalname)
  }
})
const uploadData = multer({ storage: storage })
// authenticateToken

router.get('/getSetProduct', authenticateToken, getSetProduct)
router.post('/upload', authenticateToken, uploadData.single('imgFile'), upload)
router.post('/getShopCart', authenticateToken, getShopCart)
router.post('/getdetailShopChart', authenticateToken, getdetailShopChart)
router.post('/getHistoryOrder', authenticateToken, getHistoryOrder)
router.post('/insertCart', authenticateToken, insertCart)
router.post('/insertOrder', authenticateToken, insertOrder)
router.put('/updateCart', authenticateToken, updateCart)
router.post('/login', login)

module.exports = router