/**
 * Created by kevinkreuzer on 08.03.17.
 */
import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import MessageService from "../shared/message/message.service";

@Injectable()
export default class AdminLoginService {

  constructor(private http: Http, @Inject('config') private config, private messageService: MessageService) {
  }

  login(username: string, password: string): void {
    this.http.post(`${this.config.predictionBackendUrl}adminlogin`, {
      username, password
    })
      .subscribe(res => {
        console.log(res.json());
      },
        (error) => {
          this.messageService.showErrorMessage('Login failed', error.json().error);
        }
      )
  }
}
