/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Component, Input, OnInit} from "@angular/core";
import TeamSelectionService from "./teamSelection.service";
import ChangeDirection from "../../../model/changeDirection.model";
import {Store} from "@ngrx/store";
import match from "../../../model/match.model";
import {ADD_HOMETEAM, ADD_AWAYTEAM} from "../../../reducers/match.reducer";
import team from "../../../model/team.model";

@Component({
  selector: 'team-selection',
  templateUrl: 'teamSelection.html',
  styleUrls: ['teamSelection.css']
})
export default class TeamSelectionComponent implements OnInit{

  private counter: number = 0;
  private teams: Array<team> = [];
  @Input() isHometeam: boolean;

  constructor(private teamSelectionService: TeamSelectionService, private store: Store<match>) {
  }

  ngOnInit(): void {
    this.teamSelectionService.getTeams()
      .subscribe((res: Array<team>) => {
        this.teams = res;
        if(!this.isHometeam){
          this.counter++;
        }
        this._addMatchToStore();
      })
  }

  changeClub(changeDirection: ChangeDirection) {
    switch (changeDirection) {
      case ChangeDirection.NEXT:
        this.counter === this.teams.length - 1 ? this.counter = 0 : this.counter++;
        this._addMatchToStore();
        break;
      case ChangeDirection.PREVIOUS:
        this.counter === 0 ? this.counter = this.teams.length - 1 : this.counter--;
        this._addMatchToStore();
        break;
    }
  }

  _addMatchToStore() {
    let actionType = this.isHometeam ? ADD_HOMETEAM : ADD_AWAYTEAM;
    let team = this.teams[this.counter];
    this.store.dispatch({type: actionType, payload: team});
  }
}
