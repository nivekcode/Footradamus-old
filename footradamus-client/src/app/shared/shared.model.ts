/**
 * Created by kevinkreuzer on 17.02.17.
 */
import {NgModule} from "@angular/core";
import MessageComponent from "./message/message.component";
import {SimpleNotificationsModule} from "angular2-notifications/lib/simple-notifications.module";
import MessageService from "./message/message.service";
import LocalStorageService from "./localStorage/localStorage.service";
import AuthenticationService from "./authentication/authentication.service";
import SpinnerComponent from "./spinner/spinner.component";
import {LoadersCssModule} from "angular2-loaders-css";

@NgModule({
  imports: [SimpleNotificationsModule.forRoot(), LoadersCssModule],
  declarations: [MessageComponent, SpinnerComponent],
  exports: [MessageComponent, SpinnerComponent],
  providers: [MessageService, LocalStorageService, AuthenticationService]
})
export default class SharedModule{
}
