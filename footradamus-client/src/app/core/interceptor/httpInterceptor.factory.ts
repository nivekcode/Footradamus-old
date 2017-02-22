/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {XHRBackend, RequestOptions} from "@angular/http";
import HttpInterceptor from "./httpInterceptor";
import {InterceptorService} from "ng2-interceptors";

export default function httpInterceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, httpInterceptor: HttpInterceptor) {
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(httpInterceptor);
  return service;
}
