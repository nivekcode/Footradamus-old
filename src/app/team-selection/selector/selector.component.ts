/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Component, EventEmitter, Output, Input} from "@angular/core";
import ChangeDirection from "../../model/changeDirection.model";

@Component({
  selector: 'selector',
  templateUrl: './selector.html'
})
export default class SelectorComponent{

  @Output() onClubChange = new EventEmitter<ChangeDirection>();
  @Input() clubTitle: string;

  getPreviousClub(){
    this.onClubChange.emit(ChangeDirection.PREVIOUS);
  }

  getNextClub(){
    this.onClubChange.emit(ChangeDirection.NEXT);
  }
}
