const express = require('express');
const mongoose = require('mongoose');
const user = require('./models/user');
console.log(user);
console.dir(user)
// connecting application to mongodb using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/sample',(err)=> console.log(err? err:"Connected to database"));
const app = express();
// middleware
app.use(express.json());

// routing middleware
app.get((req,res)=>{
    res.send("Weclome");
})
// error handling middleware
app.use((req,res,next)=>{
    res.send("Page not found");
})
app.use((err,req,res,next)=>{
    res.send(err);
})
app.listen(3000,()=>console.log("listening on port 3k"));