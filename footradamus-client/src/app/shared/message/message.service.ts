/**
 * Created by kevinkreuzer on 21.02.17.
 */

import {Injectable} from "@angular/core";
import {NotificationsService} from "angular2-notifications/lib/notifications.service";

@Injectable()
export default class MessageService {

  constructor(private notificationService: NotificationsService){
  }

  public showSuccessMessage(title: string, content: string): void {
    this.notificationService.success(title, content);
  }

  public showErrorMessage(title: string, content: string): void {
    //kk: Can not be done in default param - empty string does not get assigned
    if(!title){
      title = 'Oupps!!'
    }
    if(!content){
      content = 'A unexpected error occured'
    }
    this.notificationService.error(title, content);
  }
}
