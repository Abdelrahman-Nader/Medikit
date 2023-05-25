import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { DashbordComponent } from '../layout/dashbord/dashbord.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent, children:[
     {path: 'layout',
        loadChildren: () =>
          import('../layout/layout.module').then(
            (mod) => mod.LayoutModule
          ),}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
