import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FseEngineerRouter } from './fse-enginneer-routing';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule, FseEngineerRouter, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule
  ]
})
export class FseEnginneerModule { }
