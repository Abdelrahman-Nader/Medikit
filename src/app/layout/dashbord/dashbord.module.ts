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

@NgModule({
  imports: [
    CommonModule,
    DashborRoutingdModule,
    RouterModule,
    FlexLayoutModule,
    MatTableModule,
    MaterialModule,
    // MatDividerModule,
    // MatSidenavModule
  ],
  exports: [CounterComponent,ReportComponent,
    AnalyticsComponent,
    StatsComponent,


  ],
  declarations: [DashbordComponent,
    CounterComponent,
    ReportComponent,
    AnalyticsComponent,
    StatsComponent,
    OnlineComponent,
    ]
})
export class DashbordModule { }
