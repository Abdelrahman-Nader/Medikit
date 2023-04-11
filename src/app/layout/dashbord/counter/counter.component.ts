import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {

  // @Input() icon: string = '';
  // @Input() title: string = '';
  // @Input() nots: string  = '';
  // @Input() idNum: number = 0;




  constructor() {  }
  @Input() data:any = [
    {
      icon: 'doctors.png',
      title: 'Doctors',
      nots: 'Doctors joined this week',
      value: 2937,
      idNum: 3,
    },
    {
      icon: 'staffs.png',
      title: 'Staffs',
      nots: 'Staffs on vacation',
      value: 5453,
      idNum: 8,
    },
    {
      icon: 'patients.png',
      title: 'Patients',
      nots: 'New patients admitted',
      value: 170+'k',
      idNum: 175,
    },
    {
      icon: 'pharamcy.png',
      title: 'Pharamcies',
      nots: 'Medicine on reserve',
      value: 21,
      idNum: 85,
    },
  ];

  ngOnInit(): void {}
}
