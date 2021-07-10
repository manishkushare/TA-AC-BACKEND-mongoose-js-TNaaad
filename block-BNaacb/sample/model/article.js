const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchenma = new Schema({
    title: String,
    description: String
})