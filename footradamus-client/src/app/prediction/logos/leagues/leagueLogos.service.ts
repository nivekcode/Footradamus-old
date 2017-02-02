/**
 * Created by kevinkreuzer on 26.12.16.
 */

import {Injectable} from "@angular/core";
import LogoServiceBase from "../logoService.interface";

@Injectable()
export default class LeagueLogoService implements LogoServiceBase{

  getLogoUrl(leagueId: string): string {
    switch (leagueId){
      case '1204':
        return 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1280px-Premier_League_Logo.svg.png';
      case '1229':
        return 'http://www.fussballwetten.info/wp-content/uploads/2015/02/bundesliga.png';
      case '1399':
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Liga_BBVA.svg/2000px-Liga_BBVA.svg.png';
      default:
        return null;
    }
  }
}
