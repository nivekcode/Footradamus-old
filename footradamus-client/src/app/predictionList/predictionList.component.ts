/**
 * Created by kevinkreuzer on 15.03.17.
 */
import {Component} from "@angular/core";
import DeviceDetector from "../shared/deviceDetector/deviceDetector.service";

@Component({
  selector: 'prediction-list',
  templateUrl: './predictionList.html'
})
export class PredictionListComponent{

  protected $isMobileDevice;

  constructor(private deviceDetector: DeviceDetector){
    this.$isMobileDevice = this.deviceDetector.isMobileDevice();
  }
}
