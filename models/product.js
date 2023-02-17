const mongoose = require ('mongoose');

const Product = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    tag: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    class: {
        required: true,
        type: String
    },
    weight: {
        required: true,
        type: Number
    },
    image: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Product", Product);