let express = require('express');
let predictions = require('./predictions.json');
let app = express();

app.get('/predictions', (request, resposne) => {
  resposne.send(predictions);
});

app.listen(3004, () => console.log('Server is up and running'));
