const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email : {
        type :String,
        lowercase: true
    },
    age : {
        type : Number,
        default : 0
    },
    password:{
        type : String,
        minlength : 5
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
    favourites : [String]
},{timestamps: true});

const User = mongoose.model('User',userSchema);

module.exports = User;

