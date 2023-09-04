import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { loginRouter } from './login/login.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, loginRouter, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule
  ]
})

export class LoginModule { }

const LOGIN_PAGES_ROUTER: Routes = [
  {
    path: '/login',
    component: LoginComponent
  }
];
