/**
 * Created by kevinkreuzer on 07.03.17.
 */
let jwt = require('jsonwebtoken');
let SECRET = 'footrasecret';

let createJWTToken = () => jwt.sign({
    data: 'footradmin'
}, SECRET, {expiresIn: '1h'});

let validateToken = (token) => {
    jwt.verify(token, SECRET, (err) => {
        if(err){
            console.log('Error');
        }
        else{
            console.log('Oki');
        }
    });
}

module.exports = {
    createJWTToken, validateToken
}