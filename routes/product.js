var express = require('express');
const router = require('express-promise-router')()//!!!!!!

const { validateParam } = require('../helpers/routehelper')
const ProductController = require('../controller/product')

router.route('/')
  .get(ProductController.index)
  .post(ProductController.newProduct)

router.route('/')
  .get(ProductController.getProduct)
  .put(ProductController.updateProduct)
  .patch(ProductController.updateProduct)

module.exports = router;
