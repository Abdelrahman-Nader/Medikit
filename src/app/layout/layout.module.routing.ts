import { DashbordComponent } from './dashbord/dashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashbord/dashbord.module').then(mod => mod.DashbordModule),
      },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class LayoutRoutingModule { }
