/**
 * Created by kevinkreuzer on 25.02.17.
 */
let httpProxy = require('http-proxy');
let apiProxy = httpProxy.createProxyServer();
let footballAPIServer = 'http://api.football-api.com/2.0/';

module.exports =  (app) => {
    app.all('/footradamus/*', (request, response) => {
        let target = `${footballAPIServer}${request.params[0]}${request._parsedUrl.search}`;
        apiProxy.web(request, response, {target});
    });
}