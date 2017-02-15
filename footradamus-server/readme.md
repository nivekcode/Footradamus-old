- MongoImpot

mongoimport --db footradamus --collection predictions --drop --file predictions-db.json

- Push Subtree to heroku
git subtree push --prefix footradamus-server heroku master
