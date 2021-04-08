const app = require('./app');
const database = require('./db');


database.connect();

app.listen(8080, () => {
    console.log('Starting Server!');
});
