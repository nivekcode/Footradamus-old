/**
 * Created by kevinkreuzer on 16.11.16.
 */
import {NgModule} from "@angular/core";
import PredictionComponent from "./prediction.component";
import MatchSelectionModule from "./match-selection/matchSelection.module";
import PredictionService from "./prediction.service";
import StatisticService from "./statstics.service";
import ResultModule from "./result/result.module";
import LogosServiceModule from "./logos/logos.module";
import predictionRoutes from './prediction.routes';

@NgModule({
  declarations: [PredictionComponent],
  imports: [MatchSelectionModule, ResultModule, LogosServiceModule, predictionRoutes],
  exports: [PredictionComponent],
  providers: [PredictionService, StatisticService]
})
export default class PredictionModule {
}
