const express = require('express');
const router = express.Router()
const User = require('../models/User')

app.post('/api/add_user',(req,res)=>{
    const{name,lastName,email,phone}=req.body;
    const newUser=new User({name,lastName,email,phone});
    newUser.save()
        .then((User)=>res.send(User)).then(()=>console.log('user added succesefully'+Date()))
        .catch((err)=>res.status(400).send({msg:"ERROR ADD"}))
});
//get all users
app.get('/api/users',(req,res)=>{
   User.find()
       .then((User)=> res.status(200).send(User)).catch((err)=>res.status(400).send({ msg: "ERROR GET USERS" }));

});

//get user by id
app.get("/api/users/:userID",(req,res)=>{
    const id=req.params.userID;
    User.findById(id).then((User)=>res.status(200).send(User))
        .catch((err)=>res.status(400).send({msg:"ERROR GET USER"}));
});

//edi user by ID
app.put("/api/users/:userID",(req,res)=>{
    const id=req.params.userID;
    User.findByIdAndUpdate(id,req.body,{new:true})
        .then((User)=> {
            if (!User) {
              return  res.status(400).send({msg: "user not found"});
            }
            res.status(200).send(User);
        })
        .catch((err)=>res.status(400).send({msg:"ERROR"}));
});
//delete by ID
app.delete("/api/users/:userID",(req,res)=>{
    const id=req.params.userID;
    console.log(id);
    User.findByIdAndDelete(id)
        .then(((User)=>{
            if (!User) {
                return res.status(404).send({ msg: "User Not Found " });
            }
            res.status(200).send({msg:"User was deleteed"})
        }))
        .catch((err)=>res.status(400).send({msg:"ERROR"}));
});








module.exports= router 
