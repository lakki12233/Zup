// routes/post.js

const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Create a new post
router.post('/', async (req, res) => {
  const { title, body, location } = req.body;//

//Checks All detailed Inserted  
  if (!title || !body || !location) {
    res.status(400).json({ error: 'Didn\'t enter all the fields' });
  }

  try {
    //New Posted Has been created
    const post = new Post({ title, body, location });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
