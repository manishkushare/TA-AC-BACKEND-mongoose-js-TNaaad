const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content : String,
    author : Schema.Types.ObjectId,
    article : String
},{timestamps:true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;