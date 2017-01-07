/**
 * Created by kevinkreuzer on 13.11.16.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import MatchSelectionComponent from "./matchSelection.component";
import TeamSelectionComponent from "./team-selection/teamSelection.component";
import SelectorComponent from "./team-selection/team-selector/teamSelector.component";
import ClubLogoComponent from "./team-selection/club-logo/clubLogo.component";
import MatchSelectionService from "./matchSelection.service";
import LeagueSelectionComponent from "./league-selection/leagueSelection.component";

@NgModule({
  imports: [CommonModule],
  declarations: [MatchSelectionComponent, TeamSelectionComponent, SelectorComponent, ClubLogoComponent, LeagueSelectionComponent],
  exports: [MatchSelectionComponent],
  providers: [MatchSelectionService]
})
export default class MatchSelectionModule{
}
