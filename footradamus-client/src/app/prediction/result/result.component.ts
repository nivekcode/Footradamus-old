/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Component} from "@angular/core";
import PredictionService from "../prediction.service";
import LogoService from "../logos/clubs/logoDispatcher.service";
import {Store} from "@ngrx/store";
import match from "../../model/match.model";

@Component({
  selector: 'result',
  templateUrl: 'result.html',
  styleUrls: ['result.css']
})
export default class ResultComponent {

  imageUrl: string = null;
  winningTeam: string = null;

  constructor(private predictionService: PredictionService, private logoService: LogoService,
              private store: Store<match>) {
    let leagueId: string = null;

    this.store.select('match').subscribe((match: match) => {
      leagueId = match.leagueId;
    })

    predictionService.$winner.subscribe((winningTeam) => {
      this.winningTeam = winningTeam;
      this.imageUrl = this.logoService.getLogo(leagueId, winningTeam);
    })
  }
}
