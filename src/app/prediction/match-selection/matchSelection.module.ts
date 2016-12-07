/**
 * Created by kevinkreuzer on 13.11.16.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import MatchSelectionComponent from "./matchSelection.component";
import TeamSelectionComponent from "./team-selection/teamSelection.component";
import SelectorComponent from "./team-selection/team-selector/teamSelector.component";
import ClubLogoComponent from "./team-selection/club-logo/clubLogo.component";
import TeamSelectionService from "./team-selection/teamSelection.service";
import LeagueSelectionComponent from "./team-selection/league-selection/leagueSelection.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MatchSelectionComponent, TeamSelectionComponent, SelectorComponent, ClubLogoComponent, LeagueSelectionComponent],
  exports: [MatchSelectionComponent],
  providers: [TeamSelectionService]
})
export default class MatchSelectionModule{
}
