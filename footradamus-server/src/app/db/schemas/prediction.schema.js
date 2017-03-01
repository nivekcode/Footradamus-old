/**
 * Created by kevinkreuzer on 01.03.17.
 */
let mongoose = require('mongoose');

let predictionSchema = mongoose.Schema({
    leagueID: String,
    leagueName: String,
    homeTeam: String,
    homeTeamId: String,
    awayTeam: String,
    awayTeamId: String,
    winner: String,
    matchDate: String,
    predictionHistory: {
        correctlyPredicted: Boolean
    }
});

exports.Predictions = mongoose.model('Prediction', predictionSchema);