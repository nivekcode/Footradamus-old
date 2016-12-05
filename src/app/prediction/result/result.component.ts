/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Component} from "@angular/core";
import PredictionService from "../prediction.service";

@Component({
  selector: 'result',
  templateUrl: 'result.html',
  styleUrls: ['result.css']
})
export default class ResultComponent {

  imageUrl: string = null;

  constructor(private predictionService: PredictionService){
     predictionService.$winner.subscribe((winningTeam) => {
       console.log('And the winner is', winningTeam);
     })
  }
}
