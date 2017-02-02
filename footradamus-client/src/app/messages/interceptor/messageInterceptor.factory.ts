/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {XHRBackend, RequestOptions} from "@angular/http";
import MessageInterceptor from "./messageInterceptor";
import {InterceptorService} from "ng2-interceptors";

export default function messageInterceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, httpInterceptor: MessageInterceptor) {
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(httpInterceptor);
  return service;
}
