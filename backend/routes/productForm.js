const express = require('express');
const router = express.Router();

const mongoose = require('../config/connection')
let Product = require('../models/product');

router.post('/operation', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let product = new Product({
      name: req.body.name,
      content: req.body.content,
      imgUrl: req.body.img
    });  
    product.save();
  } else {    
    Product.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;