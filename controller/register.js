const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require("../models/admin");

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
   }
    
   async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
   }
    
// Registration Route
exports.adminRegister = [
    async (req, res, next) => {
        try {
         const { email, password, role } = req.body
         const user = await Admin.findOne({ email });
         if (user) {
            res.status(400).send('User Already Exist');
         }
         const hashedPassword = await hashPassword(password);
         const newUser = new Admin({ 
            email, 
            password: hashedPassword, 
            role: role || "basic" 
        });
         const accessToken = jwt.sign({ 
            userId: newUser._id 
            }, 
            process.env.TOKEN_KEY, 
            {
                expiresIn: "1d"
            }
        );
         newUser.accessToken = accessToken;
         await newUser.save();
         res.json({
          data: newUser,
          accessToken
         })
        } catch (error) {
         next(error)
        }
       }

];


//User Login route
exports.adminLogin = [(async (req, res)=> {
    try {
        //Get user data
        const { email, password } = req.body;

        //Validate user data
        if (!(email && password)) {
            res.status(400).send("All input are required");
            
        }
        //Validate is user exist in our database
        const user = await Admin.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            //Create token
            const token = jwt.sign(
                {
                    user_id: user._id, 
                    email
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "5h",
                }
            );

            //save user token
            user.token = token;
            //user
            console.log("Successul login");
            res.send(user);
        } else {
        return res.status(400).send("Invalid Credentials");
    }
    }
    catch(res){
        console.log(res)
        
    }
})];
