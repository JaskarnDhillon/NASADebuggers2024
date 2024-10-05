const Authentication = require('./controllers/authentication');
const passport = require('passport');
require('./services/passport');

const requireAuth = passport.authenticate('jwt', {
  session: false
});
const requireSignIn = passport.authenticate('local', {
  session: false
});

module.exports = function (app) {

  // Hello endpoint
  app.get('/api/v1/', function (req, res) {
    res.send('Express Server with JWT Authentication');
  });

  // Validate user
  app.get('/api/validate', requireAuth, function(req, res) {
    res.send({
      user: req.user.email
    });
  });

  // Login user
  app.post('/api/v1/login', requireSignIn, Authentication.signin);

  // Register user
  app.post('/api/v1/register', Authentication.signup);
};