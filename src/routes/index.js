// routes/index.js

const express = require('express');
const postRoutes = require('./post');
const commentRoutes = require('./comment');
const userRoutes = require('./user'); // Ensure this line is present

const router = express.Router();


// 1.user routes for signup and signin
router.use('/auth', userRoutes); 

//2.To Create Post
router.use('/posts', postRoutes);

//3.To Add Comments in Post
router.use('/comments', commentRoutes);


module.exports = router;
