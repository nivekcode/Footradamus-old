/**
 * Created by kevinkreuzer on 09.03.17.
 */
import {Component, ViewEncapsulation} from "@angular/core";
import SpinnerService from "./spinner.service";

@Component({
  selector: 'spinner',
  templateUrl: './spinner.html',
  styleUrls: ['./spinner.css'],
  encapsulation: ViewEncapsulation.None
})
export default class SpinnerComponent{

  constructor(protected spinnerService: SpinnerService){
  }
}
