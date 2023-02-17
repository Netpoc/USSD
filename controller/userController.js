const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const auth = require("../middleware/auth");

const User = require('../models/user');


//User registration route
exports.register = [ async (req, res) => {
    try{
        //Get user information
        const {firstName, lastName, phone } = req.body;
        //Validate user input
        if(!(firstName && lastName && phone)) {
            res.status(400).send("All input is required");
        }
        //Check if user already exist in database
        const oldUser = await User.findOne({phone});
        if (oldUser) {
            res.status(400).send("user already exist in database");
        }

        //Create the new user in database
        const user = await User.create({
            first_name: firstName,
            last_name: lastName,
            phone: phone
        })

        //Create token
        const token = jwt.sign(
            { user_id: user._id, phone },
            process.env.TOKEN_KEY,
            {
                expiresIn: "5h",
            }
        );
        //Save user token
        user.token = token;

        //Retunr new User
        //res.status(201).json(user);
        console.log('User registration successful...');
    }
    catch(err){
        console.log("Failed Registeration", err);
    }
}];

