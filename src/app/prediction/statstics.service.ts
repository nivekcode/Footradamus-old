/**
 * Created by kevinkreuzer on 18.11.16.
 */
import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {Store} from "@ngrx/store";
import team from "../model/team.model";
import {Observable} from "rxjs";
import 'rxjs/add/operator/zip'
import match from "../model/match.model";

@Injectable()
export default class StatisticService {

  public $stats: Observable<any>;

  constructor(private http: Http, private store: Store<match>, @Inject('config')private config) {
  }

  getStats() {
    this.store.select('match').subscribe((match: match) => {
      this.$stats = Observable
        .zip(this._getTeamStats(match.homeTeam), this._getTeamStats(match.awayTeam))
      this._getTeamStats(match.homeTeam).subscribe((response) => console.log('Home team works', response));
      this._getTeamStats(match.awayTeam).subscribe((response) => console.log('Home team works', response));
    });

    this.$stats.subscribe((response) => {
      console.log('Im Subscribe', response);
    })
  }

  _getTeamStats(team: team){
    let teamId = team.id;
    console.log(`${this.config.backendUrl}team/${teamId}${this.config.authParam}`);
    return this.http.get(`${this.config.backendUrl}team/${teamId}${this.config.authParam}`);
  }
}
