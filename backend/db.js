const mongoose = require('mongoose');

async function main() {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected Successfully to database");
  }


  function connectDB(){
    main().catch((err) => console.log(err));
  }


  module.exports = connectDB;