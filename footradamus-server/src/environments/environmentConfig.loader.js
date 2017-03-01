/**
 * Created by kevinkreuzer on 01.03.17.
 */
const DEV_ENV = 'dev';
const PROD_ENV = 'prod';
let devConfigurations = require('./dev.env.json');
let prodConfigurations = require('./prod.env.json');

let loadEnvironments = () => {
    let env = process.env.NODE_ENV;
    if (env === DEV_ENV) {
        return devConfigurations;
    }

    if (env === PROD_ENV) {
        return prodConfigurations;
    }
}

module.exports = loadEnvironments;
