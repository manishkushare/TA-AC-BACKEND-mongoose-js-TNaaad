const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/article1', { useNewUrlParser: true, useUnifiedTopology: true },(err)=> {
    console.log(err? err:"connected to database");
})
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.use((req,res,next)=>{
    res.send("page not found");
})
app.use((err,req,res,next)=>{
    res.send(err);
})
app.listen(3000, ()=>{
    console.log("listeining onport 3k");
})