/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import team from "../../../model/team.model";
import 'rxjs/add/operator/map'
import LogoService from "../../logos/logoDispatcher.service";
import {Subject} from "rxjs";
import league from "../../../model/league.model";

@Injectable()
export default class TeamSelectionService {
  //TODO kk: Muss das ein Subject sein
  public $teams: Subject<Array<team>> = new Subject<Array<team>>();
  public $leagues: Subject<Array<league>> = new Subject<Array<league>>();

  constructor(private http: Http, @Inject('config') private config, private logoService: LogoService) {
    this._getLeagues();
    this._getTeams();
  }

  _getLeagues() {
    this.http.get(`${this.config.backendUrl}competitions${this.config.authParam}`)
      .map(res => res.json());
  }

  _getTeams() {
    this.$teams = this.http.get(`${this.config.backendUrl}standings/1204${this.config.authParam}`)
      .map(res => {
        return res.json()
          .map(res => {
            return {
              name: res.team_name,
              id: res.team_id,
              clubLogo: this.logoService.getLogo(1204, res.team_name)
            }
          });
      });
  }
}
