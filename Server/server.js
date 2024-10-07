const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();
app.use(bodyParser.json());

app.use(morgan('combined'));

// const clientURL = process.env.NODE_ENV === 'production' ? process.env.PROD_CLIENT_URL : process.env.DEV_CLIENT_URL;

app.use(cors({
  origin: ["http://localhost:3000", "https://nasa-debuggers2024.vercel.app"],
  methods: 'GET,POST,PUT,DELETE,HEAD,OPTIONS',
}));

mongoose.connect(process.env.CONNECTION_STRING, {})
  .then((res) => { console.log('Connected to MongoDB') })
  .catch((err) => { console.log(`Error connecting to MongoDB: ${err}`) });

router(app);

app.listen(4000);
module.exports = app;
