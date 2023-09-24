import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { AdminoperationsRouter } from './adminoperations/adminoperations-routing';



@NgModule({
  declarations: [
    AdminoperationsComponent
  ],
  imports: [
    CommonModule,
    AdminoperationsRouter
  ]
})
export class AdminModule { }
