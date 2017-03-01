let express = require('express');
let bodyParser = require('body-parser');
let cors = require('express-cors');
let createPredictionsController = require('./rest/predictionsController');
let createReverseProxy = require('./rest/footballAPI.reverseProxy.js');
let configLoader = require('../environments/environmentConfig.loader');

let footradamus = express();

footradamus.use(bodyParser.urlencoded({extended: true}));
footradamus.use(bodyParser.json());

footradamus.use(cors({
    allowedOrigins: [
        'localhost:4200',
        'https://footradamus.firebaseapp.com'
    ]
}));

createPredictionsController(footradamus);
createReverseProxy(footradamus);

console.log('Environment', configLoader.loadEnvironment());

footradamus.listen(process.env.PORT || 3004, () => console.log('Server is up and running'));