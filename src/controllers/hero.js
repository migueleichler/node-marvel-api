var express = require('express');
var heroRouter = express.Router();
var Hero = require('../entities/hero');


heroRouter.get('/', async function (request, response) {
    var heroesList = await Hero.find();
    response.status(200).json({'heroes': heroesList});
});


module.exports = heroRouter;
