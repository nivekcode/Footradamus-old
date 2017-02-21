/**
 * Created by kevinkreuzer on 21.02.17.
 */
import {Component} from "@angular/core";
import {NotificationsService} from "angular2-notifications/lib/notifications.service";

@Component({
  selector: 'message',
  template: `<button (click)="createMessage()" class="btn btn-danger">Create me</button>
<simple-notifications [options]="options"></simple-notifications>`
})
export default class MessageComponent{

  readonly options = {
    timeOut: 5000,
    animate: 'scale'
  }

  constructor(private notificationService: NotificationsService){
  }

  createMessage(){
    this.notificationService.success('Test', 'Real is great');
  }
}
