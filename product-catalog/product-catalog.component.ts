import { Component, OnInit } from '@angular/core';
import { Product } from 'src/services/product';
import { ProductService } from 'src/services/product.service';
import { Inventory } from 'src/services/inventory';
import { InventoryService } from 'src/services/inventory.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  public invens:Inventory[];
  
  constructor(public productser:ProductService,private invenservice:InventoryService){ }


  public getProducts()
  {
    this.invenservice.getAllInventoryList().subscribe(data=>{
      this.invens=data;
      });
  }

  ngOnInit() {
    this.getProducts();
  }

}
