const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email:{
        type:String,
        lowerCase : true
    },
    age:{
        type:Number,
        value:0
    }

})