const mongoose = require ('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId

const itemSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    quantity: {
        required: true,
        type: Number
    },
    category: {
        required: true,
        type: String
    },
    barcode: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    date_added: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Item", itemSchema);