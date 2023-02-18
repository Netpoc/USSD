require('dotenv').config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;

const ussdRoute = require("./services/ussdService");
const userRoute = require("./services/userService");
const shopRoute = require('./services/shopService');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", ussdRoute);
app.use("/api", userRoute);
app.use("/api", shopRoute);


app.get('/', (req, res) => {
   res.send("Welcome to a test USSD server...");
})



app.listen(port, () => console.log(`Server running on localhost:${port}`));