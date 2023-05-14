import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { NgModule } from '@angular/core';

const routes: Routes = [

  { path: '', component: PaymentComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PaymentRoutingModule {};
