const express = require("express");
require('dotenv').config();

const app = express();  // express 
const userRouter = require('./routes/user');
const connectDB = require("./db");


connectDB();
app.get('/', function(req, res) {
    res.send('Hello, World!');
});



app.use('/api/v1/user', userRouter); 
app.listen(3000, function() {
    console.log('Server is running on port 3000');});