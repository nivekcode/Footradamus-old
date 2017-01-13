/**
 * Created by kevinkreuzer on 11.01.17.
 */

import ChartService from "./chartService.interface";
import predictionStatistics from "../../model/predictionStatistics.model";
import chartOptions from "../shared/chartOptions.model";

export default class BarChartService implements ChartService{

  private readonly CORRECT_PREDICTION_LABEL = 'Correct Predictions';
  private readonly FALSE_PREDICTION_LABEL = 'False Predictions';
  private readonly HAS_LEGEND: boolean = true;
  private readonly BARCHART_OPTIONS: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartColors: Array<any> = [
    {
      backgroundColor: '#84C1E6',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: '#FE9EAD',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  getChartProperties(predictionStatistics: predictionStatistics): chartOptions {
    return {
      labels: this._getLabels(predictionStatistics),
      data: this._getChartData(predictionStatistics),
      options: this.BARCHART_OPTIONS,
      legend: this.HAS_LEGEND,
      chartColors: this.chartColors
    };
  }

  private _getChartData(predictionStatistics: predictionStatistics){
    let chartData: Array<any> = [];
    let correctPredictionsBarsData = {data: [], label: this.CORRECT_PREDICTION_LABEL};
    let falsePredictionsBarsData = {data: [], label: this.FALSE_PREDICTION_LABEL};

    predictionStatistics.statisticsPerLeague.forEach(statsPerLeague => {
      correctPredictionsBarsData.data.push(statsPerLeague.totalCorrectPredictions);
      falsePredictionsBarsData.data.push(statsPerLeague.totalFalsePredictions);
    });
    chartData.push(correctPredictionsBarsData);
    chartData.push(falsePredictionsBarsData);
    return chartData;
  }

  private _getLabels(predictionStatistics: predictionStatistics): Array<string>{
    let labels: Array<string> = [];
    predictionStatistics.statisticsPerLeague.forEach(statsPerLeague => {
      labels.push(statsPerLeague.leagueName);
    });
    return labels;
  }
}
