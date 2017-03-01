let express = require('express');
let bodyParser = require('body-parser');
let corsFilter = require('./cors/cors.filter');
let createPredictionsController = require('./rest/predictionsController');
let createReverseProxy = require('./rest/footballAPI.reverseProxy.js');
let configLoader = require('../environments/environmentConfig.loader');

let footradamus = express();

footradamus.use(bodyParser.urlencoded({extended: true}));
footradamus.use(bodyParser.json());

corsFilter.createCorsFilter(footradamus);

createPredictionsController(footradamus);
createReverseProxy(footradamus);

footradamus.listen(process.env.PORT || 3004, () => console.log('Server is up and running'));