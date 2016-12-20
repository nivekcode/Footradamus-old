/**
 * Created by kevinkreuzer on 19.12.16.
 */

import StatisticsComponent from "./statistics.component";
import {RouterModule} from "@angular/router";

const routes = [
  { path: '', component: StatisticsComponent}
]

export default RouterModule.forChild(routes);
