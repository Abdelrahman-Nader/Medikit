import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TopNavComponent } from '../componets/top-nav/top-nav.component';
import { FooterComponent } from '../componets/footer/footer.component';
import { SideNavComponent } from '../componets/side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})

export class SharedModule { }
