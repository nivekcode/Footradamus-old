/**
 * Created by kevinkreuzer on 07.12.16.
 */

import {Component} from "@angular/core";
import TeamSelectionService from "../teamSelection.service";
import league from "../../../../model/league.model";

@Component({
  selector: 'league-selection',
  templateUrl: 'leagueSelection.html',
  styleUrls: ['leagueSelection.css']
})
export default class LeagueSelectionComponent {

  private leagues: Array<league> = [];
  private counter: number = 0;

  constructor(private teamSelectionService: TeamSelectionService){
    this.teamSelectionService.getLeagues()
      .subscribe((res: Array<league>) => {
        this.leagues = res;
      });
  }
}
