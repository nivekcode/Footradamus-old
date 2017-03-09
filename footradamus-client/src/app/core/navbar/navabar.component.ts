/**
 * Created by kevinkreuzer on 20.12.16.
 */

import {Component} from "@angular/core";
import AuthenticationService from "../../shared/authentication/authentication.service";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['navbar.css']
})
export default class NavbarComponent {

  constructor(private authenticationService: AuthenticationService){
  }

}
