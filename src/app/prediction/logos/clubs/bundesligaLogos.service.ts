/**
 * Created by kevinkreuzer on 18.12.16.
 */

import {Injectable} from "@angular/core";
import LogoServiceBase from "../logoService.interface";

@Injectable()
export default class BundesligaLogos implements LogoServiceBase {

  getLogoUrl(teamName: string): string {

    switch (teamName) {
      case 'Bayern Munich':
        return 'https://hdlogo.files.wordpress.com/2011/08/bayern-munchen-logo.png';
      case 'RB Leipzig':
        return 'http://bilder.bild.de/fotos/rb-leipzig-47475324/Bild/2.bild.svg';
      case 'Dortmund':
        return 'https://hdlogo.files.wordpress.com/2011/08/borussia-dortmund-logo.png';
      case '1. FC Koln':
        return 'https://hdlogo.files.wordpress.com/2011/08/fc-kc3b6ln-logo.png';
      case 'SC Freiburg':
        return 'https://hdlogo.files.wordpress.com/2011/08/sc-freiburg-hd-logo.png';
      case 'Schalke':
        return 'https://hdlogo.files.wordpress.com/2011/08/schalke-04-logo.png';
      case '1. FSV Mainz 05':
        return 'https://hdlogo.files.wordpress.com/2011/08/mainz-05-logo.png';
      case 'B. Monchengladbach':
        return 'https://hdlogo.files.wordpress.com/2011/08/borussia-mc3b6nchengladbach-logo.png';
      case 'FC Augsburg':
        return 'https://hdlogo.files.wordpress.com/2011/08/augsburg-logo.png';
      case 'SV Werder Bremen':
        return 'https://hdlogo.files.wordpress.com/2011/08/werder-bremen-logo.png';
      case 'Ingolstadt':
        return 'https://astroarena.files.wordpress.com/2015/08/ingolstadt-logo.png';
      case 'Darmstadt':
        return 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Darmstadt_98_football_club_new_logo_2015.png';
      default:
        let convertedTeamName = teamName.toLowerCase().split(' ').join('-');
        return `https://hdlogo.files.wordpress.com/2011/08/${convertedTeamName}-logo.png`;
    }
  }
}
