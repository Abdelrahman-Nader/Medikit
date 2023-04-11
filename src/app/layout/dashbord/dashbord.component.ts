import { Component, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


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
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Doctors', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 },
  //         { title: 'Card 5', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Doctors', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 },
  //       { title: 'Card 5', cols: 2, rows: 1 }
  //     ];
  //   })
  // );


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}
}
