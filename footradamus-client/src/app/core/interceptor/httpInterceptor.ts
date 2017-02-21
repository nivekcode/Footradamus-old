/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {Interceptor, InterceptedRequest, InterceptedResponse} from "ng2-interceptors";
import {Injectable} from "@angular/core";
import {Subject, BehaviorSubject} from "rxjs";
import error from "../../shared/model/error.model";

@Injectable()
export default class HttpInterceptor implements Interceptor{

  public $errors: Subject<error> = new BehaviorSubject<error>(null);

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    let isRequestOk = response.response.ok;

    if(!isRequestOk) {
      this.$errors.next({
        statusCode: response.response.status,
        message: response.response.statusText
      });
    }
    return response;
  }

  hideError(){
    this.$errors.next(null);
  }
}
