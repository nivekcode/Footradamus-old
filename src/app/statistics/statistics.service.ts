/**
 * Created by kevinkreuzer on 09.01.17.
 */

import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import prediction from "../model/prediction.model";
import predictionStatistics from "../model/predictionStatistics.model";
import {Subject} from "rxjs";

@Injectable()
export default class StatisticsService {

  private predictionStatistics: predictionStatistics;
  private $statistics: Subject<predictionStatistics> = new Subject<predictionStatistics>();

  constructor(private http: Http, @Inject('config') private config) {
    this.predictionStatistics = {
      predictedCorrectly: 0,
      predictedFalsy: 0
    };
  }

  getStatistics() {
    this._getStoredPredictions()
      .subscribe((predictions: Array<prediction>) => {
        predictions.forEach((prediction: prediction) => {
          this._getMatchStatistics(prediction)
            .subscribe(matchStatistics => {
              this._calculateStats(prediction, matchStatistics[0]);
              this.$statistics.next(this.predictionStatistics);
            })
        })
      });
    return this.$statistics;
  }

  private _calculateStats(prediction: prediction, matchStatistics){
    let actualWinner = this._getWinningTeam(matchStatistics);
    let wasPredictionCorrect = this._wasPredictionCorrect(prediction.winner, actualWinner);
    if(wasPredictionCorrect){
      this.predictionStatistics.predictedCorrectly++;
    }
    else{
      this.predictionStatistics.predictedFalsy++;
    }
  }

  private _getWinningTeam(matchStatistics){
    let homeTeamScore: number = parseInt(matchStatistics.localteam_score);
    let awayTeamScore: number = parseInt(matchStatistics.visitorteam_score);

    if(awayTeamScore > homeTeamScore){
      return matchStatistics.localteam_name;
    }
    else{
      return matchStatistics.visitorteam_name;
    }
  }

  private _wasPredictionCorrect(predictedWinner, actualWinner){
    return predictedWinner.toLowerCase() === actualWinner.toLowerCase();
  }

  private _getStoredPredictions() {
    return this.http.get(this.config.predictionBackendUrl)
      .map(res => res.json());
  }

  private _getMatchStatistics(prediction: prediction) {
    return this.http.get(`${this.config.backendUrl}matches?comp_id=${prediction.leagueID}&team_id=${prediction.homeTeamId}&match_date=${prediction.matchDate}`)
      .map(res => res.json());
  }
}
