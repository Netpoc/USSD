router.post('/register', async (req, res) => {
    try{
        //Get user information
        const {firstName, lastName, email, password } = req.body;
        //Validate user input
        if(!(email&&password&&firstName&&lastName)) {
            res.status(400).send("All input is required");
        }
        //Check if user already exist in database
        const oldUser = await User.findOne({email});
        if (oldUser) {
            res.status(400).send("Email already exist in database");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        //Create the new user in database
        const user = await User.create({
            first_name: firstName,
            last_name: lastName,
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        //Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "5h",
            }
        );
        //Save user token
        user.token = token;

        //Retunr new User
        res.status(201).json(user);
        console.log('User registration successful...');
    }
    catch(err){
        console.log("Failed Registeration");
    }
});


//User Login route
router.post('/login', async (req, res)=> {
    try {
        //Get user data
        const { email, password } = req.body;

        //Validate user data
        if (!(email && password)) {
            res.status(400).send("All input are required");
            
        }
        //Validate is user exist in our database
        const user = await User.findOne({ email });

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
            console.log("Successul login")
            return res.render('pages/dashboard', {
                user: user.first_name
            });
        }
        return res.status(400).send("Invalid Credentials");
    }
    catch(res){
        console.log(res)
        
    }
});
