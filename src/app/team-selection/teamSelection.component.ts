/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Component} from "@angular/core";
import TeamSelectionService from "./teamSelection.service";

@Component({
  selector: 'team-selection',
  templateUrl: './teamSelection.html'
})
export default class TeamSelectionComponent{

  constructor(private teamSelectionService: TeamSelectionService){
  }
}
