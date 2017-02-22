/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {Interceptor, InterceptedRequest, InterceptedResponse} from "ng2-interceptors";
import {Injectable} from "@angular/core";
import {Subject, BehaviorSubject} from "rxjs";
import error from "../../shared/model/error.model";
import MessageService from "../../shared/message/message.service";
import HTTP_STATUSCODES from "./http.statusCodes.model";

@Injectable()
export default class HttpInterceptor implements Interceptor{

  public $errors: Subject<error> = new BehaviorSubject<error>(null);

  constructor(private messageService: MessageService){
  }

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    let isRequestOk = response.response.ok;

    if(!isRequestOk) {
      this.handleErrorResponses(response)
    }
    this.handleSuccessResponses(response);

    return response;
  }

  private handleSuccessResponses(response: InterceptedResponse) : void {
    let statusCode = response.response.status;
    let responseBody = response.response.json();
    console.log('El response', response.response.json());

    switch(statusCode){
      case HTTP_STATUSCODES.CREATED:
        this.handleSuccessfullPosts(responseBody);
        break;
      case HTTP_STATUSCODES.UPDATED || HTTP_STATUSCODES.DELETED:
        this.handleSuccessfullUpdates(responseBody);
    }
  }

  private handleSuccessfullUpdates(responseBody: any){
    console.log('Hier', responseBody);
  }

  private handleSuccessfullPosts(responseBody: any){
    let title = 'Save successfull';
    let content = `The ${responseBody.leagueName} match between ${responseBody.homeTeam} and ${responseBody.awayTeam}
                  on ${responseBody.matchDate} was successfully saved`;
    this.messageService.showSuccessMessage(title, content);
  }

  private handleErrorResponses(response: InterceptedResponse) : void {
    let errorTitile = `Oups!! A ${response.response.status} occured`;
    let errorContent = response.response.statusText;
    this.messageService.showErrorMessage(errorTitile, errorContent);
  }
}
