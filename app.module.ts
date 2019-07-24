import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { DashComponent } from './dash/dash.component';
import {MatButtonModule} from '@angular/material/button';
import { CustRegComponent } from './cust-reg/cust-reg.component';
import { VendorRegComponent } from './vendor-reg/vendor-reg.component';
import { CartComponent } from './cart/cart.component';
import { BookproductComponent } from './bookproduct/bookproduct.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdmindashComponent } from './admindash/admindash.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminorderComponent } from './adminorder/adminorder.component';
import { VeninventorylistComponent } from './veninventorylist/veninventorylist.component';
import { AddeditinventoryComponent } from './addeditinventory/addeditinventory.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    LoginComponent,
    ProductdetailsComponent,
    DashComponent,
    CustRegComponent,
    VendorRegComponent,
    CartComponent,
    BookproductComponent,
    AdmindashComponent,
    ProductcrudComponent,
    AddproductComponent,
    AdminorderComponent,
    VeninventorylistComponent,
    AddeditinventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    BrowserAnimationsModule,
    OwlNativeDateTimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
