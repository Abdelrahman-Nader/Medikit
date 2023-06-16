import { Location } from '@angular/common';
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
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data!: number;
  details!:any;
  showUpdate!: TableElment;
  dataId : number[]=[];
  newArrData : number[]=[];

  @Input() detaisFromOnline!: Observable<TableElment[]>;

  constructor(
    private activatedRoute: ActivatedRoute, // activate route :بتخليني اعرف المعلومات  اللي في root
    private prodDetails: ServicesTableService,
    private location: Location // to used in method goback to can goback when i click th botton
  ) {}
  ngOnInit(): void {
    this.data = Number(this.activatedRoute.snapshot.paramMap.get('id')); // id : from router link  path: 'home/:id'
   this.details= this.prodDetails.currnetData.subscribe(
      (onShow) => (this.showUpdate = onShow)
    );
  }
  newArryData(){
 let idData= this.details
 console.log(idData)
 return idData
  }

  goBack() {
    this.location.back();
  }
  prev(){
 let idData= this.newArryData()
 console.log(idData)
 return idData
  //  ide.findIndex((elem:any)=>elem==this.ide)


  }
  next(){

  }
}
