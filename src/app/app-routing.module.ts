import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule),
    // canActivate: [AuthGuard]
  },
  // {
  //   path: 'Login',
  //   loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule),
  // },
  // {
  //   path: 'SignUp',
  //   loadChildren: () => import('./sign-up/sign-up.module').then(mod => mod.SignUpModule),
  // },
  // { path: '**', component: Page404Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
