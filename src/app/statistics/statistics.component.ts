/**
 * Created by kevinkreuzer on 19.12.16.
 */

import {Component} from "@angular/core";
import StatisticsService from "./statistics.service";
import predictionStatistics from "../model/predictionStatistics.model";

@Component({
  selector: 'statistics',
  templateUrl: './statistics.html'
})
export default class StatisticsComponent {

  // Doughnut
  public doughnutChartLabels:string[] = ['Correct Predictions', 'False Predictions'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';

  constructor(private statisticsService: StatisticsService){
    this.statisticsService.getStatistics()
      .subscribe((predictionStats: predictionStatistics) => {
        console.log('This are the stats', predictionStats);
        this.doughnutChartData = [
          predictionStats.totalCorrectPredictions,
          predictionStats.totalFalsePredictions
        ];
      })
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
