import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent{

  title = 'ng2-charts-demo';

  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: false,
  };
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A', backgroundColor:'#00008080', borderColor:'#00008090'},
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B', backgroundColor: '#c7158580', borderColor:'#c7158590' }
  ];

  constructor() {
  }


}
