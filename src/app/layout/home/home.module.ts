import { HomeRoutingModule } from './home.module.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/module/material.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MaterialModule,
  ]
})
export class HomeModule { }
