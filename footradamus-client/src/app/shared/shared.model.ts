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
import SpinnerService from "./spinner/spinner.service";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [SimpleNotificationsModule.forRoot(), LoadersCssModule, CommonModule],
  declarations: [MessageComponent, SpinnerComponent],
  exports: [MessageComponent, SpinnerComponent],
  providers: [MessageService, LocalStorageService, AuthenticationService, SpinnerService]
})
export default class SharedModule{
}
