import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashborRoutingdModule } from './dashbord.module .routing';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { CounterComponent } from './counter/counter.component';
import { ReportComponent } from './report/report.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { StatsComponent } from './stats/stats.component'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DashborRoutingdModule,
    RouterModule,
    FlexLayoutModule,

    MaterialModule,
    // MatDividerModule,
    // MatSidenavModule
  ],
  exports: [CounterComponent,

  ],
  declarations: [DashbordComponent,
    CounterComponent,
    ReportComponent,
    AnalyticsComponent,
    StatsComponent,]
})
export class DashbordModule { }
