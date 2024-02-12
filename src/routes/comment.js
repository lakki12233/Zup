// routes/comment.js



const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Add a new comment to an existing post
router.post('/', async (req, res) => {
  const { postId, comment } = req.body;

  if (!postId || !comment) {
    return res.status(400).json({ error: 'postId and comments are required fields' });
  }

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Assuming 'comments' is an array field in the Post model
    post.comments.push({ comment });

    await post.save();

    res.json(post);
  } catch (error) {
    console.error('Error adding comment to post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
