const mongoose = require("mongoose");

const User = new mongoose.Schema({
    first_name: {
        required: true,
        type: String

    },
    last_name: {
        required: true,
        type: String

    },
    phone: {
        required: true,
        type: Number

    }

})

module.exports = mongoose.model("User", User);