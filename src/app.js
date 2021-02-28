const express = require('express');
const app = express();


app.get('/hero', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify({'status': 'success'}));
});


module.exports = app;