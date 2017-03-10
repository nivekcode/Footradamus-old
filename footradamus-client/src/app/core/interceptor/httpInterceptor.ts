/**
 * Created by kevinkreuzer on 02.01.17.
 */

import {Interceptor, InterceptedRequest, InterceptedResponse} from "ng2-interceptors";
import {Injectable} from "@angular/core";
import HTTP_STATUS_CODES from './httpStatusCodes';
import MessageService from "../../shared/message/message.service";
import SpinnerService from "../../shared/spinner/spinner.service";

@Injectable()
export default class HttpInterceptor implements Interceptor {

  private readonly NO_MATCHES_FOUND_MESSAGE = 'There are no matches at the moment or we did not find matches that match the provided parameters';

  constructor(private messageService: MessageService, private spinnerSerivce: SpinnerService) {
  }

  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    this.spinnerSerivce.showSpinner();
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    this.spinnerSerivce.hideSpinner();
    let isRequestOk = response.response.ok;
    if (!isRequestOk) {
      this.handleNokResponses(response);
    }
    else {
      this.handleSuccessResponses(response);
    }
    return response;
  }

  private handleNokResponses(response: InterceptedResponse) {
    if (response.response.status === HTTP_STATUS_CODES.CONFLICT) {
      this.handleWarnings(response);
    }
    else {
      let message = response.response.json().message;
      if (this.isItANoGameFoundMessage(message)) {
        this.handleNoGameFoundMessages(message);
      }
      else {
        this.handleErrorResponses(response);
      }
    }
  }

  private isItANoGameFoundMessage(message: string) {
    return message === this.NO_MATCHES_FOUND_MESSAGE;
  }

  private handleSuccessResponses(response: InterceptedResponse): void {
    let statusCode = response.response.status;
    let responseBody = response.response.json();
    if (statusCode === HTTP_STATUS_CODES.POST_SUCCESS) {
      this.handleSuccessfullPosts(responseBody);
    }
  }

  private handleSuccessfullPosts(responseBody: any) {
    let title = 'Save successfull';
    let content = `The ${responseBody.leagueName} match between ${responseBody.homeTeam} and ${responseBody.awayTeam}
                  on ${responseBody.matchDate} was successfully saved`;
    this.messageService.showSuccessMessage(title, content);
  }

  private handleErrorResponses(response: InterceptedResponse): void {
    let errorTitile = `Oups!! A ${response.response.status} occured`;
    let errorContent = response.response.statusText;
    this.messageService.showErrorMessage(errorTitile, errorContent);
  }

  private handleWarnings(response: InterceptedResponse): void {
    let errorTitile = `Look up!!`;
    let errorContent = response.response.json().error;
    this.messageService.showInfoMessage(errorTitile, errorContent);
  }

  private handleNoGameFoundMessages(message){
    let errorTitile = `Look up!! One of the games was not found!!`;
    this.messageService.showInfoMessage(errorTitile, message);
  }
}
