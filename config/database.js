const mongoose = require("mongoose");
//const { DATABASE_URL } = process.env;

let uri = `mongodb+srv://netpoc:73R78hTFgZzmTx6l@cluster0.nmjh1.mongodb.net/?retryWrites=true&w=majority`

exports.connect = () => {
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
        })
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => {
            console.log("Connection to database failed");
            console.error(error);
            process.exit(1);
        });
};