/**
 * Created by kevinkreuzer on 09.01.17.
 */

import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import prediction from "../model/prediction.model";

@Injectable()
export default class StatisticsService {

  constructor(private http: Http, @Inject('config') private config) {
  }

  getStatistics() {
    this._getStoredPredictions()
      .subscribe((predictions: Array<prediction>) => {
        predictions.forEach((prediction: prediction) => {
          this._getMatchStatistics(prediction)
            .subscribe(matchStatistics => {
              console.log('MatchStatistics', matchStatistics);
            })
        })
      });
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
