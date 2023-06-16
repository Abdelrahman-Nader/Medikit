import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home.module.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MaterialModule,
    MatButtonModule,

  ]
})
export class HomeModule { }
