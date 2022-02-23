const express = require('express')
const connectDB = require("./config/connectDB")
const app = express()
require('dotenv').config({path:"./config/.env"});
connectDB ();
app.use(express.json());
app.use('/user',require('/routes/userRoutes'))
const Port = process.env.port;
app.listen(Port,()=> console.log("runing on port"+ Port));
