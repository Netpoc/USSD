const mongoose = require("mongoose");
const Model = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    tickets: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("Model", Model);