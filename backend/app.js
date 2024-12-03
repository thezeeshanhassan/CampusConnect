const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require(`passport-local`); // it is local stretgy to  login user
require('dotenv').config();
const userRouter = require('./routes/user');
const connectDB = require("./db");
const app = express();
const communityRouter = require('./routes/Community');
connectDB();

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize()); //It initialize the passport lib
// app.use(passport.session()); //it starts the session so same user can to different tabs

//Routes
app.get('/', function (req, res) {
    res.send('Hello, World!');
});
app.use('/api/v1/user', userRouter);
app.use('/api/v1/communities', communityRouter);



// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});