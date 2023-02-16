import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login.module.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoginRoutingModule,
    RouterModule,
    FlexLayoutModule,
  ],
})

export class LoginModule { }
