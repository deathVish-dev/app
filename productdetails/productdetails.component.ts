import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/services/product';
import { ProductService } from 'src/services/product.service';
import { CartService } from 'src/services/cart.service';
import { Customer } from 'src/services/customer';
import { Cart } from 'src/services/cart';
import { Vendor } from 'src/services/vendor';
import { Inventory } from 'src/services/inventory';
import { InventoryService } from 'src/services/inventory.service';

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
  carts:Cart;
  ven:Vendor;
  iid:number;
  inven:Inventory;
  status:Boolean;
  
  constructor(private route:ActivatedRoute,
    private productser:ProductService,
    private cartser:CartService,
    private router:Router,
    private invenser:InventoryService) { 
      this.count=0;
      this.msg='';
      this.carts=new Cart(null,0,new Customer(),new Inventory());
      this.inven=new Inventory();
      this.product=new Product();
      this.status=false;
    }

  ngOnInit() {

    this.customer= JSON.parse(localStorage.getItem('currentuser'));
    console.log('In Product Details On Init');
    console.log(this.customer);

    this.route.paramMap.subscribe(params=>{
    let iid=+params.get('id');
    this.iid=iid;
    console.log(iid);
  });

  this.invenser.getInventory(this.iid).subscribe(data=>{
    this.inven=data;
    console.log(this.inven);
    this.cartser.selectedProdCart(this.customer.id,this.inven.id).subscribe(data=>{
      if(data)
      {
      this.carts=data;
      this.status=true;
      console.log(this.carts);
      }
    if(!this.status)
    {
    this.product=this.inven.prod;
    console.log("Cart Is Not Present");
    }
    else{
    this.product=this.inven.prod;
    this.count=this.carts.quantity;
    console.log("When Cart Is Present");
    }
    });
    
  });
  }

  OnAdd()
  {
    if(this.count<this.inven.quantity && this.count<5)
    {
    this.count++;
    this.updateTotal();
    this.msg='';
    }
    else
    {
      this.msg="Not Available";
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
    if(this.carts)
    {
    console.log(this.count);
    this.carts.quantity=this.count;
    this.carts.inven=this.inven;
    this.carts.cust=this.customer;
    console.log(this.carts);
    this.cartser.storeInCart(this.carts).subscribe(data => {
    console.log(data), error => console.log(error);
    });
  }
 this.router.navigate(['cart']);
  }

}
