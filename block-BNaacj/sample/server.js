// install packages in application
const express = require('express');
const mongoose = require('mongoose');
// coonect express application with mongodb using mongoose 
mongoose.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true, useUnifiedTopology: true },(err)=> console.log(err? err:"Connected to database"));
// install express in application
const app = express();

// middlewares
app.use(express.json());
// routing middlewares
app.get('/',(req,res)=>{
    res.send("Welcome");
})
// error handleing middleware
app.use((req,res,next)=>{
    res.send("Page not found");
})
app.use(((err,req,res,next)=>{
    res.send(err);
}))

// listen on server
app.listen(3000,()=> console.log("listening on port 3k"))

