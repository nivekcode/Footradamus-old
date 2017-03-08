/**
 * Created by kevinkreuzer on 08.03.17.
 */
import {NgModule} from "@angular/core";
import AdminLoginComponent from "./adminLogin.component";
import routes from './adminLogin.routes';

@NgModule({
  imports: [routes],
  declarations: [AdminLoginComponent],
  exports: [AdminLoginComponent]
})
export default class AdminLoginModule {
}
