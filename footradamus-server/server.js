let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let predictionsJSON = require('./predictions.json');

let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/predictions', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.send(predictionsJSON.predictions);
});

app.put('/predictions/:id', (request, response) => {
    let updatedPrediction = request.body;
    let id = request.params.id;

    predictionsJSON.predictions.forEach((predcition, index) => {
      if(parseInt(id) === predcition.id){
        let predictionToUpdate = predictionsJSON.predictions[index];
        predictionsJSON.predictions[index] = Object.assign({}, predictionToUpdate, updatedPrediction);
      }
    });

    fs.writeFileSync('./predictions.json', JSON.stringify({predictions: predictionsJSON.predictions}));
    response.send('Update Successfull');
});

app.listen(3004, () => console.log('Server is up and running'));
