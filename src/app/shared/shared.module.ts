import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
const CORE_ROUTER: Routes = [];

@NgModule({
  declarations: [
    CommonLayoutComponent
  ],
  imports: [
    CommonModule, HttpClientModule, RouterModule, BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, CommonLayoutComponent]

})
export class SharedModule { }
