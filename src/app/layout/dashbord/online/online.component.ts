import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  @ViewChild(MatPaginator) paginator: MatPaginator  = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'city',
  ];
  dataSource: any;
  iconUrl: any;

  constructor(private Services: ServicesTableService) {}
  ngOnInit(): void {
    this.Services.getData().subscribe((data) => {
      this.dataSource = new MatTableDataSource<Itable>(data);
      this.dataSource.paginator = this.paginator;

    });

    console.log(this.dataSource);
  }

}
