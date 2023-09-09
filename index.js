const express =require('express');
require("dotenv").config();
const connect = require("./config/dbConnect");
const app = express();

const port = process.env.port || 8080;

// db connection
connect();






app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})