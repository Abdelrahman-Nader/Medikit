import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource,MatTable } from '@angular/material/table';
import { log } from 'console';
import { get } from 'http';
import { url } from 'inspector';
import { emit } from 'process';
import { Observable } from 'rxjs';
import { Itable } from 'src/app/itable';
import { ServicesTableService } from 'src/app/services/services-table.service';
import { TableElment } from 'src/app/table-elment';
// import { faFilm } from '@fortawesome/free-solid-svg-icons';
// import { faFish } from '@fortawesome/free-solid-svg-icons';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss'],
})
export class OnlineComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );
  //
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();
  displayedColumns: string[] = ['id','name','username','Age','Gender','AppointFor','imgURL'];

  dataSource = new MatTableDataSource<TableElment>()//Observable<TableElment[]> ;
   oneItem: any;
   globalData: any  =[];
  data: any;
  constructor(private Services: ServicesTableService, http: HttpClient) {}

  ngOnInit(): void {
    this.Services.getData().subscribe((data: TableElment[]) => {
      this.dataSource.data= data;
      this.globalData = data;
      console.log(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeCart(index : number) {
    this.globalData.splice(index, 1)
    this.dataSource.data = this.globalData
    console.log(this.globalData)
    }


    edit(item: TableElment ){

console.log(item)
    }




  // removeCart(i: any) {
  //   this.Services.getOneItem(++i).subscribe(res =>{
  //     console.log(i)
  //     this.oneItem = res;
  //     this.oneItem.splice(i,1)
  //   });



}
