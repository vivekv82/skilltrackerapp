import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { AdminoperationsComponent } from './components/admin/adminoperations/adminoperations.component';
import { AddProfileComponent } from './components/fse-enginneer/add-profile/add-profile.component';
import { CommonLayoutComponent } from './shared/layouts/common-layout/common-layout.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const router: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    component: AdminoperationsComponent,
    loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path:'fse',
    component: CommonLayoutComponent,
    loadChildren: () => import('./components/fse-enginneer/fse-enginneer.module').then((m) => m.FseEnginneerModule)
  }
];

export const appRouter: ModuleWithProviders<any> = RouterModule.forRoot(router);