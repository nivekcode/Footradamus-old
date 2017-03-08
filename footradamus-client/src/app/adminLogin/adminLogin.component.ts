/**
 * Created by kevinkreuzer on 08.03.17.
 */
import {Component} from "@angular/core";

@Component({
  selector: 'admin-login',
  templateUrl: './adminLogin.html'
})
export default class AdminLoginComponent{

  login(usernameInputElement: any, passwordInputElement: any): void{
    let username = usernameInputElement.value;
    let password = passwordInputElement.value;
  }
}
