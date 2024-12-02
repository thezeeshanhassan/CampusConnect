const express = require("express");

const app = express();  // express 
const userRouter = require('./routes/user');

app.get('/', function(req, res) {
    res.send('Hello, World!');
});



app.use('/api/v1/user', userRouter); 
app.listen(3000, function() {
    console.log('Server is running on port 3000');});