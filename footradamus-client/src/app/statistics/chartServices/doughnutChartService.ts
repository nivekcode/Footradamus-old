import ChartService from "./chartService.interface";
import chartOptions from "../shared/chartOptions.model";
import predictionStatistics from "../../shared/model/predictionStatistics.model";
/**
 * Created by kevinkreuzer on 11.01.17.
 */

export default class DoughnutChartService implements ChartService {

  private readonly CHART_LABELS: string[] = ['False Predictions', 'Correct Predictions'];
  public doughnutChartData: number[] = [];

  getChartProperties(predictionStatistics: predictionStatistics): chartOptions {
    return {
      labels: this.CHART_LABELS,
      data: this._createChartData(predictionStatistics)
    };
  }

  private _createChartData(predictionStats: predictionStatistics){
    return [
      predictionStats.totalFalsePredictions,
      predictionStats.totalCorrectPredictions
    ];
  }
}
