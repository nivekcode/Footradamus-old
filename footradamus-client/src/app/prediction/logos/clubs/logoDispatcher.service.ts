/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Injectable} from "@angular/core";
import PremierLeagueLogos from "./premierLeagueLogos.service";
import LaLigaLogos from "./laLigaLogos.service";
import BundesligaLogos from "./bundesligaLogos.service";

@Injectable()
export default class LogoService{

  private PREMIER_LEAGUE_ID: string = '1204';
  private LALIGA_LEAGUE_ID: string = '1399';
  private BUNDESLIGA_LEAGUE_ID: string = '1229';

  constructor(private premierLeagueLogos: PremierLeagueLogos,
              private laLigaLogos: LaLigaLogos, private bundesligaLogos: BundesligaLogos){
  }

  getLogo(leagueID: string, teamName: string){
    switch (leagueID){
      case this.PREMIER_LEAGUE_ID:
        return this.premierLeagueLogos.getLogoUrl(teamName);
      case this.LALIGA_LEAGUE_ID:
        return this.laLigaLogos.getLogoUrl(teamName);
      case this.BUNDESLIGA_LEAGUE_ID:
        return this.bundesligaLogos.getLogoUrl(teamName);
      default:
        return null;
    }
  }
}
