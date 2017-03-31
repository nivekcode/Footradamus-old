/**
 * Created by kevinkreuzer on 21.02.17.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'message',
  template: `<simple-notifications [options]="options"></simple-notifications>`
})
export default class MessageComponent {

  readonly options = {
    timeOut: 7000,
    animate: 'scale',
    maxStack: 3
  }

  constructor() {
  }
}
