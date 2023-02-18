const express = require('express');
const router = express.Router();

const userController = require("../controller/userController");
const adminController = require("../controller/register");

router.post('/register', userController.register);
router.post('/adminreg', adminController.adminRegister);
router.post('/login', adminController.adminLogin);


module.exports = router;