/**
 * Created by kevinkreuzer on 01.03.17.
 */
let cors = require('express-cors');
let TOKEN_NAME = 'footratoken';


let createCorsFilter = footradamus => {
    footradamus.use(cors({
        allowedOrigins: [
            'localhost:4200',
            'https://footradamus.firebaseapp.com'
        ],
        headers: [TOKEN_NAME, 'content-type']
    }));
}

module.exports = {createCorsFilter, TOKEN_NAME};