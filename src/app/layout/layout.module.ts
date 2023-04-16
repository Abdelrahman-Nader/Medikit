import { DashbordModule } from './dashbord/dashbord.module';
import { FooterModule } from './../shared/componets/footer/footer.module';
import { SideNavModule } from './../shared/componets/side-nav/side-nav.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutRoutingModule } from './layout.module.routing';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/module/material.module';
import { TopNavModule } from '../shared/componets/top-nav/top-nav.module';
// import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavComponent } from './nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    DashbordModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
  ],
  declarations: [
    LayoutComponent,
    NavComponent,
    // NavComponent,
  ],

})

export class LayoutModule { }
