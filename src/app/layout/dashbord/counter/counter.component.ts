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

  @Input() data: any;


  constructor() {  }

  ngOnInit(): void {}
}
