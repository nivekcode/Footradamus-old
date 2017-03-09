/**
 * Created by kevinkreuzer on 08.03.17.
 */
import {Component} from "@angular/core";
import AdminLoginService from "./adminLogin.service";

@Component({
  selector: 'admin-login',
  templateUrl: './adminLogin.html'
})
export default class AdminLoginComponent{

  constructor(private adminLoginService: AdminLoginService){
  }

  login(usernameInputElement: any, passwordInputElement: any): void{
    let username = usernameInputElement.value;
    let password = passwordInputElement.value;
    this.adminLoginService.login(username, password);
  }
}
