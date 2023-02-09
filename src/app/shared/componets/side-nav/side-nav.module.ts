import { MaterialModule } from './../../module/material.module';
import { SideNavComponent } from './side-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SideNavComponent,
  ],
  exports: [
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SideNavModule { }
