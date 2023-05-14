import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment.module.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/module/material.module';

@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [PaymentComponent]
})
export class PaymentModule { }
