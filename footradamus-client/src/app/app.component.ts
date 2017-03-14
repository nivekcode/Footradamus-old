import { Component } from '@angular/core';
import DeviceDetector from "./shared/deviceDetector/deviceDetector.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css']
})
export class AppComponent {

  constructor(private deviceDetector: DeviceDetector){
    this.deviceDetector.$device.subscribe(res => console.log(res));
  }
}
