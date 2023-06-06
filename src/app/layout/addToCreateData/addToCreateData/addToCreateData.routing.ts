import { Routes, RouterModule } from '@angular/router';
import { AddToCreateDataComponent } from './addToCreateData.component';

const routes: Routes = [
  {
    path: '', component: AddToCreateDataComponent
   },
];

export const AddToCreateDataRoutes = RouterModule.forChild(routes);
