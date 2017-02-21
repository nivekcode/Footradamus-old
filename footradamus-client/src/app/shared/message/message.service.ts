/**
 * Created by kevinkreuzer on 21.02.17.
 */

import {Injectable} from "@angular/core";
import {NotificationsService} from "angular2-notifications/lib/notifications.service";

@Injectable()
export default class MessageService {

  constructor(private notificationService: NotificationsService){

  }

  public showSuccessMessage(): void {
    console.log('Hier');
  }

  public showErrorMessage(title: string, content: string): void {
    this.notificationService.error(title, content);
  }
}
