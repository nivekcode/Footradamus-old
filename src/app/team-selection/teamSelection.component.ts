/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Component} from "@angular/core";
import TeamSelectionService from "./teamSelection.service";
import ChangeDirection from "../model/changeDirection.model";

@Component({
  selector: 'team-selection',
  templateUrl: './teamSelection.html',
})
export default class TeamSelectionComponent{

  private counter: number = 0;

  constructor(private teamSelectionService: TeamSelectionService){
  }

  changeClub(changeDirection: ChangeDirection){
    switch (changeDirection){
      case ChangeDirection.NEXT:
        this.counter === this.teamSelectionService.teams.length-1 ? this.counter = 0 : this.counter++;
        break;
      case ChangeDirection.PREVIOUS:
        this.counter === 0 ? this.counter = this.teamSelectionService.teams.length-1 : this.counter--;
        break;
    }
  }
}
