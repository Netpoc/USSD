const express = require('express');
const router = express.Router();

const ussdController = require("../controller/ussdController");
//const shopController = require("../controller/shopController");

router.post('/ussd', ussdController.ussd);

//router.post('/shop', shopController.shop);


module.exports = router;