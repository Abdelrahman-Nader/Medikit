import { Component, OnInit, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { IdataCount } from 'src/app/IdataCount';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  icon: string =
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />';

    data!:Array<IdataCount>

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.data = [
      {
        icon: 'doctors.png',
        title: 'Doctors',
        nots: 'Doctors joined this week',
        value: '2937',
        idNum: 3,
        custClass: 'red-color',
      },
      {
        icon: 'staffs.png',
        title: 'Staffs',
        nots: 'Staffs on vacation',
        value: '5453',
        idNum: 8,
        custClass: 'green-color',
      },
      {
        icon: 'patients.png',
        title: 'Patients',
        nots: 'New patients admitted',
        value: '170'+'k',
        idNum: 175,
        custClass: 'blue-color',
      },
      {
        icon: 'pharamcy.png',
        title: 'Pharamcies',
        nots: 'Medicine on reserve',
        value: '21',
        idNum: 85,
        custClass: 'black-color',
      },
    ];
  }
}
