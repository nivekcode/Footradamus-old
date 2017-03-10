/**
 * Created by kevinkreuzer on 10.03.17.
 */
import {Injectable} from "@angular/core";

@Injectable()
export default class SpinnerService{

  private spinning = false;

  constructor(){
  }

  public showSpinner(): void{
    this.spinning = true;
  }

  public hideSpinner(): void {
    this.spinning = false;
  }

  public isSpinnerVisible(): boolean {
    return this.spinning;
  }
}
