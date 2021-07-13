const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title : String,
  description : String,
  tags : String,
  likes : String ,
  author = Schema.Types.ObjectId,
  comments : String

}, {timestamps: true});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;