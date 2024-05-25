const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

exports.connect = () => {
    mongoose
        .connect(MONGODB_URL, {
            useNewUrlParser: true, // Corrected typo
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("DB Connection Success");
        })
        .catch((err) => {
            console.log("DB Connection Failed");
            console.log(err);
            process.exit(1);
        });
};