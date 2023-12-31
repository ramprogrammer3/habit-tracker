const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.url;

const connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB connection successful");
    }).catch((error) => {
        console.log("DB Connection failed");
        console.error(error);
        process.exit(1);
    })
}

module.exports = connect;