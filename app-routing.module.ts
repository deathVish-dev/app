import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CustRegComponent } from './cust-reg/cust-reg.component';
import { VendorRegComponent } from './vendor-reg/vendor-reg.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component:ProductCatalogComponent },
  { path: 'products/:id', component:ProductdetailsComponent },
  { path: 'cart/:id', component:CartComponent},
  { path: 'login', component: LoginComponent },
  { path: 'creg', component: CustRegComponent },
  { path: 'vreg', component: VendorRegComponent },
  { path: 'dash', component: DashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
