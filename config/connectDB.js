const mongoose = require('mongoose');
require('dotenv').config({path :"./config.env"});
MONGOURL =process.env.MONGO_URL;
const connectDb = ()=>{
    mongoose.connect(MONGOURL,(err)=>{
        if (err) throw (err)
        else console.log('database is connected')
    })
};
module.exports = connectDb;