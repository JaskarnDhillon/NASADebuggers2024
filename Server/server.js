const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(bodyParser.json());

// use dotenv if not in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();

  // enable cors
  const cors = require('cors');
  app.use(cors({
      origin: process.env.CLIENT_URL,
      methods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS',
  }));
}

const testController = require('./controllers/test');
app.use('/api/v1/test', testController);

app.listen(4000);
module.exports = app;
