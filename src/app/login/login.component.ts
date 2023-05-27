import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isHandsets = true;
  @Input() docList: any = [
    {
      nameOne: 'mohamed',
      posittion: 'admin',
    }
  ];
  constructor(private location:Location) { }

  ngOnInit(): void {
  }
  isOpen() {
    this.isHandsets = !this.isHandsets;
  }
  goBack(){
    this.location.back()
  }
}
