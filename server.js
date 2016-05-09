'use strict';

// Babel ES6/JSX Compiler
require('babel-register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var colors = require('colors');
var mongoose = require('mongoose');
var _ = require('underscore');

var config = require('./config/config');
var router = require('./routes/routes');

var app = express();

// Config MongoDB connection
mongoose.connect(config.database);
mongoose.connection.on('error', function () {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

var db = mongoose.connection;
db.on('error', function (err) {
  console.error.bind(console, 'connection error:');
});

db.once('open', function () {
  console.log('geronimo!');
});

// Setting up Express & Routes
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));
router(app);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
