/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Component} from "@angular/core";
import PredictionService from "../prediction.service";
import LogoService from "../logos/logoDispatcher.service";

@Component({
  selector: 'result',
  templateUrl: 'result.html',
  styleUrls: ['result.css']
})
export default class ResultComponent {

  imageUrl: string = null;

  constructor(private predictionService: PredictionService, private logoService: LogoService){
     predictionService.$winner.subscribe((winningTeam) => {
       this.imageUrl = this.logoService.getLogo(1204, winningTeam);
     })
  }
}
