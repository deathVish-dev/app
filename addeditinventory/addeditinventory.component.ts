import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/services/inventory.service';
import { Inventory } from 'src/services/inventory';
import { Product } from 'src/services/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-addeditinventory',
  templateUrl: './addeditinventory.component.html',
  styleUrls: ['./addeditinventory.component.css']
})
export class AddeditinventoryComponent implements OnInit {

  public  products:Product[];
  
  constructor(public productser:ProductService,
    private invenservice:InventoryService){ }


  public getProducts()
  {
    this.productser.getAllProduct().subscribe(data =>{this.products=data,error => console.log(error);
      console.log(this.products);
    });  
  }

  ngOnInit() {
    this.getProducts();
  }
  
}
