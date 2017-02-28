let predictionsModel = require('../db/db.js').Predictions;

module.exports = (footradamus) => {

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
        predictionsModel.create(newPrediction);
        response.setHeader('Content-Type', 'application/json');
        response.status(201);
        response.send(newPrediction);
    });

    footradamus.delete('/predictions/:id', (request, response) => {
        let id = request.params.id;
        response.setHeader('Content-Type', 'application/json');
        predictionsModel.findOneAndRemove({_id: id}, (error, deletedPrediction) => {
            if (!error) {
                response.send(deletedPrediction);
            } else {
                response.status(404).send(error);
            }
        });
    });
}