/**
 * Created by kevinkreuzer on 10.11.16.
 */

import {Component, Input} from "@angular/core";

@Component({
  selector: 'club-logo',
  templateUrl: 'clubLogo.html',
  styleUrls: ['clubLogo.css']
})
export default class ClubLogoComponent{

  @Input() logoUrl: string;
}
