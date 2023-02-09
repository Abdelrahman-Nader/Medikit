import { FooterModule } from './../shared/componets/footer/footer.module';
import { SideNavModule } from './../shared/componets/side-nav/side-nav.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout.module.routing';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/module/shared.module';
import { FooterComponent } from '../shared/componets/footer/footer.component';
import { SideNavComponent } from '../shared/componets/side-nav/side-nav.component';
import { TopNavComponent } from '../shared/componets/top-nav/top-nav.component';
import { MaterialModule } from '../shared/module/material.module';
import { TopNavModule } from '../shared/componets/top-nav/top-nav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // SharedModule,
    LayoutRoutingModule,
    TopNavModule,
    SideNavModule,
    FooterModule,
  ],
  declarations: [
    LayoutComponent,
  ],

})

export class LayoutModule { }
