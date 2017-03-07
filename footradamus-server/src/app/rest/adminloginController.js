/**
 * Created by kevinkreuzer on 07.03.17.
 */
let tokenHelper = require('../authentication/token.helper');
let USERNAME = 'footradmin';
let PASSWORD = 'footradmin';

let isUserAdmin = (username, password) => {
    return username === USERNAME && password === PASSWORD
}

let createAdminLoginController = (footradamus) => {
    footradamus.post('/adminlogin', (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        if (isUserAdmin(request.body.username, request.body.password)) {
            let token = tokenHelper.createJWTToken();
            response.send({token});
        }
        else {
            response.status(401).send({error: 'Wrong username or password'});
        }
    });
}

module.exports = createAdminLoginController;