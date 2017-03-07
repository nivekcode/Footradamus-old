/**
 * Created by kevinkreuzer on 07.03.17.
 */

let createAdminLoginController = (footradamus) => {
    footradamus.post('/adminlogin', (request, response) => {
        console.log('Im Login', request.body);
        response.send('Okay');
    });
}

module.exports = createAdminLoginController;