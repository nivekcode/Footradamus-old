const predictionBackendUrl = 'http://localhost:3004';

export const PROD_CONFIG = {
  backendUrl: 'http://api.football-api.com/2.0/',
  authParam: 'Authorization=565ec012251f932ea4000001fa542ae9d994470e73fdb314a8a56d76',
  predictionBackendUrl: predictionBackendUrl
}

export const DEV_CONFIG = {
  backendUrl: 'http://localhost:3000/',
  authParam: '',
  predictionBackendUrl: predictionBackendUrl
}
