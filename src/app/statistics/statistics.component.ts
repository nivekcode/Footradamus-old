/**
 * Created by kevinkreuzer on 19.12.16.
 */

import {Component} from "@angular/core";
import StatisticsService from "./statistics.service";
import predictionStatistics from "../model/predictionStatistics.model";
import chartOptions from "./shared/chartOptions.model";
import DoughnutChartService from "./chartServices/doughnutChartService";
import BarChartService from "./chartServices/barChartService";

@Component({
  selector: 'statistics',
  templateUrl: './statistics.html'
})
export default class StatisticsComponent {

  public readonly DOUGHNUT_CHART_TYPE = 'doughnut';
  public readonly BAR_CHART_TYPE = 'bar';
  public doughnutChartData: chartOptions;
  public barChartData: chartOptions;
  public hasDataArrived: boolean;

  constructor(private statisticsService: StatisticsService,
              private doughnutChartService: DoughnutChartService,
              private barChartService: BarChartService) {

    this.hasDataArrived = false;

    this.statisticsService.getStatistics()
      .subscribe((predictionStats: predictionStatistics) => {
        this.doughnutChartData = this.doughnutChartService.getChartProperties(predictionStats);
        this.barChartData = this.barChartService.getChartProperties(predictionStats);
        this.hasDataArrived = true;
      });
  }
}
