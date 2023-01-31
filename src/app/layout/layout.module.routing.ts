import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'Home'
      },
      {
        path: 'Home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
      }
    ]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class LayoutRoutingModule { }
