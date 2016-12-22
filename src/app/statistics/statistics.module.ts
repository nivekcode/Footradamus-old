/**
 * Created by kevinkreuzer on 19.12.16.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import StatisticsComponent from "./statistics.component";
import routes from './statistics.routes';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [CommonModule, routes, ChartsModule],
  declarations: [StatisticsComponent],
  exports: [StatisticsComponent]
})
export default class StatisticModule {

}
