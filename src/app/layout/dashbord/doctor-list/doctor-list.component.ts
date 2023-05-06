import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  constructor() { }

@Input() datas: any = [
    { icons: 'doctors.png'},
  ]


  ngOnInit(): void {}


}
