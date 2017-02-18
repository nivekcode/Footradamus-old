/**
 * Created by kevinkreuzer on 18.02.17.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import NavbarComponent from "./navbar/navabar.component";
import {CommonModule} from "@angular/common";
import MessageInterceptor from "./messages/interceptor/messageInterceptor";
import {Http, XHRBackend, RequestOptions} from "@angular/http";
import messageInterceptorFactory from "./messages/interceptor/messageInterceptor.factory";
import MessagesComponent from "./messages/messages.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, MessagesComponent],
  exports: [NavbarComponent, MessagesComponent],
  providers: [
    MessageInterceptor,
    {
      provide: Http,
      useFactory: messageInterceptorFactory,
      deps: [XHRBackend, RequestOptions, MessageInterceptor]
    }
  ]
})
export default class CoreModule{

}
