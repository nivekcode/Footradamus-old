/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Component, Input} from "@angular/core";

@Component({
  selector: 'winner-logo',
  templateUrl: 'winnerLogo.html'
})
export default class WinnerLogoComponent {

  @Input() private logoUrl;
}
