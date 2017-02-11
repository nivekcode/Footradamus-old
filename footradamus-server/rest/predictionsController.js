let express = require('express');
let bodyParser = require('body-parser');
let cors = require('express-cors');
let fs = require('fs');
let predictionsModel = require('../db/db.js').Predictions;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
    allowedOrigins: [
        'localhost:4200'
    ]
}));

app.get('/predictions', (request, response) => {
  predictionsModel.find({}, (error, predictions) => {
    response.setHeader('Content-Type', 'application/json');
    response.send(predictions);
  });
});

app.put('/predictions/:id', (request, response) => {
    let id = request.params.id;
    response.setHeader('Content-Type', 'application/json');
    predictionsModel.findOneAndUpdate({_id: id}, request.body, (error, prediciton) => {
      if (!error) {
          response.send(request.body);
      } else {
          response.status(404).send(error);
      }
    });
});

app.post('/predictions', (request, response) => {
    let newPrediction = request.body;
    predictionsModel.create(newPrediction);
    response.setHeader('Content-Type', 'application/json');
    response.send(newPrediction);
});

app.delete('/predictions/:id', (request, response) => {
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

app.patch('/predictions/', (request, response) => {

    let predictions = request.body;
    let updatedPredictions = [];
    response.setHeader('Content-Type', 'application/json');

    predictions.forEach(prediction => {
      predictionsModel.findOneAndUpdate({_id: prediction._id}, prediction, (error, updatedPrediction) => {
        if(!error){
          updatedPredictions.push(updatedPrediction);
          response.send(updatedPredictions);
        }
        else{
          response.status(404).send(error);
        }
      });
    });
});

app.listen(3004, () => console.log('Server is up and running'));
