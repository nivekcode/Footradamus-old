/**
 * Created by kevinkreuzer on 05.12.16.
 */
import {Injectable} from "@angular/core";
import LogoServiceBase from "./logoService.interface";

@Injectable()
export default class PremierLeagueLogos implements LogoServiceBase{

  private URL_ONE = 'https://hdlogo.files.wordpress.com/2013/11/';
  private URL_TWO = 'https://hdlogo.files.wordpress.com/2011/08/';

  constructor(){}

  getLogoUrl(teamName: string): string {
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
