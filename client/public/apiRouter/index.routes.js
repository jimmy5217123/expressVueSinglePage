const express = require('express')
const router = express.Router()
const { getSetProduct, upload, getShopCart, getdetailShopChart, insertCart, updateCart, login } = require('../apiController/index.controller')
router.use(express.json())
const multer = require('multer')

const storage = multer.diskStorage ({
  destination: function (req, file, cb) {
    cb(null, './dist/images/bandon_include')
    cb(null, './public/images/bandon_include')
  },
    filename: function (req, file, cb){
    cb(null, file.originalname)
  }
})
const uploadData = multer({storage: storage})

router.post('/getSetProduct', getSetProduct)
router.post('/upload', uploadData.single('imgFile'), upload)
router.post('/getShopCart', getShopCart)
router.post('/getdetailShopChart', getdetailShopChart)
router.post('/insertCart', insertCart)
router.post('/updateCart', updateCart)
router.post('/login', login)

module.exports = router