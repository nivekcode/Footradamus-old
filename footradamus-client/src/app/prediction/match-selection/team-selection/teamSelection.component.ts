/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Component, Input, OnInit} from "@angular/core";
import ChangeDirection from "../../../shared/model/changeDirection.model";
import {Store} from "@ngrx/store";
import match from "../../../shared/model/match.model";
import {ADD_HOMETEAM, ADD_AWAYTEAM} from "../../../reducers/match.reducer";
import team from "../../../shared/model/team.model";
import league from "../../../shared/model/league.model";
import MatchSelectionService from "../shared/matchSelection.service";

@Component({
  selector: 'team-selection',
  templateUrl: 'teamSelection.html',
  styleUrls: ['teamSelection.css']
})
export default class TeamSelectionComponent implements OnInit {

  private counter: number = 0;
  private teams: Array<team> = [];
  @Input() isHometeam: boolean;
  private league: league = null;

  constructor(private matchSelectionService: MatchSelectionService, private store: Store<match>) {
  }

  ngOnInit(): void {
    this.matchSelectionService.getLeagues()
      .subscribe(leagues => {
        this.league = leagues[0]; //Initial League
        this.matchSelectionService.getTeams(this.league.id)
          .subscribe((res: Array<team>) => {
            this.teams = res;
            if (!this.isHometeam) {
              this.counter++;
            }
            this._addMatchToStore();
          });
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

  loadClubsForLeague(league: league) {
    this.league = league;
    this.matchSelectionService.getTeams(league.id)
      .subscribe(res => {
        this.teams = res;
        this._addMatchToStore();
      });
  }

  _addMatchToStore() {
    let actionType = this.isHometeam ? ADD_HOMETEAM : ADD_AWAYTEAM;
    let team = this.teams[this.counter];
    this.store.dispatch({
      type: actionType,
      payload: {
        team: team,
        leagueId: this.league.id,
        leagueName: this.league.name
      }
    });
  }
}
