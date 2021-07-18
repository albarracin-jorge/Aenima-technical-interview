const Product = require('../models/product.js')
const Joi = require('joi')

const idSchema = Joi.object().keys({
  productId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
})

module.exports = {

  index: async (req, res, next)=>{
    const product = await Product.find({})
    res.status(200).json(product)
  },

  newProduct: async (req, res, next)=>{
    const newProduct = new Product(req.body)
    const product = await newProduct.save()
    res.status(201).json(product)
  },

  getProduct: async (req, res, next)=>{
    const {productId} = req.params
    const product = await newProduct.findById(productId)
    res.status(200).json(product)
  },
  
  updateProduct: async (req, res, next)=>{
    const {productId} = req.params
    const newProduct = req.body
    const oldProduct = await newProduct.findByIdAndUpdate(productId, newProduct)
    res.status(201).json({success: true})
  },

  // deleteProduct: async (req, res, next)=>{
  //   const newProduct = new Product(req.body)
  //   const product = await newProduct.save()
  //   res.status(201).json(product)
  // }

}