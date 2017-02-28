/**
 * Created by kevinkreuzer on 25.02.17.
 */
let footballAPIServer = 'http://api.football-api.com/2.0/';
var request = require('request');

module.exports = (app) => {
    app.get('/footradamus/*', function (req, res) {
        let target = `${footballAPIServer}${req.params[0]}${req._parsedUrl.search}`;
        request(target).pipe(res);
    });
}