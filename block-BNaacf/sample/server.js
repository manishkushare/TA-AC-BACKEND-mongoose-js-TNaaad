const express = require('express');
const mongoose = require('mongoose');
// conneting express app with mongodb using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/test3', { useNewUrlParser: true ,  useUnifiedTopology: true},(err)=>{
    console.log(err? err:"Connected to database");
})
const app = express();
//middlewares
app.use(express.json());
app.use((req,res,next)=> {
    console.log("Hello, am custom middleware");
    next();
}) 
// routing middlewares
app.get('/',(req,res)=>{
    res.send("Welcome to express middlwares");
})
// error handling middlewares
app.use((req,res,next)=>{
    res.send("Page not found");
})
app.use((err,req,res,next)=>{
    res.send(err);
})
// listner on express server
app.listen(3000,()=>{
    console.log("listening on port 3k");
})