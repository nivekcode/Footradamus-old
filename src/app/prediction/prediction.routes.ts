/**
 * Created by kevinkreuzer on 18.12.16.
 */

import PredictionComponent from "./prediction.component";
import {RouterModule} from "@angular/router";

const predictionRoutes = [
  {path: '', component: PredictionComponent}
]

export default RouterModule.forChild(predictionRoutes);
