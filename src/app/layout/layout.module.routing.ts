import { LayoutModule } from './layout.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { TopNavComponent } from '../shared/componets/top-nav/top-nav.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((mod) => mod.HomeModule),
      },
      {
        path: 'home/:id',
        loadChildren: () =>
          import('./home/home.module').then((mod) => mod.HomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashbord/dashbord.module').then(
            (mod) => mod.DashbordModule
          ),
      },

      {
        path: 'payment',
        loadChildren: () =>
          import('./payment/payment.module').then((mod) => mod.PaymentModule),
      },
    ],
  },
  {
    path: '/login',
    component: TopNavComponent,
    children: [
      {
        path: '/login',
        loadChildren: () =>
          import('../login/login.module').then((mod) => mod.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
