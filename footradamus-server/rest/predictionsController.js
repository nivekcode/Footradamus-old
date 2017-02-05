let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let predictions = require('./predictions.json').predictions;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/predictions', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send(predictions);
});

app.put('/predictions/:id', (request, response) => {
    let updatedPrediction = request.body;
    let id = request.params.id;
    let predictionToUpdate;

    predictions.forEach((prediction, index) => {
        if (parseInt(id) === prediction.id) {
            predictionToUpdate = predictions[index];
            updatedPrediction.id = prediction.id;
            predictions[index] = Object.assign({}, predictionToUpdate, updatedPrediction);
        }
    });
    writePrediction(predictions);

    if (predictionToUpdate) {
        response.setHeader('Content-Type', 'application/json');
        response.send(updatedPrediction);
    } else {
        response.status(404).send(`Unfortunatley no prediction with id ${id} was found`);
    }
});

app.post('/predictions', (request, response) => {
    let newPrediction = request.body;
    newPrediction.id = parseInt(predictions[predictions.length - 1].id) + 1;
    predictions.push(newPrediction);

    writePrediction(predictions);
    response.setHeader('Content-Type', 'application/json');
    response.send(newPrediction);
});

app.delete('/predictions/:id', (request, response) => {
    let id = request.params.id;
    let deletedPrediction;

    predictions.forEach((prediction, index) => {
        if (parseInt(id) === prediction.id) {
            deletedPrediction = prediction;
            predictions.splice(index, 1);
        }
    });

    writePrediction(predictions);

    if (deletedPrediction) {
        response.setHeader('Content-Type', 'application/json');
        response.send(deletedPrediction);
    } else {
        response.status(404).send(`Unfortunatley no prediction with id ${id} was found`);
    }
});

writePrediction = function(predictions) {
    fs.writeFileSync('./rest/predictions.json', JSON.stringify({predictions: predictions}));
}

app.listen(3004, () => console.log('Server is up and running'));
