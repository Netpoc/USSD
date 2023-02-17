const mongoose = require ('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId

const itemSchema = new mongoose.Schema({
    owner: {
        required: true,
        type: ObjectID,
        ref: 'User'
    },
    name: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    timestamps: true
})

module.exports = mongoose.model("Item", itemSchema);