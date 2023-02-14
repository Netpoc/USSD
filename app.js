require('dotenv').config();
require("./config/database").connect();
const express = require("express");
//const router = express.Router();
const ussdRoute = require("./services/ussdService");
const bodyParser = require('body-parser');



const app = express();
const port = 6000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/", ussdRoute);
app.use("/api/", ussdRoute);
app.get('/', (req, res) => {
   res.send("Welcome to a test USSD server...");
})



app.listen(port, () => console.log(`Server running on localhost:${port}`));