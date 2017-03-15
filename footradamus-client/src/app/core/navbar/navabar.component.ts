/**
 * Created by kevinkreuzer on 20.12.16.
 */

import {Component} from "@angular/core";
import AuthenticationService from "../../shared/authentication/authentication.service";
import LocalStorageService from "../../shared/localStorage/localStorage.service";
import DeviceDetector from "../../shared/deviceDetector/deviceDetector.service";
import {Observable} from "rxjs";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['navbar.css']
})
export default class NavbarComponent {

  protected isNavbarToggled: boolean = false;
  protected $device: Observable<boolean>;

  constructor(protected authenticationService: AuthenticationService,
              protected localStorageService: LocalStorageService,
              private deviceDetector: DeviceDetector) {
    this.$device = this.deviceDetector.isMobileDevice();
  }

  toggleNavbar(){
    this.isNavbarToggled = !this.isNavbarToggled;
  }
}
