/**
 * Created by kevinkreuzer on 09.03.17.
 */
import {Injectable} from "@angular/core";
import LocalStorageService from "../localStorage/localStorage.service";
import {JwtHelper} from "angular2-jwt";

@Injectable()
export default class AuthenticationService{

  private jwtHelper: JwtHelper = new JwtHelper();
  private readonly ADMIN_SECRET = 'footradmin';

  constructor(private localStorageService: LocalStorageService){
  }

  hasValidAdminToken(){
    let token = this.localStorageService.getAdminLoginToken();
    if(token) {
      let isExpired = this.jwtHelper.isTokenExpired(token);
      let decoded = this.jwtHelper.decodeToken(token);
      return !isExpired && decoded.data === this.ADMIN_SECRET;
    }
    return false;
  }
}
