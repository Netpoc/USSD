const express = require('express');
const router = express.Router();
const ussdController = require("../controller/ussdController")

//const  nakore = require("../controller/nakore");

router.post('/ussd', ussdController.ussd);
router.post('/nakore', ussdController.shop);


module.exports = router;