/**
 * Created by kevinkreuzer on 11.01.17.
 */

import ChartService from "./chartService.interface";
import predictionStatistics from "../../shared/model/predictionStatistics.model";
import chartOptions from "../shared/chartOptions.model";

export default class BarChartService implements ChartService {

  private readonly CHART_LABELS = ['Premier League', 'Bundesliga', 'Primera División'];
  private readonly CORRECT_PREDICTION_LABEL = 'Correct Predictions';
  private readonly FALSE_PREDICTION_LABEL = 'False Predictions';
  private readonly HAS_LEGEND: boolean = true;
  private readonly BARCHART_OPTIONS: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1,
        }
      }]
    }
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
      labels: this.CHART_LABELS,
      data: this._getChartData(predictionStatistics),
      options: this.BARCHART_OPTIONS,
      legend: this.HAS_LEGEND,
      chartColors: this.chartColors
    };
  }

  private _getChartData(predictionStatistics: predictionStatistics) {
    let chartData: Array<any> = [];
    let correctPredictionsBarsData = {data: [], label: this.CORRECT_PREDICTION_LABEL};
    let falsePredictionsBarsData = {data: [], label: this.FALSE_PREDICTION_LABEL};

    this.CHART_LABELS.forEach(league => {
      let stats = predictionStatistics.statisticsPerLeague.filter(statistics => statistics.leagueName === league);
      if (stats.length === 0) {
        correctPredictionsBarsData.data.push(0);
        falsePredictionsBarsData.data.push(0);
      }
      else {
        stats.forEach(statistic => {
          correctPredictionsBarsData.data.push(statistic.totalCorrectPredictions);
          falsePredictionsBarsData.data.push(statistic.totalFalsePredictions);
        });
      }
    })
    chartData.push(correctPredictionsBarsData);
    chartData.push(falsePredictionsBarsData);
    return chartData;
  }
}
