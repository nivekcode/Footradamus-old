/**
 * Created by kevinkreuzer on 16.11.16.
 */

import {Injectable} from "@angular/core";
import StatisticService from "./statstics.service";

@Injectable()
export default class PredictionService {

  constructor(private statsService: StatisticService) {
    this.statsService.$stats
      .subscribe(stats => console.log('Die Statistiken beider Teams', stats),
        (error) => {
          console.log('Error');
        });
  }
}
