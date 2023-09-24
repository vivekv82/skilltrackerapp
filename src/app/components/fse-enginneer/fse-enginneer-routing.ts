import { RouterModule } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

export const ADMIN_ROUTES = [
  {
    path: 'addProfile',
    component: AddProfileComponent,
  },
  {
    path: 'updateProfile',
    component: UpdateProfileComponent
  }
];
export const FseEngineerRouter = RouterModule.forChild(ADMIN_ROUTES);
