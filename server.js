require('dotenv').config();
require('./src/util/env');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const municipalitiesRoutes = require('./src/municipalities/municipalities.route');
const forecastingsRoutes = require('./src/forecastings/forecastings.route');

const Email = require('./src/services/email');

const app = express();

// environment variables
const PORT_NUMBER = process.env.PORT_NUMBER;
const MONGODB_HOST = process.env.MONGODB_HOST;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
const MONGODB_USER = process.env.MONGODB_USER;
const MOGNODB_PASSWORD = process.env.MOGNODB_PASSWORD;

// mongodb connection
const mongoURI = `mongodb://${MONGODB_USER}:${MOGNODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}`;

mongoose.connect(mongoURI, {
  useMongoClient: true
});

// log http request
app.use(logger('dev'));
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// all routes to handle http request
app.use('/municipalities', municipalitiesRoutes);
app.use('/forecastings', forecastingsRoutes);

// error for not request handle
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;

  next(error);
});

// error handler for any error
app.use((err, req, res, next) => {
  // notify error with email
  msg = {
    subject: 'ERROR WAS THROW IN ASTURIAS-WEATHER-BOT-API',
    text: err.toString()
  };

  // Email.send(msg);

  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// SERVER START
app.listen(PORT_NUMBER, (err) => {
  if (err) {
    console.error(JSON.stringify(err));
    return;
  }
  
  console.log(new Date().toString());
  console.log(`Server running on port: ${PORT_NUMBER}`);
});