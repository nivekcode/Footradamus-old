let mongoose = require('mongoose');

let createDB = (uri) => {
    mongoose.connect(uri);
    let db = mongoose.connection;

    db.on('error', () => console.log('An error occured by connectiong to the database'));
    db.once('open', () => console.log('Successfully connected to the database'));
}

module.exports = createDB;