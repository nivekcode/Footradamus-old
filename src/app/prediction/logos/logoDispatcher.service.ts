/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Injectable} from "@angular/core";
import PremierLeagueLogos from "./premierLeagueLogos.service";

@Injectable()
export default class LogoService{

  constructor(private premierLeagueLogos: PremierLeagueLogos){

  }

  getLogo(leagueID: number, teamName: string){
    switch (leagueID){
      case 1204:
        return this.premierLeagueLogos.getLogoUrl(teamName);
      default:
        return '';
    }
  }

}
