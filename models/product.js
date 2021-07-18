const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: Number,
    name: String,
    content: String,
    image: {
      data: Buffer,
      contentType: String
    }
})

const Product = mongoose.model('product', productSchema)
module.exports = Product