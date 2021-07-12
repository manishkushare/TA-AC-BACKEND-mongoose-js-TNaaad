const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({

    title : {
        type : String,
        required : true,
    },
    author : String
});

const Article  = mongoose.module('Article',articleSchema);

module.exports(Article);