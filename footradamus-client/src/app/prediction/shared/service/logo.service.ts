/**
 * Created by kevinkreuzer on 05.12.16.
 */
import {Injectable, Inject} from "@angular/core";

@Injectable()
export default class LogoService {

  private readonly PREMIER_LEAGUE_ID: string = '1204';
  private readonly PRIMERA_DIVISION_LEAGUE_ID: string = '1399';
  private readonly BUNDESLIGA_LEAGUE_ID: string = '1229';

  private readonly PREMIER_LEAGUE_BASE_URL = 'premier-league';
  private readonly PRIMERA_DIVISION_BASE_URL = 'primera-division';
  private readonly BUNDESLIGA_BASE_URL = 'bundesliga';

  constructor(@Inject('config') private config) {
  }

  public getLogo(leagueID: string, teamName: string): string {
    let imageName = this.getImageName(teamName);
    switch (leagueID) {
      case this.PREMIER_LEAGUE_ID:
        return `${this.config.predictionBackendUrl}${this.PREMIER_LEAGUE_BASE_URL}/${imageName}`;
      case this.PRIMERA_DIVISION_LEAGUE_ID:
        return `${this.config.predictionBackendUrl}${this.PRIMERA_DIVISION_BASE_URL}/${imageName}`;
      case this.BUNDESLIGA_LEAGUE_ID:
        return `${this.config.predictionBackendUrl}${this.BUNDESLIGA_BASE_URL}/${imageName}`;
      default:
        return null;
    }
  }

  public getDrawImage(): string{
    return `${this.config.predictionBackendUrl}/common/draw.png`;
  }


  private getImageName(teamName: string) {
    let imageName = `${teamName
      .replace(/ /g, "-")
      .split('.').join("")
      .toLowerCase()}.png`;
    return imageName;
  }

  getLogoUrl(leagueId: string): string {
    switch (leagueId){
      case this.PREMIER_LEAGUE_ID:
        return `${this.config.predictionBackendUrl}${this.PREMIER_LEAGUE_BASE_URL}/league-logo.png`;
      case this.BUNDESLIGA_LEAGUE_ID:
        return `${this.config.predictionBackendUrl}${this.BUNDESLIGA_BASE_URL}/league-logo.png`;
      case this.PRIMERA_DIVISION_LEAGUE_ID:
        return `${this.config.predictionBackendUrl}${this.PRIMERA_DIVISION_BASE_URL}/league-logo.png`;
      default:
        return null;
    }
  }
}
