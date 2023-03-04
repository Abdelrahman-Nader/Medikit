import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  @Output() arr: any = [
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
      value: 170+'K',
      idNum: 175,
    },
    {
      icon: 'pharamcy.png',
      title: 'Pharamcies',
      nots: 'Medicine on reserve',
      value: 21,
      idNum: 85+'K',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
