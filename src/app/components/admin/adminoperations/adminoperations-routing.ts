import { RouterModule } from '@angular/router';
import { AdminoperationsComponent } from './adminoperations.component';

export const ADMIN_ROUTES = [
  {
    path: '',
    component: AdminoperationsComponent
}
];
export const AdminoperationsRouter = RouterModule.forChild(ADMIN_ROUTES);
