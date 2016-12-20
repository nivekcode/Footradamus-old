/**
 * Created by kevinkreuzer on 19.12.16.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import StatisticsComponent from "./statistics.component";
import routes from './statistics.routes';

@NgModule({
  imports: [CommonModule, routes],
  declarations: [StatisticsComponent],
  exports: [StatisticsComponent]
})
export default class StatisticModule {

}
