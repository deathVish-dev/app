import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {

  public  products:Product[];
  
  constructor(public productser:ProductService){ }


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
