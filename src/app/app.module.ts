import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {Component} from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    NgImageSliderModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
