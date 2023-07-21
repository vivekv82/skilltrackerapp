import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FseEngineerComponent } from './components/fse-engineer/fse-engineer.component';
import { environment } from '../environments/environment';
import { appRouter } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FseEngineerComponent],   
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouter,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
