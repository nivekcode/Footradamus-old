/**
 * Created by kevinkreuzer on 22.01.17.
 */
import {NgModule} from "@angular/core";
import {PredictionListComponent} from "./predictionList.component";
import routes from './predictionList.routes';
import PredictionListService from "./predictionList.service";
import { Ng2TableModule } from 'ng2-table/ng2-table';
import {CommonModule} from "@angular/common";
import {MobileListComponent} from "./mobileList/mobileList.component";
import FilterTableComponent from "./filterTable/filterTable.component";

@NgModule({
  imports: [CommonModule, routes, Ng2TableModule],
  declarations: [PredictionListComponent, MobileListComponent, FilterTableComponent],
  providers: [PredictionListService]
})
export default class PredictionListModule {
}
