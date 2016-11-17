/**
 * Created by kevinkreuzer on 13.11.16.
 */
import {Component} from "@angular/core";
import PredictionService from "../prediction.service";

@Component({
  selector: 'match-selection',
  templateUrl: 'matchSelection.html'
})
export default class MatchSelectionComponent{

  constructor(private predictionService: PredictionService){

  }

}
