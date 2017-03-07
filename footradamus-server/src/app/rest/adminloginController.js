/**
 * Created by kevinkreuzer on 07.03.17.
 */
let jwt = require('jsonwebtoken');
let USERNAME = 'footradmin';
let PASSWORD = 'footradmin';

let isUserAdmin = (username, password) => {
    return username === USERNAME && password === PASSWORD
}

let getJWTToken = () => jwt.sign({
    data: 'footradmin'
}, 'footrecret', {expiresIn: '1h'});

let createAdminLoginController = (footradamus) => {
    footradamus.post('/adminlogin', (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        if (isUserAdmin(request.body.username, request.body.password)) {
            let token = getJWTToken();
            response.send({token});
        }
        else {
            response.status(401).send({error: 'Wrong username or password'});
        }
    });
}

module.exports = createAdminLoginController;