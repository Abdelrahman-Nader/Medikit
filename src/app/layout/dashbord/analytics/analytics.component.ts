import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
   const mycahrt= new Chart('myChart', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: '# of Votes',
            data: [45],
            borderWidth: 3,
            backgroundColor: ['blue'],
            weight: 8,
          },
          {
            label: '# of Votes2',
            data: [25],
            borderWidth: 3,
            backgroundColor: ['rgba(220, 100, 100)'],
            weight: 8,
          },
          {
            label: '# of Votes3',
            data: [50],
            borderWidth: 3,
            backgroundColor: ['rgba(100, 120, 200)'],
            borderJoinStyle: 'round',
            weight: 8,

          },

        ],
      },
      options: {
        radius: '80%',
        cutout: '55%', // Controls the thickness of the circle
        spacing: 155, // Controls the distance between the beginning and end of the line
        rotation: 250, // Controls the angle of direction
        plugins : {
          legend: {
            position: 'top',
            align: 'start',
            maxWidth: 5,
          }
        }
      },

    });
    console.log(mycahrt);
  }


}
