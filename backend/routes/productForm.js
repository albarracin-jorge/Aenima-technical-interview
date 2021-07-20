const express = require('express');
const router = express.Router();

const mongoose = require('../config/connection')
let Product = require('../models/product');


//Este módulo recibe los valores del metodo post provenientes de productForm.hbs -- This module captures values from productForm.hbs
//Si id que envia el formulario es null se crea un nuevo producto, caso contrario se hace un update a la id correspondiente
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
    Product.findByIdAndUpdate(req.body._id, { $set: req.body}, { new: true }, (err, model) => {
      if (err) throw err;
    });  
  }
  res.redirect('/');
});

module.exports = router;