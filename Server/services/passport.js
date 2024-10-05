require('dotenv').config(); // Load environment variables at the top

const passport = require('passport');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

// Access the secret from the environment variable
const secret = process.env.SECRET;

if (!secret) {
  throw new Error('JWT secret is not defined. Please set the SECRET environment variable.');
}

// Setting Local Strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: email });

    if (!user) {
      return done(null, false, { message: 'Incorrect email or password.' });
    }

    // Check if the password is correct
    const isMatch = await user.comparePasswords(password);

    if (!isMatch) {
      return done(null, false, { message: 'Incorrect email or password.' });
    }

    // Authentication successful
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

// Setting the JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    // Find the user by ID
    const user = await User.findById(payload.sub);

    if (user) {
      // User found
      done(null, user);
    } else {
      // User not found
      done(null, false);
    }
  } catch (err) {
    done(err, false);
  }
});

// Tell passport to use defined strategies
passport.use(jwtLogin);
passport.use(localLogin);