/**
 * Created by kevinkreuzer on 25.02.17.
 */

module.exports =  (app) => {
    app.get('/footradamus', (request, response) => {
        response.send('Hallo Kiwi');
    });
}

