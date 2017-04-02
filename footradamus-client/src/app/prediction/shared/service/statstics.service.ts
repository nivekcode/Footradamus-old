/**
 * Created by kevinkreuzer on 18.11.16.
 */
import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {Store} from "@ngrx/store";
import team from "../../../shared/model/team.model";
import {Observable, Subject} from "rxjs";
import 'rxjs/add/operator/zip'
import match from "../../../shared/model/match.model";

@Injectable()
export default class StatisticService {

  public $teamStats: Subject<any> = new Subject<any>();
  private match: match = null;

  constructor(private http: Http, private store: Store<match>, @Inject('config') private config) {
    this.store.select('match').subscribe((match: match) => {
      this.match = match;
    });
  }

  getStatistics() {
    Observable.zip(this._getTeamStats(this.match.homeTeam), this._getTeamStats(this.match.awayTeam))
      .subscribe(res => {
        this.$teamStats.next(res);
      });
  }

  _getTeamStats(team: team) {
    let teamId = team.id;
    return this.http.get(`${this.config.backendUrl}team/${teamId}?${this.config.authParam}`);
  }
}
