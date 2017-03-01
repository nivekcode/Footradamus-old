//let uri = 'mongodb://footradmin:footradmin@ds046549.mlab.com:46549/footradamus';
let mongoose = require('mongoose');

let createDB = (uri) => {
    mongoose.connect(uri);
    let db = mongoose.connection;

    db.on('error', () => console.log('An error occured'));
    db.once('open', () => console.log('Successfully connected to the database'));
}

module.exports = createDB;