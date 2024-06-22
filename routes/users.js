// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


const mongoose = require('mongoose');
const passlocalmong = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/backendproject")

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]

});

userSchema.plugin(passlocalmong);

const User = mongoose.model('User', userSchema);

module.exports = User;

