import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashborRoutingdModule } from './dashbord.module .routing';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { Dash2Component } from '../dash2/dash2.component';

@NgModule({
  imports: [
    CommonModule,
    DashborRoutingdModule,
    RouterModule,

    MaterialModule,
    // MatDividerModule,
    // MatSidenavModule
  ],
  exports: [Dash2Component,

  ],
  declarations: [DashbordComponent,
    Dash2Component,]
})
export class DashbordModule { }
