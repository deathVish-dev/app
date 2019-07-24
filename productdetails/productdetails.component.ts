import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/services/product';
import { ProductService } from 'src/services/product.service';
import { CartService } from 'src/services/cart.service';
import { Customer } from 'src/services/customer';
import { Cart } from 'src/services/cart';
import { Vendor } from 'src/services/vendor';
import { Inventory } from 'src/services/inventory';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product:Product;
  count:number;
  msg:String;
  total:number;
  venrent:number;
  customer:Customer;
  var:any;
  carts:Cart;
  ven:Vendor;
  inven:Inventory;
  
  constructor(private route:ActivatedRoute,
    private productser:ProductService,
    private cartser:CartService,
    private router:Router) { }

  ngOnInit() {
    this.ven= JSON.parse(localStorage.getItem('currentuser'));
    console.log('In Product Details On Init');
    console.log(this.ven);
    this.count=0;
    this.msg='';
    this.product=new Product(null,'','','',null,null,'');
    this.route.paramMap.subscribe(params=>{
    let pid=+params.get('id');
    console.log(pid);
    this.cartser.selectedProdCart(this.customer.id,pid)
    .subscribe(cart=>{
      this.var=cart,error=>console.error(error);
      if(this.var)
      {
      let prod=this.var.product;
      console.log(prod);
      this.product=prod;
      let cnt=+this.var['quantity'];
      this.count=cnt;
      this.total=this.count*this.product.rent;
      this.venrent=this.product.rent;
      }
    });
    if(!this.var)
    {
        this.productser.getProduct(pid).subscribe(data=>{
          this.product=data;
          console.log(this.product);
    });
    }
  });
  }

  OnAdd()
  {
    if(this.count<5)
    {
    this.count++;
    this.updateTotal();
    this.msg='';
    }
    else
    {
      this.msg="Cannot Add More Than 5 Items";
    }
  }
  OnRemove()
  {
    if(this.count>0)
    {
    this.count--;
    this.updateTotal();
    this.msg='';
    }
    else
    {
      this.msg="No items in cart";
    }
  }
  updateTotal()
  {
    this.total=this.count*this.product.rent;
  }

  AddToCart()
  {
    if(this.var)
    {
    console.log("If var is already present");
    this.var['quantity']=this.count;
    console.log(this.var['quantity']);
    this.cartser.storeInCart(this.var).subscribe(data => {
      console.log(data), error => console.log(error);
    
    });
  }
  else{
    console.log("If var is not present");
      this.carts=new Cart(null,this.product,this.count,this.customer);
      console.log(this.carts);
      this.cartser.storeInCart(this.carts).subscribe(data => {
        console.log(data), error => console.log(error);
      });
  }
    this.router.navigate(['cart']);
    
//    this.src.updateuser(this.userModel).subscribe(data => console.log(data), error => console.log(error)); 
  }

}
