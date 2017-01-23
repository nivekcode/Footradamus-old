/**
 * Created by kevinkreuzer on 22.01.17.
 */
import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import prediction from "../model/prediction.model";
import predictionTableEntry from "./predictionTableEntry.model";
import {Observable} from "rxjs";

@Injectable()
export default class PredictionListService {

  constructor(private http: Http, @Inject('config') private config) {
  }

  public getPredictionTableData(): Observable<Array<predictionTableEntry>> {
    return this.http.get(this.config.predictionBackendUrl)
      .map(res => res.json())
      .map((predictions: Array<prediction>) => this.createTableData(predictions));
  }

  private createTableData(predictions: Array<prediction>): Array<predictionTableEntry> {
    let tableData: Array<predictionTableEntry> = [];

    predictions.forEach((prediction: prediction) => {
      tableData.push({
        leagueName: prediction.leagueName,
        homeTeam: prediction.homeTeam,
        awayTeam: prediction.awayTeam,
        winner: prediction.winner,
        matchDate: prediction.matchDate
      });
    });

    return tableData;
  }
}
