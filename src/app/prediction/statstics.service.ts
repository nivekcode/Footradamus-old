/**
 * Created by kevinkreuzer on 18.11.16.
 */
import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {Store} from "@ngrx/store";
import team from "../model/team.model";
import {Observable, Subject} from "rxjs";
import 'rxjs/add/operator/zip'
import match from "../model/match.model";

@Injectable()
export default class StatisticService {

  public $stats: Subject<any> = new Subject<any>();

  constructor(private http: Http, private store: Store<match>, @Inject('config')private config) {
  }

  getStats() {
    this.store.select('match').subscribe((match: match) => {
      Observable.zip(this._getTeamStats(match.homeTeam), this._getTeamStats(match.awayTeam))
        .subscribe(res => this.$stats.next(res));
    });
  }

  _getTeamStats(team: team){
    let teamId = team.id;
    return this.http.get(`${this.config.backendUrl}team/${teamId}${this.config.authParam}`);
  }
}
