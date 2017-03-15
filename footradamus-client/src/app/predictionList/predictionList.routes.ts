/**
 * Created by kevinkreuzer on 22.01.17.
 */
import {Route, RouterModule} from "@angular/router";
import {PredictionListComponent} from "./predictionList.component";

const predictionListRoutes: Array<Route> = [
  {path: '', component: PredictionListComponent}
];

export default RouterModule.forChild(predictionListRoutes);
