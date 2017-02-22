/**
 * Created by kevinkreuzer on 18.02.17.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {Http, XHRBackend, RequestOptions} from "@angular/http";

import NavbarComponent from "./navbar/navabar.component";
import HttpInterceptor from "./interceptor/httpInterceptor";
import httpInterceptorFactory from "./interceptor/httpInterceptor.factory";
import SharedModule from "../shared/shared.model";

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [
    HttpInterceptor,
    {
      provide: Http,
      useFactory: httpInterceptorFactory,
      deps: [XHRBackend, RequestOptions, HttpInterceptor]
    }
  ]
})
export default class CoreModule{

}
