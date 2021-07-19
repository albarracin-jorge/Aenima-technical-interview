var express = require('express');
var router = express.Router();

let Product = require('../models/product')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Test FullStack Developer' }, {product: product});
// });

router.get('/', (req, res, next) => {
  Product.find((err, products) => {
    //console.log(personas);
    if (err) throw err;
    res.render('index', { title: 'Test FullStack Developer', product: products });
  });
});

module.exports = router;
