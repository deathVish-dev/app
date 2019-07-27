import { Component, OnInit } from '@angular/core';
import { Product } from 'src/services/product';
import { Inventory } from 'src/services/inventory';
import { Vendor } from 'src/services/vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import { InventoryService } from 'src/services/inventory.service';

@Component({
  selector: 'app-editinventory',
  templateUrl: './editinventory.component.html',
  styleUrls: ['./editinventory.component.css']
})
export class EditinventoryComponent implements OnInit {

  invenId:number;
  product:Product;
  inven:Inventory;
  ven:Vendor;
  quantity:number;
  rent:number;
  msg:String;
  name:String;
  con:Boolean;
  constructor(private route:ActivatedRoute,private productService:ProductService
    ,private invenser:InventoryService,private router:Router) { 
    this.inven=new Inventory();
    this.inven.prod=new Product();
    this.quantity=0;
    this.rent=0
    this.msg="";
    this.con=false;
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      let iid=+params.get('iid');
      this.invenId=iid;
      console.log(iid);
      });

    this.invenser.getInventory(this.invenId).subscribe(data=>{
      this.inven=data;
      console.log(this.inven);
      //this.name=this.inven.prod;
      this.quantity=this.inven.quantity;
      this.rent=this.inven.rent;
    });
 


  }
  
  onClick()
  {
    if(this.con)
    {
    this.inven.quantity=this.quantity;
    this.inven.rent=this.rent;
    console.log(this.inven);
    this.invenser.updateInventory(this.inven).subscribe(data=>{
      this.msg=data;
      console.log(this.msg);
      
    });
    this.router.navigate(['inventorylist']);
    }
  }

  check()
  {
    if(this.rent>this.inven.prod.rent)
    {
      this.con=false;
      this.msg="Rent Should not be more than "+this.inven.prod.rent;
    }
    else
    {
      this.con=true;
      this.msg="";
    }
  }

}
