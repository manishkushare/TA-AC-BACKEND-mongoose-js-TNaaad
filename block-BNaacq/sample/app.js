const express = require('express');
const mongoose = require('mongoose');
// initiating express in the app
const app = express();

// middleware
app.use(express.json());

//routing middleware
app.get('/',(req,res)=>{
    res.send("Welcome");
})

// error handeling middleware
app.use((req,res,next)=> {
    res.send("Page not found")
})
app.use((err,req,res,next)=>{
    res.send(err);
})
// selecting port
app.listen(3000,()=> {
    console.log("listening on port 3 k");
})