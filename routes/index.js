var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//MongoDB Code
var Schema = new mongoose.Schema({
    sku: String,
    fName: String,
    lName: String,
    product: String,
    phone: Number,
    email: String,
    postDate: Date,
    expirationDate: Date
})

var request = mongoose.model('products',Schema);


module.exports = router;
