/**
 * Created by kevinkreuzer on 22.01.17.
 */
import {Injectable, Inject} from "@angular/core";
import {Http, Headers} from "@angular/http";
import prediction from "../../../shared/model/prediction.model";
import predictionTableEntry from "../model/predictionTableEntry.model";
import {Observable} from "rxjs";
import LocalStorageService from "../../../shared/localStorage/localStorage.service";
import {predictionHistory} from "../../../shared/model/prediction.model";

@Injectable()
export default class PredictionListService {

  constructor(private http: Http, @Inject('config') private config, private localStorageService: LocalStorageService) {
  }

  public getPredictionTableData(): Observable<Array<predictionTableEntry>> {
    return this.http.get(`${this.config.predictionBackendUrl}predictions`)
      .map(res => res.json())
      .map((predictions: Array<prediction>) => this.createTableData(predictions));
  }

  private createTableData(predictions: Array<prediction>): Array<predictionTableEntry> {
    let tableData: Array<predictionTableEntry> = [];

    predictions.forEach((prediction: prediction) => {
      tableData.push({
        id: prediction._id,
        leagueName: prediction.leagueName,
        homeTeam: prediction.homeTeam,
        awayTeam: prediction.awayTeam,
        winner: prediction.winner,
        matchDate: prediction.matchDate,
        isPredicted: this.isGameAlreadyPredicted(prediction.predictionHistory),
        isCorrectlyPredicted: this.isGameCorrectlyPredicted(prediction.predictionHistory),
        actions: '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'
      });
    });
    return tableData;
  }

  private isGameCorrectlyPredicted(predictionHisotry: predictionHistory): string {
    if(predictionHisotry){
      return this.getCorrectOrFalseGlyphicon(predictionHisotry.correctlyPredicted);
    }
    return '';
  }

  private isGameAlreadyPredicted(predictionHistory: predictionHistory): string {
    if(predictionHistory) {
      return this.getCorrectOrFalseGlyphicon(true);
    }
    return this.getCorrectOrFalseGlyphicon(false);
  }

  private getCorrectOrFalseGlyphicon(isCorrect: boolean) {
    let correctGlyphicon = '<span class="glyphicon glyphicon-ok"></span>';
    let wrongGlyphicon = '<span class="glyphicon glyphicon-remove"></span>';
    return isCorrect ? correctGlyphicon : wrongGlyphicon;
  }

  public deletePrediction(id: number) {
    let token = this.localStorageService.getAdminLoginToken();
    let headers = new Headers({footratoken: token});
    return this.http.delete(`${this.config.predictionBackendUrl}predictions/${id}`, {headers});
  }
}
