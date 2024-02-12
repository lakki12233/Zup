// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User sign-up route
router.post('/signup', userController.signUp);

// User sign-in route
router.post('/signin', userController.signIn);

module.exports = router;
