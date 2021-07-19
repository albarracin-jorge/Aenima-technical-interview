const Product = require('../models/product')

module.exports = {

  index: async (req, res, next)=>{
    const product = await Product.find({})
    res.status(200).json(product)
  },

  newProduct: async (req, res, next)=>{
    const newProduct = new Product(req.body)
    const product = await newProduct.save()
    res.status(201).json(product)
    console.log(req.body.name)
  },

  getProduct: async (req, res, next)=>{
    const {productId} = req.params
    const product = await Product.findById(productId)
    res.status(200).json(product)
    console.log(req.body.name)
  },
  
  updateProduct: async (req, res, next)=>{
    const {productId} = req.params
    const newProduct = req.body
    const oldProduct = await Product.findByIdAndUpdate(productId, newProduct)
    res.status(201).json({success: true})
  },

  deleteProduct: async (req, res, next)=>{
    const {productId} = req.params
    await Product.findByIdAndRemove(productId)
    res.status(200).json({success: true})
  }
  

}