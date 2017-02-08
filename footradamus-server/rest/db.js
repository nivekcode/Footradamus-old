let uri = 'mongodb://localhost:27017/footradamus';
let mongoClient = require('mongodb').MongoClient;

let findPredictions = function(db, callback) {
    let cursor = db.collection('predictions').find();
    cursor.each((err, doc) => {
        if (doc != null) {
            console.log(doc);
        } else {
            callback();
        }
    })
}

mongoClient.connect(uri, (err, db) => {
  findPredictions(db, () => {
    db.close();
  });
});
