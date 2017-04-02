/**
 * Created by kevinkreuzer on 13.11.16.
 */
import {Component, ViewChild, ViewChildren} from "@angular/core";
import StatisticService from "../shared/service/statstics.service";
import TeamSelectionComponent from "./team-selection/teamSelection.component";

@Component({
  selector: 'match-selection',
  templateUrl: 'matchSelection.html',
  styleUrls: ['./matchSelection.css']
})
export default class MatchSelectionComponent {

  @ViewChildren(TeamSelectionComponent)
  private teamSelectionComponents: Array<TeamSelectionComponent>;

  constructor() {
  }

  loadClubsOnTeamSelection(league) {
    this.teamSelectionComponents.forEach((teamSelectionComponent: TeamSelectionComponent) => {
      teamSelectionComponent.loadClubsForLeague(league);
    });
  }
}
