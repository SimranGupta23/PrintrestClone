const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,   
  description: String,
  image:String
 });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
