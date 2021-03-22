var express = require('express');
var morgan = require('morgan');
var heroRouter = require('./controllers/hero');

var app = express();


// Middlewares
app.use(morgan('tiny'));
app.use(express.json());

// Routes
app.use('/hero', heroRouter);


module.exports = app;
