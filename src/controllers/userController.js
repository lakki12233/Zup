// controllers/userController.js

const User = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {
  signUp: async (req, res) => {
    try {
      //getting username,email,password
      const { username, email, password } = req.body;

      //checks if users (email) exists
      const existingUser = await User.findOne({ email });

      //if email already exists it will return client error
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      //Adding New user to Mongodb
      const newUser = new User({ username, email, password });
      await newUser.save();

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error signing up:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

        //If User does not exists Display as No Such User
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      //Checking Hashed-password (By Decription)
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      res.json({ message: 'Sign-in successful' });
    } catch (error) {
      console.error('Error signing in:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;
