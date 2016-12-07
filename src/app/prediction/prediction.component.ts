/**
 * Created by kevinkreuzer on 16.11.16.
 */

import {Component} from "@angular/core";
import StatisticService from "./statstics.service";

@Component({
  selector: 'prediction',
  templateUrl: './prediction.html'
})
export default class PredictionComponent{

  //TODO kk: Remove predictionservice because it does not belonge here
  constructor(private statisticService: StatisticService){
  }
}
