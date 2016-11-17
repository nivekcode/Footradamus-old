/**
 * Created by kevinkreuzer on 16.11.16.
 */

import {NgModule} from "@angular/core";
import PredictionComponent from "./prediction.component";
import MatchSelectionModule from "./match-selection/matchSelection.module";
import PredictionService from "./prediction.service";
@NgModule({
  declarations: [PredictionComponent],
  imports: [MatchSelectionModule],
  exports: [PredictionComponent],
  providers: [PredictionService]
})
export default class PredictionModule{}
