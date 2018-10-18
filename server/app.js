// Dependencies
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cons = require('consolidate');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

// Initialize the app
var app = express();

app.use(logger('dev')); // devolopment environment

// View engine setup
app.engine('html', cons.pug);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
// Get all data/stuff of the body (POST) parameters
// Parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // read cookies (needed for auth)
app.use(express.static(path.join(__dirname, 'public')));

// REGISTER ROUTES -------------------------------
app.use('/', indexRouter);
// all of our API Routes will be prefixed with /api
app.use('/api', apiRouter);

module.exports = app; // application instance
