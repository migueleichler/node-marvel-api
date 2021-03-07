var express = require('express');
var morgan = require('morgan')

var app = express();


app.use(morgan('tiny'));

app.get('/hero', (request, response) => {
    response.status(200).json({'status': 'success'});
});


module.exports = app;
