/**
 * Created by kevinkreuzer on 16.11.16.
 */

import {Injectable} from "@angular/core";
import StatisticService from "./statstics.service";

@Injectable()
export default class PredictionService {

  constructor(private statsService: StatisticService) {
    this.statsService.$stats
      .subscribe(stats => {
          let homeTeamStats = stats[0].json().statistics;
          let awayTeamStats = stats[1].json().statistics;

          console.log('HomeTeamStats', homeTeamStats);
          console.log('AwayTeamStats', awayTeamStats);
        },
          (error) => {
            console.log('Unfortunatelly we were not able to get the team statistics');
          }
      );
  }
}
