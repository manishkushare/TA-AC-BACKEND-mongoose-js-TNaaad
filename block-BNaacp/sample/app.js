const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

// connecting express app to the mongodb using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/sample',
{ useNewUrlParser: true ,useUnifiedTopology: true},
(err)=> {
    console.log(err? err: "Database connected");
})

// initializing express on project
const app = express();

// middlewares
app.use(express.json());

// routing middlewares
app.get('/',(req,res)=> {
    res.send("Welcome");
});
app.post('/users',(req,res,next)=> {
    User.create(req.body,(err,users) => {
        if(err){
            next(err);
        }
        res.json(users);
    })
});

app.get('/users',(req,res,next)=> {
    User.findOne({_id : "60ed7e8647007e227aec20c7"},(err,users) => {
        if(err){
            next(err);
        }
        res.send(users);
    })
});
app.get('/users/:id',(req,res,next)=> {
    const id = req.params.id;
    User.findById(id,(err,user)=> {
        if(err){
            next(err);
        }
        res.json(user);
    })
});

app.put('/users/:id',(req,res,next)=> {
    const id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new:true},(err,updatedUser) => {
        if(err){
            next(err);
        }
        res.json(updatedUser);
    })
});

app.delete('/users/:id',(req,res,next)=>{
    const id = req.params.id;
    User.findByIdAndDelete(id,(err,deletedUser)=> {
        if(err){
            next(err);
        }
        res.send(`${deletedUser.name} is deleted`)
    })
})
// error handleing middleware
app.use((req,res)=> {
    res.send('Page not found');
});

app.use((err,req,res,next)=>{
    res.send(err);
});
// setting port
app.listen(4000,()=> {
    console.log("listening on port 3k");
});