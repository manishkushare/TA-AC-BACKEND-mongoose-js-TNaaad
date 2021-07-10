//install packages
const express = require('express');
const mongoose = require('mongoose');
// coonect to mongodb using mongoose
mongoose.connect("mongodb://lcoalhost:27017/samplearticle",(err)=>console.log(err? err:"Connected to database"));
// install express app
const app = express();
// express middleeware
app.use(express.json());
// routing middleware
app.get('/',(req,res)=>{
    res.send('welcome');
})
// error handeling middleware
app.use((req,res,next)=>{
    res.send("Page not found");
})
app.use((err,req,res,next)=>{
    res.send(err);
});

