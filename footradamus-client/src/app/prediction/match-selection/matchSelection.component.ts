/**
 * Created by kevinkreuzer on 13.11.16.
 */
import {Component, ViewChild, ViewChildren} from "@angular/core";
import StatisticService from "../statstics.service";
import TeamSelectionComponent from "./team-selection/teamSelection.component";

@Component({
  selector: 'match-selection',
  templateUrl: 'matchSelection.html'
})
export default class MatchSelectionComponent {

  @ViewChildren(TeamSelectionComponent)
  private teamSelectionComponents: Array<TeamSelectionComponent>;

  constructor(private statisticService: StatisticService) {
  }

  loadClubsOnTeamSelection(league) {
    this.teamSelectionComponents.forEach((teamSelectionComponent: TeamSelectionComponent) => {
      teamSelectionComponent.loadClubsForLeague(league);
    });
  }
}
