/**
 * Created by kevinkreuzer on 14.03.17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import DEVICE from "./devices.model";

@Injectable()
export default class DeviceDetector {

  private readonly TABLET_MIN_WIDTH = 768;
  private readonly DESKTOP_MIN_WIDTH = 992;

  constructor() {
    Observable.fromEvent(window, 'resize')
      .map(res => window.innerWidth)
      .map(width => this.getDevice(width))
      .distinctUntilChanged()
      .subscribe(res => console.log(res));
  }

  private getDevice(width: number): DEVICE {
    if(width < this.TABLET_MIN_WIDTH){
      return DEVICE.MOBILE;
    }
    if(width < this.DESKTOP_MIN_WIDTH){
      return DEVICE.TABLET;
    }
    return DEVICE.COMPUTER;
  }

}
