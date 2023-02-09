import { MaterialModule } from './../../module/material.module';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class FooterModule { }
