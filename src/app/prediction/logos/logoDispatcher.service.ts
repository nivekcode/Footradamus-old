/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Injectable} from "@angular/core";
import PremierLeagueLogos from "./premierLeagueLogos.service";
import LaLigaLogos from "./laLigaLogos.service";

@Injectable()
export default class LogoService{

  constructor(private premierLeagueLogos: PremierLeagueLogos,
              private laLigaLogos: LaLigaLogos){
  }

  getLogo(leagueID: number, teamName: string){
    switch (leagueID){
      case 1204:
        return this.premierLeagueLogos.getLogoUrl(teamName);
      case 1399:
        return this.laLigaLogos.getLogoUrl(teamName);
      default:
        return '';
    }
  }
}
