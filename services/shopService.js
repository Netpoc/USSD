const express = require ('express');
const router = express.Router();

const productController = require('../controller/productController');

router.post('/additem', productController.addItem);
router.get('/getall', productController.getAll);

module.exports = router;