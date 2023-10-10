import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { AdminoperationsRouter } from './adminoperations/adminoperations-routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminoperationsComponent
  ],
  imports: [
    CommonModule,
    AdminoperationsRouter, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule
  ]
})
export class AdminModule { }
