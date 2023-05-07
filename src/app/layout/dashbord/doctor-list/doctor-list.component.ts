import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  constructor() {}
  icon: string =
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />';

  @Input() data: any = [
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

  ngOnInit(): void {}
}
