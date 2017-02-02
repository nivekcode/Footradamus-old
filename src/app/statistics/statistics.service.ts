/**
 * Created by kevinkreuzer on 09.01.17.
 */

import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import prediction from "../model/prediction.model";
import predictionStatistics from "../model/predictionStatistics.model";
import {Subject} from "rxjs";
import {leaguePredictions} from "../model/predictionStatistics.model";
import predictionCache from './shared/predictionCache.model';

@Injectable()
export default class StatisticsService {

  private predictionStatistics: predictionStatistics;
  private $statistics: Subject<predictionStatistics> = new Subject<predictionStatistics>();

  constructor(private http: Http, @Inject('config') private config) {
    this.predictionStatistics = {
      totalCorrectPredictions: 0,
      totalFalsePredictions: 0,
      statisticsPerLeague: []
    };
  }

  getStatistics() {
    //TODO kk: RXJS Operatoren verwenden
    this._getPredictionCache()
      .subscribe((alreadyPredictedGames: Array<number>) => {
        this._getStoredPredictions()
          .subscribe((predictions: Array<prediction>) => {
            predictions.forEach((prediction: prediction) => {
              if(!alreadyPredictedGames.includes(prediction.id)){
              this._getMatchStatistics(prediction)
                .subscribe(matchStatistics => {
                  this._calculateStats(prediction, matchStatistics[0]);
                  this.$statistics.next(this.predictionStatistics);
                })
              }
            })
          });
      });
    return this.$statistics;
  }

  private _getPredictionCache() {
    return this.http.get(`${this.config.predictionBackendUrl}/predictionCache`)
      .map(res => res.json())
      .map((predictionCache: predictionCache) => predictionCache.alreadyPredictedMatches);
  }

  private _calculateStats(prediction: prediction, matchStatistics) {
    let actualWinner = this._getWinningTeam(matchStatistics);
    let wasPredictionCorrect = this._wasPredictionCorrect(prediction.winner, actualWinner);
    this._calculateTotals(wasPredictionCorrect, this.predictionStatistics);
    this._calculateLeagueStats(prediction, wasPredictionCorrect);
  }

  private _calculateLeagueStats(prediction: prediction, wasPredictionCorrect: boolean) {
    let leaguePredStats = this.predictionStatistics.statisticsPerLeague.find((stat: leaguePredictions) => stat.leagueId === prediction.leagueID);

    if (!leaguePredStats) {
      leaguePredStats = {
        leagueId: prediction.leagueID,
        leagueName: prediction.leagueName,
        totalCorrectPredictions: 0,
        totalFalsePredictions: 0
      }
      this.predictionStatistics.statisticsPerLeague.push(leaguePredStats);
    }
    this._calculateTotals(wasPredictionCorrect, leaguePredStats);
  }

  private _calculateTotals(wasPredictionCorrect: boolean, stats) {
    if (wasPredictionCorrect) {
      stats.totalCorrectPredictions++;
    }
    else {
      stats.totalFalsePredictions++;
    }
  }

  private _getWinningTeam(matchStatistics) {
    let homeTeamScore: number = parseInt(matchStatistics.localteam_score);
    let awayTeamScore: number = parseInt(matchStatistics.visitorteam_score);

    if (awayTeamScore > homeTeamScore) {
      return matchStatistics.localteam_name;
    }
    else {
      return matchStatistics.visitorteam_name;
    }
  }

  private _wasPredictionCorrect(predictedWinner, actualWinner) {
    return predictedWinner.toLowerCase() === actualWinner.toLowerCase();
  }

  private _getStoredPredictions() {
    return this.http.get(`${this.config.predictionBackendUrl}/predictions`)
      .map(res => res.json());
  }

  private _getMatchStatistics(prediction: prediction) {
    console.log('Get Match stats');
    return this.http.get(`${this.config.backendUrl}matches?comp_id=${prediction.leagueID}&team_id=${prediction.homeTeamId}&match_date=${prediction.matchDate}&${this.config.authParam}`)
      .map(res => res.json());
  }
}
