/**
 * Created by kevinkreuzer on 01.03.17.
 */
let cors = require('express-cors');

let createCorsFilter = footradamus => {
    footradamus.use(cors({
        allowedOrigins: [
            'localhost:4200',
            'https://footradamus.firebaseapp.com'
        ]
    }));
}

module.exports = createCorsFilter;