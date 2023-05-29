import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itable } from 'src/app/itable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
detailsPerson: number=0;
details: Itable= {} as Itable;
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.detailsPerson = Number(this.activatedRoute.snapshot.paramMap.get('id'))

  }

}
