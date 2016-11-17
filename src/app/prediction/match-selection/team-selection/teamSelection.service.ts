/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import team from "../../../model/team.model";
import 'rxjs/add/operator/map'

@Injectable()
export default class TeamSelectionService {

  private URL_ONE = 'https://hdlogo.files.wordpress.com/2013/11/';
  private URL_TWO = 'https://hdlogo.files.wordpress.com/2011/08/';
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

    switch (teamName.toLowerCase()) {
      case 'tottenham':
        return `${this.URL_ONE}tottenham-hotspur.png`;
      case 'everton':
        return `${this.URL_ONE}everton-fc-logo1.png`;
      case 'watford':
        return `${this.URL_TWO}watford-fc.png`;
      case 'southampton':
        return `${this.URL_ONE}southampton-fc.png`;
      case 'west brom':
        return `${this.URL_ONE}west-bromwich-albion-hd-logo.png`;
      case 'bournemouth':
        return `${this.URL_TWO}afc-bournemouth.png`;
      case 'leicester':
        return `${this.URL_ONE}leicester-city-fc-hd-logo.png`;
      case 'crystal palace':
        return `${this.URL_ONE}crystal-palace-fc.png`;
      case 'swansea':
        return `${this.URL_ONE}swansea-city-afc.png`;
      case 'middlesbrough':
        return 'https://hdlogo.files.wordpress.com/2015/01/middlesbrough-fc-hd-logo.png';
      case 'burnley':
        return 'https://hdlogo.files.wordpress.com/2015/01/burnley.png';
      case 'hull city':
        return 'https://hdlogo.files.wordpress.com/2013/11/hull-city-afc.png?w=500';
      default:
        return `https://hdlogo.files.wordpress.com/2013/11/${teamName.toLowerCase().replace(/ /g, "-")}.png`;
    }
  }
}
