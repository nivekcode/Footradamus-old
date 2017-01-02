/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {NgModule} from "@angular/core";
import MessagesComponent from "./messages.component";
import MessageInterceptor from "./interceptor/messageInterceptor";
import {Http, XHRBackend, RequestOptions} from "@angular/http";
import messageInterceptorFactory from "./interceptor/messageInterceptor.factory";

@NgModule({
  declarations: [MessagesComponent],
  exports: [MessagesComponent],
  providers: [
    MessageInterceptor,
    {
      provide: Http,
      useFactory: messageInterceptorFactory,
      deps: [XHRBackend, RequestOptions, MessageInterceptor]
    }
  ]
})
export default class MessagesModule{
}
