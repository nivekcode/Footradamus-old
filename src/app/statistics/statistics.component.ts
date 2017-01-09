/**
 * Created by kevinkreuzer on 19.12.16.
 */

import {Component} from "@angular/core";
import StatisticsService from "./statistics.service";

@Component({
  selector: 'statistics',
  templateUrl: './statistics.html'
})
export default class StatisticsComponent {

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  constructor(private statisticsService: StatisticsService){
    this.statisticsService.getStatistics();
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
