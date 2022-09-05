import { style } from '@angular/animations';
import { Component} from '@angular/core';
import { ChartOptions } from 'chart.js' 

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent{

  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download Sales' ], [ 'In Store Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 600, 100 ],
    backgroundColor: [
      'purple',
      '#000080',
      '#c71585',
    ]
    
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }


}
