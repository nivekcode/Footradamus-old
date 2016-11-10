/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {NgModule} from "@angular/core";
import TeamSelectionComponent from "./teamSelection.component";
import TeamSelectionService from "./teamSelection.service";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [TeamSelectionComponent],
  exports: [TeamSelectionComponent],
  providers: [TeamSelectionService]
})
export default class TeamSelectionModule{}
