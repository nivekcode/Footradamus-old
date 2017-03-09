/**
 * Created by kevinkreuzer on 08.03.17.
 */
import AdminLoginComponent from "./adminLogin.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: AdminLoginComponent}
];

export default RouterModule.forChild(routes);
