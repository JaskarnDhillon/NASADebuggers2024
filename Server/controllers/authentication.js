const jwt = require('jwt-simple');
const User = require('../models/user');
require('dotenv').config();

const secret = process.env.SECRET

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

exports.signin = function (req, res) {
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = async function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
  
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(422).send({ error: 'Email and password must be provided' });
    }
  
    try {
      // Check if a user with the given email already exists
      const existingUser = await User.findOne({ email: email });
  
      if (existingUser) {
        return res.status(422).send({ error: 'Email is already in use...' });
      }
  
      // Create a new user instance
      const user = new User({
        email: email,
        password: password,
      });
  
      // Save the new user to the database
      await user.save();
  
      // Generate a token for the new user
      res.json({ token: tokenForUser(user) });
    } catch (err) {
      // Pass any errors to the next middleware
      next(err);
    }
};