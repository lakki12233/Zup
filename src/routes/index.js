// routes/index.js

const express = require('express');
const postRoutes = require('./post');
const commentRoutes = require('./comment');
const userRoutes = require('./user'); // Ensure this line is present

const router = express.Router();

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/auth', userRoutes); // Make sure to use '/auth' for user routes

module.exports = router;
