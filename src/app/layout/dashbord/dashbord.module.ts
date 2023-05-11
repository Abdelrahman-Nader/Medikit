import { library } from './../../../../node_modules/@fortawesome/fontawesome-svg-core/index.d';
import { MatTableModule } from '@angular/material/table';
import { StatsComponent } from './stats/stats.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashborRoutingdModule } from './dashbord.module .routing';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { CounterComponent } from './counter/counter.component';
import { ReportComponent } from './report/report.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '../layout.module';
import { OnlineComponent } from './online/online.component';
import { Chart } from 'chart.js';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    DashborRoutingdModule,
    RouterModule,
    FlexLayoutModule,
    MatTableModule,
    MaterialModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    // MatPaginator,
    // FontAwesomeModule,

    // MatDividerModule,
    // MatSidenavModule
  ],
  exports: [
    CounterComponent,
    ReportComponent,
    AnalyticsComponent,
    StatsComponent,
  ],
  declarations: [
    DashbordComponent,
    CounterComponent,
    ReportComponent,
    AnalyticsComponent,
    StatsComponent,
    OnlineComponent,
    DoctorListComponent,
  ],
})
export class DashbordModule {
  // constructor(library: FaIconLibrary){}
}
