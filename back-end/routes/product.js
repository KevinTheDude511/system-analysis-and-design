const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.route('/products')
    .get(productController.getAllProducts)
    .post(productController.generateProducts)

module.exports = router