/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {NgModule} from "@angular/core";
import PremierLeagueLogos from "./premierLeagueLogos.service";
import LogoService from "./logoDispatcher.service";
import LaLigaLogos from "./laLigaLogos.service";
import BundesligaLogos from "./bundesligaLogos.service";

@NgModule({
  providers:[LogoService, PremierLeagueLogos, LaLigaLogos, BundesligaLogos]
})
export default class LogosServiceModule{
}
