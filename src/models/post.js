
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: 
  { 
      type: Date, default: Date.now
   },
  comments: [
    {
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
