const express = require("express");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require(`passport-local`); // it is local stretgy to  login user
require('dotenv').config();
const userRouter = require('./routes/user');
const connectDB = require("./db");
const User = require("./models/user");
const JWT_SECRET = process.env.SESSION_SECRET;
const app = express();

connectDB();

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sessionOptions = {
    secret: JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 3600 * 1000,
        maxAge: 7 * 24 * 3600 * 1000,
        httpOnly: true
    }
}

app.use(session(sessionOptions));

////// Authentication With Passport Start

app.use(passport.initialize()); //Initilize Passport Library
app.use(passport.session()); //Checks Requests and Response and Session Details that Which User is getting Responses and doing Requests

passport.use(new localStrategy(User.authenticate())); //Authenticate Every User with Local Stratgery
passport.serializeUser(User.serializeUser()); // Store User Information in Session (Serialization)
passport.deserializeUser(User.deserializeUser());
//Routes
app.get('/', function (req, res) {
    res.send('Hello, World!');
});
app.use('/api/v1/user', userRouter);




// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});