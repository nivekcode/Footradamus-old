/**
 * Created by kevinkreuzer on 09.03.17.
 */
import {Injectable} from "@angular/core";

@Injectable()
export default class LocalStorageService{

  private readonly TOKEN_KEY = 'footradamusAdminToken';

  constructor(){
  }

  setAdminLoginToken(token: string){
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAdminLoginToken(): string{
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeAdminLoginToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
