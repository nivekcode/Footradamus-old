/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {Interceptor, InterceptedRequest, InterceptedResponse} from "ng2-interceptors";
import {Injectable} from "@angular/core";
import {Subject, BehaviorSubject} from "rxjs";
import error from "../../model/error.model";

@Injectable()
export default class MessageInterceptor implements Interceptor{

  public $errors: Subject<error> = new BehaviorSubject<error>(null);

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    let statusCode = response.response.status;
    if(statusCode !== 200) {
      this.$errors.next({
        statusCode: statusCode,
        message: response.response.statusText
      });
    }
    return response;
  }
}
