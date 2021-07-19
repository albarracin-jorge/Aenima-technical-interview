const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    content: String,
    imgUrl: String
}, {versionKey: false})

productSchema.methods.setImgUrl = function setImgUrl(filename){
    this.imgUrl = `${filename}`
}

module.exports = new mongoose.model('product', productSchema)