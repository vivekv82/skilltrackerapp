import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { appRouter } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonLayoutComponent } from './shared/layouts/common-layout/common-layout.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [CommonLayoutComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    appRouter,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
