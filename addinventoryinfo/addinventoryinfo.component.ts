import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/services/product';
import { ProductService } from 'src/services/product.service';
import { Inventory } from 'src/services/inventory';
import { Vendor } from 'src/services/vendor';
import { InventoryService } from 'src/services/inventory.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-addinventoryinfo',
  templateUrl: './addinventoryinfo.component.html',
  styleUrls: ['./addinventoryinfo.component.css']
})
export class AddinventoryinfoComponent implements OnInit {

  prodId:number;
  product:Product;
  inven:Inventory;
  ven:Vendor;
  quantity:number;
  rent:number;
  msg:String;
  con:Boolean;
  constructor(private route:ActivatedRoute,private productService:ProductService
    ,private invenser:InventoryService,private router:Router) { 
    this.inven=new Inventory();
    this.product=new Product();
    //this.quantity=0;
    //this.rent=0
    this.msg="";
    this.con=false;
  }

  ngOnInit() {

    this.ven=this.ven=JSON.parse(localStorage.getItem("currentuser"));
    this.route.paramMap.subscribe(params=>{
      let pid=+params.get('pid');
      this.prodId=pid;
      console.log(pid);
    });

    this.productService.getProduct(this.prodId).subscribe(data=>{
      this.product=data;
      console.log(this.product);
      this.inven.prod=this.product;
      this.inven.ven=this.ven;
      console.log(this.inven);
    });


  }
  
  onClick()
  {
    if(this.con)
    {
    
    
    this.inven.quantity=this.quantity;
    this.inven.rent=this.rent;
    console.log(this.inven);
    this.invenser.addInventory(this.inven).subscribe(data=>{
      this.msg=data;
      console.log(this.msg);
    });
    this.router.navigate(['inventorylist']);
    }
  }

  check()
  {
    if(this.rent>this.product.rent)
    {
      this.con=false;
      this.msg="Rent Should not be more than "+this.product.rent;
    }
    else
    {
      this.con=true;
      this.msg="";
    }
  }

}
