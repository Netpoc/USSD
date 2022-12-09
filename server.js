const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");


const port = process.env.PORT || 6000;
const app = express();


app.use(bodyParser.json());

app.get('/us', async (req, res) => {
    const url = `https://bea6-154-160-14-95.eu.ngrok.io/ussd`;
    const response = await axios({
        url,
        method: "get",
        headers: {
            "X-Client-Id": "hTKp0duy",
            "X-Client-Secret": "xBKVOBlpHlSMuNwMbUx4pfhe",
        },
    })
    console.log(response.data)
    
})
app.get("/v1/acquire/products", (req, res) => {
    console.log(res.data);
})

app.get("/ussd", (req, res) => {
    res.send("UssD application is working");
})

app.post('/post', (req, res) => {

    console.log('Working POST route');
})

app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`);
})