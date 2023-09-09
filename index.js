const express =require('express');
require("dotenv").config();

const connect = require("./config/dbConnect");

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.port || 8080;

// db connection
connect();

// require connect-flash
const flash = require('connect-flash');
const flashMiddleware = require('./config/flashMiddleware');

// used for session cookies
const session = require("express-session");
const passport = require('passport');
const passportLocal = require('./config/passport_local');

const MongoStore = require('connect-mongo');

// layouts for ejs
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended:false}));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets')); 

//mongo store is used to store the session cookie
app.use(session({
    name: 'habitTracker',
    secret: "something",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl:process.env.url,
            autoRemover : 'disabled'
        },
        function(err){
            console.log("Error in the mongo-store");
        }
    ),
}));

// Using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// flash middleware
app.use(flash());
app.use(flashMiddleware.setFlash);

// use express router
app.use("/",require("./routes"))

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})