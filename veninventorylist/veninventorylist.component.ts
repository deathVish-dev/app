import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/services/inventory';
import { InventoryService } from 'src/services/inventory.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/services/vendor';
import { Product } from 'src/services/product';

@Component({
  selector: 'app-veninventorylist',
  templateUrl: './veninventorylist.component.html',
  styleUrls: ['./veninventorylist.component.css']
})
export class VeninventorylistComponent implements OnInit {

  public  invens:Inventory[];
  vid:number;
  ven:Vendor;
  prod:Product;
  
  constructor(public invenser:InventoryService,private router:Router){ 
    this.invens=null;
    this.prod=null;
  }


  public getInventorylist()
  {
    this.ven=JSON.parse(localStorage.getItem('currentuser'));
    this.invenser.getVendorInventoryList(this.ven.id).subscribe(data=>{
      console.log(data);
      this.invens=data;
      console.log(this.invens[0]);
      this.prod=this.invens[0]['prod'];
      console.log(this.prod);
      //error=>console.log(error);
    });
   
  }

  ngOnInit() {
    this.getInventorylist();
  }

  public deleteInventory(inven: Inventory): void {  
    console.log("In Delete");
    this.invenser.deleteInventory(inven.id).subscribe(data=>{
    console.log(data);
    });
 
  }  
  public editInventory(inven: Inventory): void {
    console.log("In Edit");  
    //localStorage.removeItem('editEmpId');  
    //localStorage.setItem('editEmpId', employee.id.toString());  
   this.router.navigate(['editinven', inven.id]);  
  }


}
