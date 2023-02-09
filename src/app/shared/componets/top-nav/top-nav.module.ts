import { TopNavComponent } from './top-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../module/material.module';

@NgModule({
  declarations: [
    TopNavComponent,
  ],
  exports: [
    TopNavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})

export class TopNavModule { }
