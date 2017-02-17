import predictionStatistics from "../../shared/model/predictionStatistics.model";
import chartOptions from "../shared/chartOptions.model";
/**
 * Created by kevinkreuzer on 11.01.17.
 */

interface ChartService{
  getChartProperties(predictionStatistics: predictionStatistics): chartOptions;
}

export default ChartService;
