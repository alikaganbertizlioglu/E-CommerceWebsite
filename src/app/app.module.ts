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
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './products/search/search.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './products/product/product.component';
import { FilterComponent } from './products/filter/filter.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    SearchComponent,
    ContactComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    NgImageSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
      MatSlideToggleModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
