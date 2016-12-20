/**
 * Created by kevinkreuzer on 18.12.16.
 */

import {RouterModule} from "@angular/router";

const routes = [
  {path: '', loadChildren: 'app/prediction/prediction.module'},
  {path: 'statistics', loadChildren: 'app/statistics/statistics.module'}
];

export default RouterModule.forRoot(routes);