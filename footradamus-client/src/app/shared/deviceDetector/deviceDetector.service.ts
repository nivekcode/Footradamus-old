/**
 * Created by kevinkreuzer on 14.03.17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import DEVICE from "../model/devices.model";

@Injectable()
export default class DeviceDetector {

  private readonly TABLET_MIN_WIDTH = 768;
  private readonly DESKTOP_MIN_WIDTH = 992;
  public $device;

  constructor() {
    let $load = Observable.fromEvent(window, 'load');
    let $resize = Observable.fromEvent(window, 'resize');
    this.$device = Observable.merge($load, $resize)
      .map(res => window.innerWidth)
      .map(width => this.getDevice(width))
      .distinctUntilChanged()
  }

  private getDevice(width: number): DEVICE {
    if (width < this.TABLET_MIN_WIDTH) {
      return DEVICE.MOBILE;
    }
    if (width < this.DESKTOP_MIN_WIDTH) {
      return DEVICE.TABLET;
    }
    return DEVICE.COMPUTER;
  }
}
