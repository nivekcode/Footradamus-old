let predictionsModel = require('../db/schemas/prediction.schema.js').Predictions;
let tokenHelper = require('../authentication/token.helper');

let createPredictionsController = (footradamus) => {

    footradamus.get('/predictions', (request, response) => {
        predictionsModel.find({}, (error, predictions) => {
            response.setHeader('Content-Type', 'application/json');
            response.send(predictions);
        });
    });

    footradamus.put('/predictions/:id', (request, response) => {
        let id = request.params.id;
        response.setHeader('Content-Type', 'application/json');
        predictionsModel.findOneAndUpdate({_id: id}, request.body, (error) => {
            if (!error) {
                response.send(request.body);
            } else {
                response.status(404).send(error);
            }
        });
    });

    footradamus.post('/predictions', (request, response) => {
        let newPrediction = request.body;
        predictionsModel.findOne({
            homeTeam: newPrediction.homeTeam,
            awayTeam: newPrediction.awayTeam,
            matchDate: newPrediction.matchDate
        }, (error, found) => {
            if (found === null) {
                predictionsModel.create(newPrediction);
                response.setHeader('Content-Type', 'application/json');
                response.status(201);
                response.send(newPrediction);
            }
            else{
                let errorMessage = `There is already a prediction for the game between ${newPrediction.homeTeam} and ${newPrediction.awayTeam} on ${newPrediction.matchDate}`;
                response.status(409).send({error: errorMessage});
            }
        });
    });

    footradamus.delete('/predictions/:id', (request, response) => {
        let token = request.headers[tokenHelper.TOKEN_NAME];
        let isTokenValid = tokenHelper.isTokenValid(token);

        if(isTokenValid) {
            deletePrediction(request, response);
        }
        else{
            response.status(401).send({error: 'You are not authorized to delete this resource'});
        }
    });
}

let deletePrediction = (request, response) => {
    let id = request.params.id;
    response.setHeader('Content-Type', 'application/json');
    predictionsModel.findOneAndRemove({_id: id}, (error, deletedPrediction) => {
        if (!error) {
            response.send(deletedPrediction);
        } else {
            response.status(404).send(error);
        }
    });
}

module.exports = createPredictionsController;