/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {Interceptor, InterceptedRequest, InterceptedResponse} from "ng2-interceptors";
import {Injectable} from "@angular/core";
import {Subject, BehaviorSubject} from "rxjs";
import error from "../../shared/model/error.model";
import MessageService from "../../shared/message/message.service";

@Injectable()
export default class HttpInterceptor implements Interceptor{

  public $errors: Subject<error> = new BehaviorSubject<error>(null);

  constructor(private messageService: MessageService){
    this.messageService.showSuccessMessage();
  }

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    let isRequestOk = response.response.ok;

    if(!isRequestOk) {
      let errorTitile = `Oups!! A ${response.response.status} occured`;
      let errorContent = response.response.statusText;
      this.messageService.showErrorMessage(errorTitile, errorContent);
    }
    return response;
  }

  hideError(){
    this.$errors.next(null);
  }
}
