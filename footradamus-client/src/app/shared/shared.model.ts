/**
 * Created by kevinkreuzer on 17.02.17.
 */
import {NgModule} from "@angular/core";
import MessageComponent from "./message/message.component";
import {SimpleNotificationsModule} from "angular2-notifications/lib/simple-notifications.module";

@NgModule({
  imports: [SimpleNotificationsModule.forRoot()],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export default class SharedModule{
}
