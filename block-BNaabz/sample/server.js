// install packages
const express = require('express');
const mongoose = require('mongoose');
// now you need to coonect the aplication to mongoDB using mongoose before mouting express aplication 
mongoose.connect( "mongodb://localhost:27017", { useNewUrlParser: true , useUnifiedTopology: true},((err) => err? console.log(err):console.log("connected to database")));

// mount express app on server
const app = express();

// midddleares
app.use(express.json());

// routers
app.get('/',(req,res)=> {
    res.send("Hey, am learning mongoose");
})
// error handeling middleware
app.use((req,res,next)=>{
    res.send("error")
})
app.use((err,req,res,next)=>{
    res.send(err);
})

// listen on app server
app.listen(3000,()=>{
    console.log("Listening on port 3k");
})