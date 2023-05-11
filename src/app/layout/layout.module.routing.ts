import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

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
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(mod => mod.LoginModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class LayoutRoutingModule { }
