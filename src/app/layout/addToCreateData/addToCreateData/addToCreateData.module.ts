import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCreateDataComponent } from './addToCreateData.component';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { RouterModule } from '@angular/router';
import { AddToCreateDataRoutes } from './addToCreateData.routing';

@NgModule({
  imports: [
    CommonModule,
     RouterModule,
    MaterialModule,
    AddToCreateDataRoutes

  ],
  declarations: [AddToCreateDataComponent]
})
export class AddToCreateDataModule { }
