const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    password :{
        type : String,
        minlength : 5,
        maxlength : 15
    },
    createdAt : {
        type: String,
        default : new Date();
    }
})