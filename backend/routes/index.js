//Este archivo se encarga de los endpoints que utilizan el metodo GET -- This file manage endpoints who use GET method

const express = require('express');
const router = express.Router();

const mongoose = require('../config/connection')
let Product = require('../models/product')

//Muestra todos los elementos de la base de datos -- Show all elements inside database
router.get('/', (req, res, next) => {
  Product.find((err, products) => {
    if (err) throw err;
    res.render('index', { title: 'Test FullStack Developer', product: products });
  });
});

//Crear un nuevo producto -- Create new product
//Redirecciona al formulario sin valores porque es una nueva inserción
router.get('/product/new', (req, res, next) => {
  res.render('productForm', {});
});


//Modificar un producto -- Update product elements
//A diferencia del anterior, lleva los valores del producto para mostrarlos
router.get('/product/update/:id', (req, res, next) => {
  let productId = req.params.id;  
  Product.findOne({_id: productId }, (err, products) => {
    //console.log(persona);
    if (err) throw err;
    res.render('productForm', { product: products });
  });
});

//Elimina el producto seleccionado -- Delete selected product
//Recibe el id por el metodo get, lo busca en la base de datos y lo elimina, luego redirecciona al index.js
router.get('/product/delete/:id', (req, res, next) => {
  let productId = req.params.id;

  Product.remove({_id: productId }, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
