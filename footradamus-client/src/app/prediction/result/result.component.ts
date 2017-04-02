/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Component} from "@angular/core";
import PredictionService from "../shared/service/prediction.service";
import ClubLogoService from "../shared/service/logo.service";
import {Store} from "@ngrx/store";
import match from "../../shared/model/match.model";
import {NO_WINNER} from '../shared/model/results.model';

@Component({
    selector: 'result',
    templateUrl: 'result.html',
    styleUrls: ['result.css']
})
export default class ResultComponent {

    imageUrl: string = null;
    winningTeam: string = null;

    constructor(private predictionService: PredictionService, private logoService: ClubLogoService,
                private store: Store<match>) {
        let leagueId: string = null;

        this.store.select('match').subscribe((match: match) => {
            leagueId = match.leagueId;
        })

        predictionService.$winner.subscribe((winner) => {
            this.winningTeam = winner;
            if (winner === NO_WINNER) {
                this.imageUrl = this.logoService.getDrawImage();
            }
            else {
                this.imageUrl = this.logoService.getLogo(leagueId, winner);
            }
        })
    }
}
