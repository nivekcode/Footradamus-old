/**
 * Created by kevinkreuzer on 25.02.17.
 */

/*
let httpProxy = require('http-proxy');
let apiProxy = httpProxy.createProxyServer();
let footballAPIServer = 'http://api.football-api.com/2.0/';

module.exports =  (app) => {
    app.all('/footradamus/*', (request, response) => {
        let target = `${footballAPIServer}${request.params[0]}${request._parsedUrl.search}`;
        console.log('Target', target);
        apiProxy.web(request, response, {target: target});
    });
}
*/

let footballAPIServer = 'http://api.football-api.com/2.0/';
var request = require('request');

module.exports = (app) => {
    app.get('/footradamus/*', function (req, res) {
        //modify the url in any way you want
        let target = `${footballAPIServer}${req.params[0]}${req._parsedUrl.search}`;
        request(target).pipe(res);
    });
}