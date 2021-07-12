const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    email: {
        type : String,
        match: /@/,
        lowerCase: true
    },
    age: {
        type : Number,
        default : 18,
        min: 18,
        max:30
    }
})

const User = mongoose.model('User',userSchema);

// module.exports(User);
module.exports = {User};