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

@NgModule({
  declarations: [PredictionComponent],
  imports: [MatchSelectionModule, ResultModule, LogosServiceModule],
  exports: [PredictionComponent],
  providers: [PredictionService, StatisticService]
})
export default class PredictionModule{}
