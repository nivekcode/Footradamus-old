/**
 * Created by kevinkreuzer on 22.01.17.
 */
import {Injectable, Inject} from "@angular/core";
import {Http, Headers} from "@angular/http";
import prediction from "../shared/model/prediction.model";
import predictionTableEntry from "./predictionTableEntry.model";
import {Observable} from "rxjs";
import LocalStorageService from "../shared/localStorage/localStorage.service";

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
        wasPredicted: this.getGlyphiconForPrediction(prediction.predictionHistory),
        actions: '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'
      });
    });
    return tableData;
  }

  private getGlyphiconForPrediction(predictionsHistory: any) {
    let allreadyPredictedGlypicon = '<span class="glyphicon glyphicon-ok" aria-hidden="true">';
    let notYetPredictedGlypicon = '<span class="glyphicon glyphicon-remove" aria-hidden="true">';
    return predictionsHistory ? allreadyPredictedGlypicon : notYetPredictedGlypicon;
  }

  public deletePrediction(id: number) {
    let token = this.localStorageService.getAdminLoginToken();
    let headers = new Headers({footratoken: token});
    return this.http.delete(`${this.config.predictionBackendUrl}predictions/${id}`, {headers});
  }
}
