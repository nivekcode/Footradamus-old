import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, XHRBackend, RequestOptions, Http} from '@angular/http';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {matchReducer} from "./reducers/match.reducer";
import {DEV_CONFIG} from "./app.config";
import appRoutes from './app.routes';
import NavbarComponent from "./navbar/navabar.component";
import HttpInterceptor from "./interceptor/httpInterceptor";
import {InterceptorService} from "ng2-interceptors";

export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, httpInterceptor: HttpInterceptor) { // Add it here
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(httpInterceptor);
  return service;
}

@NgModule({
  declarations: [
    AppComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({match: matchReducer}),
    appRoutes
  ],
  providers: [
    HttpInterceptor,
    {
      provide: Http,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, HttpInterceptor] // Add it here, in the same order as the signature of interceptorFactory
    },
    {provide: 'config', useValue: DEV_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
