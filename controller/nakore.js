const Product = require('../models/product');
exports.shop = [async (req, res) => {
    const { sessionId, phoneNumber, text } = req.body;
    let response;

    if (text === "") {
        response = `CON Welcome to Nakore,\n Please choose an option
        1. Chemicals
        2. Fertilizer
        3. Finance
        4. Bundle
        5. More...`
    } else if (text ==="1") {
        response = `CON Please choose\n
        1. Herbicides
        2. Pesticides
        3. More...
        `
    } else if (text === "2") {
        response = `CON Please choose \n
        1. Organic
        2. Inorganic
        `
    }
// Print the response onto the page so that our SDK can read it
res.set("Content-Type: text/plain");
//res.send(response);
// DONE!!!
setTimeout(() => {
    console.log(text)
    res.send(response);
    res.end()
}, 2000);
}]