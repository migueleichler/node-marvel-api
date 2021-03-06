const express = require('express');
const app = express();


app.get('/hero', (request, response) => {
    response.status(200).json({'status': 'success'});
});


module.exports = app;