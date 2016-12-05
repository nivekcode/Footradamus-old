/**
 * Created by kevinkreuzer on 05.12.16.
 */
import {NgModule} from "@angular/core";
import ResultComponent from "./result.component";
import WinnerLogoComponent from "./winner-logo/winnerLogo.component";

@NgModule({
  declarations: [ResultComponent, WinnerLogoComponent],
  exports: [ResultComponent]
})
export default class ResultModule {
}
