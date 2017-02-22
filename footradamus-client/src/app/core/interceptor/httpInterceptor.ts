/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {Interceptor, InterceptedRequest, InterceptedResponse} from "ng2-interceptors";
import {Injectable} from "@angular/core";
import MessageService from "../../shared/message/message.service";

@Injectable()
export default class HttpInterceptor implements Interceptor{

  readonly POST_STATUS_CODE = 201;

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

    switch(statusCode){
      case this.POST_STATUS_CODE:
        this.handleSuccessfullPosts(responseBody);
        break;
    }
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
