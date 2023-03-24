import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashborRoutingdModule } from './dashbord.module .routing';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { Dash2Component } from '../dash2/dash2.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CounterComponent } from './counter/counter.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    DashborRoutingdModule,
    RouterModule,
    HighchartsChartModule,

    MaterialModule,
    // MatDividerModule,
    // MatSidenavModule
    FlexLayoutModule//.withConfig({ addFlexToParent: false })
  ],
  exports: [Dash2Component,

  ],
  declarations: [DashbordComponent,
    Dash2Component,
    CounterComponent,
    WidgetsComponent,]
})
export class DashbordModule { }
