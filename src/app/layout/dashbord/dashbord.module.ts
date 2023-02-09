import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { DashborRoutingdModule } from './dashbord.module .routing';
import { MaterialModule } from 'src/app/shared/module/material.module';

@NgModule({
  imports: [
    CommonModule,
    DashborRoutingdModule,
    RouterModule,

    MaterialModule,
    // MatDividerModule,
    // MatSidenavModule
  ],
  exports: [

  ],
  declarations: [DashbordComponent]
})
export class DashbordModule { }
