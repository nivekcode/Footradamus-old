/**
 * Created by kevinkreuzer on 19.12.16.
 */

import {Component} from "@angular/core";
import StatisticsService from "./statistics.service";
import predictionStatistics from "../shared/model/predictionStatistics.model";
import chartOptions from "./shared/chartOptions.model";
import DoughnutChartService from "./chartServices/doughnutChartService";
import BarChartService from "./chartServices/barChartService";
import DeviceDetector from "../shared/deviceDetector/deviceDetector.service";

@Component({
  selector: 'statistics',
  templateUrl: './statistics.html'
})
export default class StatisticsComponent {

  public readonly DOUGHNUT_CHART_TYPE = 'doughnut';
  public readonly BAR_CHART_TYPE = 'bar';
  protected doughnutChartData: chartOptions;
  protected barChartData: chartOptions;
  protected correctPredictionPercentage;
  protected hasDataArrived: boolean;
  protected isMobileDevice: boolean;

  constructor(private statisticsService: StatisticsService,
              private doughnutChartService: DoughnutChartService,
              private barChartService: BarChartService,
              public deviceDetector: DeviceDetector) {
    this.hasDataArrived = false;

    this.deviceDetector.isMobileDevice()
        .subscribe(isMobileDevice => this.isMobileDevice = isMobileDevice);

    this.statisticsService.getStatistics()
      .subscribe((predictionStats: predictionStatistics) => {
        this.doughnutChartData = this.doughnutChartService.getChartProperties(predictionStats);
        this.barChartData = this.barChartService.getChartProperties(predictionStats);
        this.correctPredictionPercentage = this.statisticsService.getCorretPredictionPercentage(this.doughnutChartData);
        this.hasDataArrived = true;
      });
  }

}
