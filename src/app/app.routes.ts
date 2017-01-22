/**
 * Created by kevinkreuzer on 18.12.16.
 */

import {RouterModule, Route} from "@angular/router";

const routes: Array<Route> = [
  {path: '', loadChildren: 'app/prediction/prediction.module'},
  {path: 'statistics', loadChildren: 'app/statistics/statistics.module'},
  {path: 'predictionList', loadChildren: 'app/predictionList/predictionList.module'}
];

export default RouterModule.forRoot(routes);
