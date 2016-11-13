/**
 * Created by kevinkreuzer on 13.11.16.
 */
import {NgModule} from "@angular/core";
import TeamSelectionModule from "../team-selection/teamSelection.module";
import MatchSelectionComponent from "./matchSelection.component";

@NgModule({
  imports: [TeamSelectionModule],
  declarations: [MatchSelectionComponent],
  exports: [MatchSelectionComponent]
})
export default class MatchSelectionModule{
}
