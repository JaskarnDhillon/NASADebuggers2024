const Authentication = require('./controllers/authentication');
const Courses = require('./controllers/courses');
const Modules = require('./controllers/modules');
const Quizzes = require('./controllers/quizzes');

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

  app.get('/api/v1/courses', Courses.get);

  app.get('/api/v1/courses/:_id', Courses.getCourseById);

  app.get('/api/v1/modules', Modules.get);

  app.get('/api/v1/modules/:_id', Modules.getModulesById);

  app.get('/api/v1/modules/xyz/:_id', Modules.getModulesByCourse);

  app.get('/api/v1/quizzes', Quizzes.get);

  app.get('/api/v1/quizzes/:_id', Quizzes.getQuizById);

  app.post('/api/v1/quizzes/:_id/submit', Quizzes.submitQuiz);

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