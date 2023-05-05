import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  constructor() { }

@Input()      data2: any = [
    { icon2: 'photo (2).png'},
  ]


  ngOnInit(): void {}


}
