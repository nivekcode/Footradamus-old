/**
 * Created by kevinkreuzer on 15.03.17.
 */
import {Component} from "@angular/core";
import PredictionListService from "../shared/service/predictionList.service";
import {Observable} from "rxjs";
import predictionTableEntry from "../shared/model/predictionTableEntry.model";

@Component({
  selector: 'mobile-list',
  templateUrl: './mobileList.html'
})
export class MobileListComponent{

  protected $predictionTableEntrys: Observable<Array<predictionTableEntry>>;

  constructor(protected predictionListService: PredictionListService){
    this.$predictionTableEntrys = this.predictionListService.getPredictionTableData();
  }
}
