/**
 * Created by kevinkreuzer on 08.03.17.
 */
import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import MessageService from "../shared/message/message.service";
import LocalStorageService from "../shared/localStorage/localStorage.service";
import {Router} from "@angular/router";

@Injectable()
export default class AdminLoginService {

  constructor(private http: Http, @Inject('config') private config,
              private messageService: MessageService,
              private localStorageService: LocalStorageService,
              private router: Router) {
  }

  login(username: string, password: string): void {
    this.http.post(`${this.config.predictionBackendUrl}adminlogin`, {
      username, password
    })
      .subscribe(res => {
          this.localStorageService.setAdminLoginToken(res.json().token);
          this.messageService.showInfoMessage('Login successfull', 'Enjoy the amin functionality');
          this.router.navigate(['/predictionList']);
      },
        (error) => {
          this.messageService.showErrorMessage('Login failed', error.json().error);
        }
      )
  }
}
