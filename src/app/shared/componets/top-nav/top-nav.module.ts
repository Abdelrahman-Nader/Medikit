import { TopNavComponent } from './top-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../module/material.module';
import { RouterOutlet } from '@angular/router';

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
    RouterOutlet,
  ]
})

export class TopNavModule { }
