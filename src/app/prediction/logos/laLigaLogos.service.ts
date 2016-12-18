/**
 * Created by kevinkreuzer on 17.12.16.
 */

import {Injectable} from "@angular/core";
import LogoServiceBase from "./logoService.interface";

@Injectable()
export default class LaLigaLogos implements LogoServiceBase{

  getLogoUrl(teamName: string): string {

    switch(teamName){
      case 'Atl. Madrid':
        return 'https://hdlogo.files.wordpress.com/2011/08/atlc3a9tico-madrid-logo.png';
      case 'Ath Bilbao':
        return 'https://hdlogo.files.wordpress.com/2011/08/athletic-bilbao-logo.png';
      case 'Eibar':
        return 'https://hdlogo.files.wordpress.com/2011/08/eibar-sd-hd-logo.png';
      case 'Malaga':
        return 'https://hdlogo.files.wordpress.com/2011/08/mc3a1laga-logo.png';
      case 'Dep. La Coruna':
        return 'https://hdlogo.files.wordpress.com/2011/08/deportivo-la-coruna-logo.png';
      case 'Granada CF':
        return 'https://hdlogo.files.wordpress.com/2011/08/granada-cf-hd-logo.png';
      case 'Barcelona':
        return 'https://hdlogo.files.wordpress.com/2011/08/barcelona-fc-logo.png';
      case 'Alaves':
        return 'http://statics.laliga.es/img/escudos/alaves.png?2017';
      case 'Las Palmas':
        return 'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/UD_Las_Palmas_logo.svg/594px-UD_Las_Palmas_logo.svg.png';
      case 'Betis':
        return 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1247px-Real_betis_logo.svg.png';
      case 'Leganes':
        return 'http://www.joma-sport.com/ka/apps/joma_com_media/assets/sponsor/svg/129.svg';
      case 'Gijon':
        return 'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Real_Sporting_de_Gijon.svg/599px-Real_Sporting_de_Gijon.svg.png';
      default:
        let convertedTeamName = teamName.toLowerCase().split(' ').join('-');;
        return `https://hdlogo.files.wordpress.com/2011/08/${convertedTeamName}-logo.png`;
    }
  }
}
