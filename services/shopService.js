const express = require ('express');
const router = express.Router();

const productController = require('../controller/productController');

router.post('/additem', productController.addItem);

module.exports = router;