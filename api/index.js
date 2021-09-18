const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=> console.log("DB Connection Succesfull!"))
.catch((err)=>console.log(err));

app.listen(8800, ()=>{
    console.log("Backend server is running!");
});