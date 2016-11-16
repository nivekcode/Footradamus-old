/**
 * Created by kevinkreuzer on 16.11.16.
 */

import {NgModule} from "@angular/core";
import PredictionComponent from "./prediction.component";
import MatchSelectionModule from "./match-selection/matchSelection.module";
@NgModule({
  declarations: [PredictionComponent],
  imports: [MatchSelectionModule],
  exports: [PredictionComponent]
})
export default class PredictionModule{}
