/**
 * Created by kevinkreuzer on 07.03.17.
 */
let jwt = require('jsonwebtoken');
let SECRET = 'footrasecret';

let createJWTToken = () => jwt.sign({
    data: 'footradmin'
}, SECRET, {expiresIn: '1h'});

let isTokenValid = (token) => {
    try {
        jwt.verify(token, SECRET);
        return true;
    }
    catch(error){
        return false;
    }
}

module.exports = {
    createJWTToken, isTokenValid
}