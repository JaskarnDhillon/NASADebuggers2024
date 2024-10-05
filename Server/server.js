const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();
app.use(bodyParser.json());

app.use(morgan('combined'));

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

router(app);

app.listen(4000);
module.exports = app;
