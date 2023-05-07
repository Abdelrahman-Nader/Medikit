import { Component, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  icon: string =
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />';

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
  @Output()  data2: any = [
    {
      photo: 'photo (2).png',
      name: 'islam',
      nots: 'Doctors joined this week',
      matIcon: 'icon',
    },
    {
      photo: 'photo (3).png',
      name: 'Ahmed',
      nots: 'Doctors joined this week',
      matIcon: 'icon',
    },
    {
      photo: 'photo (4).png',
      name: 'Abdo',
      nots: 'Doctors joined this week',
      matIcon: 'icon',
    },
    {
      photo: 'photo (5).png',
      name: 'Gasser',
      nots: 'Doctors joined this week',
      matIcon: 'icon',
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
