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
import { BookproductComponent } from './bookproduct/bookproduct.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddeditinventoryComponent } from './addeditinventory/addeditinventory.component';
import { VeninventorylistComponent } from './veninventorylist/veninventorylist.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component:ProductCatalogComponent },
  { path: 'products/:id', component:ProductdetailsComponent },
  { path: 'cart', component:CartComponent},
  { path: 'login', component: LoginComponent },
  { path: 'creg', component: CustRegComponent },
  { path: 'vreg', component: VendorRegComponent },
  { path: 'dash', component: DashComponent },
  { path: 'admindash', component: AdmindashComponent },
  { path: 'booknow', component: BookproductComponent },
  { path: 'productcrud', component: ProductcrudComponent  },
  { path: 'addprod', component:AddproductComponent },
  { path: 'addprod/:id', component:AddproductComponent },
  { path: 'addinven', component:AddeditinventoryComponent },
  { path: 'addinven/:id', component:AddeditinventoryComponent },
  { path: 'inventorylist', component:VeninventorylistComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
