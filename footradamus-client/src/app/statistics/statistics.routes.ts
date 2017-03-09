/**
 * Created by kevinkreuzer on 19.12.16.
 */

import StatisticsComponent from "./statistics.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: StatisticsComponent}
]

export default RouterModule.forChild(routes);
