/**
 * Created by kevinkreuzer on 22.01.17.
 */
import {NgModule} from "@angular/core";
import PredictionListComponent from "./predictionList.component";
import routes from './predictionList.routes';

@NgModule({
  imports: [routes],
  declarations: [PredictionListComponent]
})
export default class PredictionListModule {
}
