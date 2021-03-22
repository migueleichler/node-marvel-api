var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const heroSchema = new Schema({
    name: String,
});


const Hero = mongoose.model('Hero', heroSchema);


module.exports = Hero;
