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

  getChartProperties(predictionStatistics: predictionStatistics): chartOptions {
    return {
      labels: this._getLabels(predictionStatistics),
      data: this._getChartData(predictionStatistics),
      options: this.BARCHART_OPTIONS,
      legend: this.HAS_LEGEND
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
