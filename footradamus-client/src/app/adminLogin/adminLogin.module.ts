/**
 * Created by kevinkreuzer on 08.03.17.
 */
import {NgModule} from "@angular/core";
import AdminLoginComponent from "./adminLogin.component";
import routes from './adminLogin.routes';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [routes, FormsModule],
  declarations: [AdminLoginComponent],
  exports: [AdminLoginComponent]
})
export default class AdminLoginModule {
}
