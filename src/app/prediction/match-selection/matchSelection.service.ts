/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import LogoService from "../logos/clubs/logoDispatcher.service";

import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import team from "../../model/team.model";
import league from "../../model/league.model";


@Injectable()
export default class MatchSelectionService {

  private PREMIER_LEAGUE = 'Premier League';
  private PRIMERA_DIVISION = 'Primera División';
  private BUNDESLIGA = 'Bundesliga';

  constructor(private http: Http, @Inject('config') private config, private logoService: LogoService) {
  }

  public getLeagues(): Observable<Array<league>> {
    return this.http.get(`${this.config.backendUrl}competitions${this.config.authParam}`)
      .map(res => res.json())
      .map(res => {
          return this._getFilteredLeagues(res);
        }
      );
  }

  private _getFilteredLeagues(leagues){
    return leagues.filter(league => (league.name === this.PREMIER_LEAGUE && league.region === 'England') ||
    league.name === this.PRIMERA_DIVISION || (league.name === this.BUNDESLIGA && league.region === 'Germany'));
  }

  public getTeams(leagueId: string): Observable<Array<team>> {
    return this.http.get(`${this.config.backendUrl}standings/${leagueId}${this.config.authParam}`)
      .map(res => {
        return res.json()
          .map(res => {
            return {
              name: res.team_name,
              id: res.team_id,
              clubLogo: this.logoService.getLogo(leagueId, res.team_name)
            }
          });
      });
  }
}
