const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    favorites: [Srtings],
    marks:[Number]
},{timestamps:true})