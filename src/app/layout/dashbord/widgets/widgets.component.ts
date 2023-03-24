import * as Highcharts from 'highcharts';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  chartOptions!: {};
  Highcharts = Highcharts;
  renderIcons: any;
  chart:any ;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {

        chart: {
          type: 'solidgauge',
          height: '110%',
          events: {
            render: this.renderIcons,
          },
        },

        title: {
          text: 'Activity',
          style: {
            fontSize: '24px',
          },
        },

        tooltip: {
          borderWidth: 0,
          backgroundColor: 'none',
          shadow: false,
          style: {
            fontSize: '16px',
          },
          valueSuffix: '%',
          pointFormat:
            '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',


        pane: {
          startAngle: 0,
          endAngle: 360,
          background: [
            {
              // Track for Move
              outerRadius: '112%',
              innerRadius: '88%',
              backgroundColor: Highcharts.color(
                Highcharts.getOptions().colors![0]
              )
                .setOpacity(0.3)
                .get(),
              borderWidth: 0,
            },
            {
              // Track for Exercise
              outerRadius: '87%',
              innerRadius: '63%',
              backgroundColor: Highcharts.color(
                Highcharts.getOptions().colors![1]
              )
                .setOpacity(0.3)
                .get(),
              borderWidth: 0,
            },
            {
              // Track for Stand
              outerRadius: '62%',
              innerRadius: '38%',
              backgroundColor: Highcharts.color(
                Highcharts.getOptions().colors![2]
              )
                .setOpacity(0.3)
                .get(),
              borderWidth: 0,
            },
          ],
        },

        yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: [],
        },

        plotOptions: {
          solidgauge: {
            dataLabels: {
              enabled: false,
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true,
          },
        },

        series: [
          {
            name: 'Move',
            data: [
              {
                color: Highcharts.getOptions().colors![0],
                radius: '112%',
                innerRadius: '88%',
                y: 80,
              },
            ],
          },
          {
            name: 'Exercise',
            data: [
              {
                color: Highcharts!.getOptions().colors![1],
                radius: '87%',
                innerRadius: '63%',
                y: 65,
              },
            ],
          },
          {
            name: 'Stand',
            data: [
              {
                color: Highcharts.getOptions().colors![2],
                radius: '62%',
                innerRadius: '38%',
                y: 50,
              },
            ],
          },
        ],
      }
};
  }

}
