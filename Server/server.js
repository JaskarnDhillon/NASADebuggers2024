const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();

  const cors = require('cors');
  app.use(cors({
      origin: process.env.CLIENT_URL,
      methods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS',
  }));
}

mongoose.connect(process.env.CONNECTION_STRING, {})
  .then((res) => { console.log('Connected to MongoDB') })
  .catch((err) => { console.log(`Error connecting to MongoDB: ${err}`) });

const coursesController = require('./controllers/courses');
app.use('/api/v1/courses', coursesController);

const modulesController = require('./controllers/modules');
app.use('/api/v1/modules', modulesController);

const quizzesController = require('./controllers/quizzes');
app.use('/api/v1/quizzes', quizzesController);

const usersController = require('./controllers/users');
app.use('/api/v1/users', usersController);

app.use(express.static(__dirname + '/public'));
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(4000);
module.exports = app;
