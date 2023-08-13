const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const checkUserExists = async (username) => {
  const isUserExist = await User.findOne({ username });
  return isUserExist;
};

const checkPasswordValidity = async (password, hashedPassword) => {
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  return isPasswordValid;
};

const createUser = () => {
    
    return newUser;
}

module.exports = {
    checkUserExists,
    checkPasswordValidity
};