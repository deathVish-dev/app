import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/services/inventory';
import { InventoryService } from 'src/services/inventory.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/services/vendor';

@Component({
  selector: 'app-veninventorylist',
  templateUrl: './veninventorylist.component.html',
  styleUrls: ['./veninventorylist.component.css']
})
export class VeninventorylistComponent implements OnInit {

  public  invens:Inventory[];
  vid:number;
  ven:Vendor;
  
  constructor(public invenser:InventoryService,private router:Router){ }


  public getInventorylist()
  {
    this.ven=JSON.parse(localStorage.getItem('currentuser'));
    this.invenser.getInventoryList(this.ven.id).subscribe(data=>{
      this.invens=data,error=>console.log(error);
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
   this.router.navigate(['addinven', inven.id]);  
  }


}
