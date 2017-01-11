/**
 * Created by kevinkreuzer on 19.12.16.
 */

import {Component} from "@angular/core";
import StatisticsService from "./statistics.service";
import predictionStatistics from "../model/predictionStatistics.model";
import chartOptions from "./shared/chartOptions.model";
import DoughnutChartService from "./chartServices/doughnutChartService";

@Component({
  selector: 'statistics',
  templateUrl: './statistics.html'
})
export default class StatisticsComponent {

  public readonly DOUGHNUT_CHART_TYPE = 'doughnut';
  public doughnutChartData: chartOptions;

  constructor(private statisticsService: StatisticsService,
              private doughnutChartService: DoughnutChartService) {

    this.doughnutChartData = this._initializeChartOptions();
    this.statisticsService.getStatistics()
      .subscribe((predictionStats: predictionStatistics) => {
        this.doughnutChartData = this.doughnutChartService.getChartProperties(predictionStats);
      })
  }

  private _initializeChartOptions(): chartOptions {
    return {
      labels: [],
      data: []
    };
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
