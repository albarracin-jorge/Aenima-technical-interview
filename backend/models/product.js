const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    content: String,
    imgUrl: String
}, {versionKey: false})

// const Product = mongoose.model('product', productSchema)
// module.exports = Product

module.exports = new mongoose.model('product', productSchema)