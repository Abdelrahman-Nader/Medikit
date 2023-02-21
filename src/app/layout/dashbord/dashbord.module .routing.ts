import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';
import { RouterModule, Routes } from '@angular/router';
import { Dash2Component } from '../dash2/dash2.component';


const routes: Routes = [
  {
    path: '',
    component: DashbordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class DashborRoutingdModule { }
