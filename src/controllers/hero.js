var express = require('express');
var heroRouter = express.Router();


heroRouter.get('/', (request, response) => {
    response.status(200).json({'status': 'success'});
});


module.exports = heroRouter;
