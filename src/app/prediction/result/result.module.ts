/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {NgModule} from "@angular/core";
import ResultComponent from "./result.component";
import WinnerLogoComponent from "./winner-logo/winnerLogo.component";
import {CommonModule} from "@angular/common";
import SubmitComponent from "./submit/submitPrediction.component";

@NgModule({
  declarations: [ResultComponent, WinnerLogoComponent, SubmitComponent],
  exports: [ResultComponent],
  imports: [CommonModule]
})
export default class ResultModule {
}
