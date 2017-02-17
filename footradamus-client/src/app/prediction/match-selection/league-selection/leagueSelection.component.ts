/**
 * Created by kevinkreuzer on 07.12.16.
 */

import {Component, Output, EventEmitter} from "@angular/core";
import MatchSelectionService from "../matchSelection.service";
import league from "../../../shared/model/league.model";
import LeagueLogoService from "../../logos/leagues/leagueLogos.service";

@Component({
  selector: 'league-selection',
  templateUrl: 'leagueSelection.html',
  styleUrls: ['leagueSelection.css']
})
export default class LeagueSelectionComponent {

  private leagues: Array<league> = [];
  private counter: number = 0;
  @Output() onLeagueChange = new EventEmitter<league>();

  constructor(private matchSelectionService: MatchSelectionService, private leagueLogoService: LeagueLogoService) {
    this.matchSelectionService.getLeagues()
      .subscribe((res: Array<league>) => {
          this.leagues = res;
      });
  }

  public getPreviousLeague(): void {
    this.counter === 0 ? this.counter = this.leagues.length - 1 : this.counter--;
    this.onLeagueChange.emit(this.leagues[this.counter]);
  }

  public getNextLeague(): void {
    this.counter === this.leagues.length - 1 ? this.counter = 0 : this.counter++;
    this.onLeagueChange.emit(this.leagues[this.counter]);
  }
}
