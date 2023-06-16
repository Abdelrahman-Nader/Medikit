import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  displayedColumns: string[] = [
    'id',
    'name',
    'codeNum',
    'Age',
    'kindOf',
    'AppointFor',
    'imgURL',
  ];

  dataSource = new MatTableDataSource<TableElment>(); //Observable<TableElment[]> ;
  oneItem: any;
  globalData: any = [];
  @Input() detailsData!: TableElment[];
  upDate!: TableElment;
  constructor(
    private Services: ServicesTableService,
    http: HttpClient,
    private toster: ToastrService
  ) {}

  ngOnInit(): void {
    this.Services.getData().subscribe((data: TableElment[]) => {
      this.dataSource.data = data;
      this.globalData = data;
      console.log(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  removeCart(index: number) {
    if (index) {
      this.globalData.splice(index, 1);
      this.dataSource.data = this.globalData;
      this.toster.warning('it was deleted');
    }
    console.log(this.globalData);
  }

  public edit(item: TableElment) {
    this.Services.showData(item)
    // this.detailsData = item;
    // console.log(this.detailsData);

    // console.log(item)
    // return this.detailsData;
  }

  // removeCart(i: any) {
  //   this.Services.getOneItem(++i).subscribe(res =>{
  //     console.log(i)
  //     this.oneItem = res;
  //     this.oneItem.splice(i,1)
  //   });
}
function output(): (
  target: OnlineComponent,
  propertyKey: 'detailsData'
) => void {
  throw new Error('Function not implemented.');
}
