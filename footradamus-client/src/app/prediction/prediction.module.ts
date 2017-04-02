/**
 * Created by kevinkreuzer on 16.11.16.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePickerModule} from 'ng2-datepicker';
import {FormsModule} from '@angular/forms';

import PredictionComponent from './prediction.component';
import PredictionService from './shared/service/prediction.service';
import StatisticService from './shared/service/statstics.service';
import predictionRoutes from './prediction.routes';
import ResultComponent from './result/result.component';
import SubmitComponent from './result/submit/submitPrediction.component';
import WinnerLogoComponent from './result/winner-logo/winnerLogo.component';
import LeagueSelectionComponent from './match-selection/league-selection/leagueSelection.component';
import ClubLogoComponent from './match-selection/team-selection/club-logo/clubLogo.component';
import SelectorComponent from './match-selection/team-selection/team-selector/teamSelector.component';
import TeamSelectionComponent from './match-selection/team-selection/teamSelection.component';
import MatchSelectionComponent from './match-selection/matchSelection.component';
import MatchSelectionService from './match-selection/shared/matchSelection.service';
import LogoService from './shared/service/logo.service';

@NgModule({
  declarations: [
    PredictionComponent,
    ResultComponent,
    WinnerLogoComponent,
    SubmitComponent,
    MatchSelectionComponent,
    TeamSelectionComponent,
    SelectorComponent,
    ClubLogoComponent,
    LeagueSelectionComponent
  ],
  imports: [
    predictionRoutes,
    CommonModule,
    FormsModule,
    DatePickerModule
  ],
  exports: [PredictionComponent],
  providers: [
    PredictionService,
    StatisticService,
    MatchSelectionService,
    LogoService
  ]
})
export default class PredictionModule {
}
