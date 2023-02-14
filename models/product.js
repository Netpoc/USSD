const mongoose = require("mongoose");
const Product = new mongoose.Schema({
    name: {
        required: true,
        type: String
        },
    description: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: String
    },
    dateCreated: {
        required: true,
        type: Date
    }
    
});

module.exports = mongoose.model("Product", Product);