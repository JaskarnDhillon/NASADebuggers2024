const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // Using the modern bcrypt package
const { Schema } = mongoose;

// Create user schema
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String,
  progress: {
    courses: [{
      id: String,
      modules: [{
        id: String,
        completed: Boolean,
        isAvaialble: Boolean
      }]
    }]
  }
});

// Encrypt password before saving a model
userSchema.pre('save', async function (next) {
  const user = this;
  
  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);
    
    // Hash the password
    const hash = await bcrypt.hash(user.password, salt);
    
    // Set the hashed password on the user
    user.password = hash;
    
    // Proceed to save the model
    next();
  } catch (err) {
    return next(err);
  }
});

// Compare saved hashed password and provided password during sign-in
userSchema.methods.comparePasswords = async function (password) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

const User = mongoose.model('user', userSchema);

module.exports = User;
