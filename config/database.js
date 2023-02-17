const mongoose = require("mongoose");
const { DATABASE_URL } = process.env;


exports.connect = () => {
    mongoose
        .connect(DATABASE_URL, {
            useNewUrlParser: true,   
        })
        .then(() => {
            console.log("Database Connected ('_')");
        })
        .catch((error) => {
            console.log("Connection to database failed");
            console.error(error);
            process.exit(1);
        });
};