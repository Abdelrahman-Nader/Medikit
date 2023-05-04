import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-module.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/module/shared.module';
import { MaterialModule } from './shared/module/material.module';
import { Page404Component } from './page404/page404.component';
import { matDrawerAnimations } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServicesTableService } from './services/services-table.service';
import { NgChartsModule } from 'ng2-charts';
// import { Chart } from 'chart.js';
// import {MomentDateAdapter} from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    // MomentDateAdapter,
    RouterModule,
    // Chart,
    NgChartsModule,


  ],
  providers: [ServicesTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
