import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Itable } from 'src/app/itable';
import { ServicesTableService } from 'src/app/services/services-table.service';
import { TableElment } from 'src/app/table-elment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
data! :number ;
details!:  Observable<TableElment[]> ;
showUpdate!:TableElment ;
@Input() detaisFromOnline!:  Observable<TableElment[]>

  constructor( private activatedRoute: ActivatedRoute, private prodDetails : ServicesTableService ) { } // activate route :بتخليني اعرف المعلومات  اللي في root

  ngOnInit(): void {
this.data = Number(this.activatedRoute.snapshot.paramMap.get('id'))  // id : from router link  path: 'home/:id'
console.log(this.data)
// this.showUpdate= String(this.data)
// console.log(this.showUpdate)
   this.prodDetails.currnetData.subscribe(onShow => this.showUpdate = onShow)
    console.log(this.showUpdate)

   // this.prodDetails.showData(this.showUpdate)

  }

}
