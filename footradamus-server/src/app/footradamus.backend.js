let express = require('express');
let bodyParser = require('body-parser');
let corsFilter = require('./cors/cors.filter');
let database = require('./db/db');
let createPredictionsController = require('./rest/predictionsController');
let createReverseProxy = require('./rest/footballAPI.reverseProxy.js');
let loadEnvironment = require('../environments/environmentConfig.loader');

let env = loadEnvironment();
let footradamus = express();
footradamus.use(bodyParser.urlencoded({extended: true}));
footradamus.use(bodyParser.json());
footradamus.use(express.static('src/images'));

corsFilter(footradamus);
createPredictionsController(footradamus);
createReverseProxy(footradamus);

database(env.DB_URI);

footradamus.listen(process.env.PORT || 3004, () => console.log('Server is up and running'));