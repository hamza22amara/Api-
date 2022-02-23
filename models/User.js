const mongoose = require('mongoose')
const schema = mongoose.schema;
const Userschema = new schema({
    FirstName: string,
    LastName: string,
    Email: {
        type:string,
        required: true
    },
    Password:{
        type: string,
        required: true
    },
    date: {type:date, default: date.now }

});
module.exports = mongoose.model('User',Userschema)