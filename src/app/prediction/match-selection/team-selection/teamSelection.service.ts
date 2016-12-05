/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import team from "../../../model/team.model";
import 'rxjs/add/operator/map'
import LogoService from "../../logos/logoDispatcher.service";

@Injectable()
export default class TeamSelectionService {
  teams: Array<team> = [];

  constructor(private http: Http, @Inject('config') private config, private logoService: LogoService) {
    this.http.get(`${this.config.backendUrl}standings/1204${this.config.authParam}`)
      .map(res => {
        return res.json()
          .map(res => {
            return {
              name: res.team_name,
              id: res.team_id,
              clubLogo: this.logoService.getLogo(1204, res.team_name)
            }
          });
      })
      .subscribe(res => {
        this.teams = res;
      });
  }
}
