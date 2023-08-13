// const { body, validationResult } = require('express-validator');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { checkUserExists, checkPasswordValidity } = require('../helpers/auth');
const UserDto = require('../dto/user.dto');

const userSignUp = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if a user with the same username already exists
    const isUserExist = await checkUserExists(username);
    if (isUserExist) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    if (!username || !password) {
        return res.status(400).json({message: 'This field cannot be empty'})
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user
    User.create(new UserDto(username, hashedPassword));

    res.status(201).json({ message: 'User registered successfully' });
  } 
  catch (error) {
    console.log('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const userSignIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await checkUserExists(username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }

    // Check if the password is correct
    const isPasswordValid = await checkPasswordValidity(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'secretKey');

    res.status(200).json({ token, user });
  } catch (error) {
    console.log('Error signing in user:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error signing in user' });
  }
};

module.exports = {
  userSignUp,
  userSignIn,
};