/**
 * Created by kevinkreuzer on 05.12.16.
 */

import {Component, Input} from "@angular/core";

@Component({
  selector: 'winner-logo',
  templateUrl: 'winnerLogo.html',
  styleUrls: ['winnerLogo.css']
})
export default class WinnerLogoComponent {

  @Input() private logoUrl;
}
