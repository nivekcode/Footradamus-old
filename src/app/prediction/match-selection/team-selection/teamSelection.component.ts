/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Component, Input} from "@angular/core";
import TeamSelectionService from "./teamSelection.service";
import ChangeDirection from "../../../model/changeDirection.model";
import {Store} from "@ngrx/store";
import match from "../../../model/match.model";
import {ADD_HOMETEAM, ADD_AWAYTEAM} from "../../../reducers/match.reducer";

@Component({
  selector: 'team-selection',
  templateUrl: 'teamSelection.html',
})
export default class TeamSelectionComponent {

  private counter: number = 0;
  @Input() isHometeam: boolean;

  constructor(private teamSelectionService: TeamSelectionService, private store: Store<match>) {
  }

  changeClub(changeDirection: ChangeDirection) {
    switch (changeDirection) {
      case ChangeDirection.NEXT:
        this.counter === this.teamSelectionService.teams.length - 1 ? this.counter = 0 : this.counter++;
        this._addMatchToStore();
        break;
      case ChangeDirection.PREVIOUS:
        this.counter === 0 ? this.counter = this.teamSelectionService.teams.length - 1 : this.counter--;
        this._addMatchToStore();
        break;
    }
  }

  _addMatchToStore() {
    let actionType = this.isHometeam ? ADD_HOMETEAM : ADD_AWAYTEAM;
    let team = this.teamSelectionService.teams[this.counter];
    this.store.dispatch({type: actionType, payload: team});
  }
}
