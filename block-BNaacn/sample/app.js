const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true, useUnifiedTopology: true},(err) => {
    console.log(err? err : "Connected database");
})
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.use((req,res,next)=>{
    res.send("Page not found");
})

app.use((err,req,res,next)=>{
    res.send(err);
});


app.listen(3000,()=>{
    console.log("listening on port 3k");
});