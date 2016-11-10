/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import team from "../model/team.model";

@Injectable()
export default class TeamSelectionService {

  teams: Array<team> = [];

  constructor(private http: Http) {
    this.http.get('http://api.football-api.com/2.0/standings/1204?Authorization=565ec012251f932ea4000001393b4115a8bf4bf551672b0543e35683')
      .map(res => {
        return res.json()
          .map(res => {
            return {
              name: res.team_name,
              id: res.team_id,
              clubLogo: this._createLogoUrl(res.team_name)
            }
          });
      })
      .subscribe(res => {
        this.teams = res;
      });

  }

  _createLogoUrl(teamName) {
    return `https://hdlogo.files.wordpress.com/2011/08/${teamName.toLowerCase()}-logo.png`
  }

}
