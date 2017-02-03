let express = require('express');
let app = express();

app.get('/predictions', (request, resposne) => {
  resposne.send('Hello world');
});

app.listen(3004, () => console.log('Server is up and running'));
