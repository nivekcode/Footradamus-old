/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {Interceptor, InterceptedRequest, InterceptedResponse} from "ng2-interceptors";
import {Injectable} from "@angular/core";

@Injectable()
export default class HttpInterceptor implements Interceptor{

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    // Do whatever with request: get info or edit it
    console.log('Der Request im Interceptor', request);
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    // Do whatever with response: get info or edit it
    console.log('Die Response im Interceptro', response);
    return response;
  }
}
