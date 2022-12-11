require('dotenv').config();
require("./config/database").connect();
const express = require("express");
const ussdRoute = require("./services/ussdService");
const bodyParser = require('body-parser');



const app = express();
const port = 6000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", ussdRoute);

app.listen(port, () => console.log(`Server running on localhost:${port}`));