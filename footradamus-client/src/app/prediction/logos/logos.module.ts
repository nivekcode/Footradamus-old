/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {NgModule} from "@angular/core";
import PremierLeagueLogos from "./clubs/premierLeagueLogos.service";
import LogoService from "./clubs/logoDispatcher.service";
import LaLigaLogos from "./clubs/laLigaLogos.service";
import BundesligaLogos from "./clubs/bundesligaLogos.service";
import LeagueLogoService from "./leagues/leagueLogos.service";

@NgModule({
  providers:[LogoService, PremierLeagueLogos, LaLigaLogos, BundesligaLogos, LeagueLogoService]
})
export default class LogosServiceModule{
}
