/**
 * Created by kevinkreuzer on 07.03.17.
 */
let jwt = require('jsonwebtoken');
let SECRET = 'footrasecret';

let createJWTToken = () => jwt.sign({
    data: 'footradmin'
}, SECRET, {expiresIn: '1h'});

module.exports = {
    createJWTToken
}