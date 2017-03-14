/**
 * Created by kevinkreuzer on 20.12.16.
 */

import {Component} from "@angular/core";
import AuthenticationService from "../../shared/authentication/authentication.service";
import LocalStorageService from "../../shared/localStorage/localStorage.service";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['navbar.css']
})
export default class NavbarComponent {

  protected isNavbarToggled: boolean = false;

  constructor(protected authenticationService: AuthenticationService,
              protected localStorageService: LocalStorageService) {
  }

  toggleNavbar(){
    this.isNavbarToggled = !this.isNavbarToggled;
  }
}
