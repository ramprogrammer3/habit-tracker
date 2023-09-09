const express =require('express');
require("dotenv").config();

const connect = require("./config/dbConnect");

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.port || 8080;



// db connection
connect();

// layouts for ejs
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended:false}));


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets')); 






app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})