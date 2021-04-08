var mongoose = require('mongoose');


mongoose.connection.on('connected', () => {
    console.log('Connection estabislished with MongoDB');
});

mongoose.connection.on('error', (error) => {
    console.error(error.message);
});

async function connect() {
    const uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

    await mongoose.connect(uri, { 
        useNewUrlParser: true,
        dbName: process.env.MONGO_DB,
        user: process.env.MONGO_USERNAME,
        pass: process.env.MONGO_PASSWORD
    });
}


module.exports = {connect};
